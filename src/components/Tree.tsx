import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3'; 
import buildHeirarchy from '../util/buildHeirarchy';
import buildTable from '../util/buildTable';

function Chart({ treeData, size }) {
    // format data for use with D3
    const data = buildHeirarchy(treeData);
    const graph = useRef() as React.MutableRefObject<SVGSVGElement>;

    // console.log(data);

    useEffect(() => {
        const height = size.height;
        const width = size.width;
        const margin = { top: 40, right: 40, bottom: 40, left: 40 }
        const svgElement = d3.select(graph.current);

        svgElement
            .attr('height', height + margin.top + margin.bottom)
            .attr('width', width + margin.left + margin.right)

        const cluster = d3.cluster()
            .size([height - margin.top - margin.bottom, width - margin.left - margin.right]);

        const root = d3.hierarchy(data, d => d.children);
        cluster(root);
        console.log(root.children);

        // create a hash table of ids and coords, used for location of spouse
        let nodeLocation = buildTable(root);

        // conditional rendering to handle spouses
        const spouseCheck = (node, renderVal) => node.parent.data.id === '0' && node.data.data.husband === true ? null : renderVal;

        // paths from child to parent
        svgElement.selectAll('path')
            .data(root.descendants().slice(1))
            .enter()
            .append('path')
            .attr('d', (d: any) => {
                if (d.parent.data.id !== '0') {
                    return 'M' + d.y + ',' + d.x
                        + 'C' + (d.parent.y + 50) + ',' + d.x
                        + ' ' + (d.parent.y + 150) + ',' + d.parent.x 
                        + ' ' + d.parent.y + ',' + d.parent.x;
                }

                return null;
            })
            .style('fill', 'none')
            .attr('stroke', '#ccc');

        // paths from person to spouse
        const spousePath = svgElement.selectAll('g')
            .data(root.descendants().slice(1))
            .enter()
            .append('path')
            .attr('d', (d: any) => {
                if (d.parent.data.id !== '0' && d.data.data.husband === true) {
                    return 'M' + nodeLocation[d.data.data.spouseId].y + ',' + nodeLocation[d.data.data.spouseId].x
                    + 'C' + (d.y + 300) + ',' + d.x
                    + ' ' + (d.y) + ',' + d.x 
                    + ' ' + d.y + ',' + d.x;
                }
                return null;
            })
            .style('fill', 'none')
            .style('stroke-dasharray', ('20, 10'))
            .style('opacity', 0.05)
            .attr('stroke', '#000FFF')
            .attr('class', 'path-spouse')
            .attr('id', (d: any) => d.data.data.id);

        // add circles for nodes
        svgElement.selectAll('g')
            .data(root.descendants().slice(1))
            .enter()
            .append('g')
            .attr('transform', (d: any) => spouseCheck(d, 'translate(' + d.y + ',' + d.x + ')'))
            .attr('class', 'child')
                .append('circle')
                    .attr('r', (d: any) => spouseCheck(d, 6))
                    .style('fill', '#ccc')
                    .on('click', (d: any, i, n) => {
                        const path: any = document.getElementById(d.data.data.id)
                        path.setAttribute('style', 'opacity: 1');
                        spousePath.style('fill', 'none');
                    });
        
        // add text elements for name labels
        svgElement.selectAll('child')
            .data(root.descendants().slice(1))
            .enter()
            .append('text')
                .attr('transform', (d: any) => {
                    return `translate(${d.y - 20},${d.x + 20})`
                })
                .text((d: any) => spouseCheck(d, d.data.data.name ))
                .attr('font-size', '12px')
                .style('fill', '#000000');

        // add husbands' name next to wife
        svgElement.selectAll('child')
            .data(root.descendants().slice(1))
            .enter()
            .append('text')
            .attr('transform', (d: any) => {
                return d.data.data.husband === true 
                    ? `translate(${nodeLocation[d.data.data.spouseId].y - 20},${nodeLocation[d.data.data.spouseId].x - 10})` 
                    : null
            })
            .text((d: any) => d.data.data.husband === true ? d.data.data.name : null)
            .attr('font-size', '12px')
            .style('opacity', '0.25')
            .style('fill', '#000FFF')
    }, [graph, data, size.height, size.width]);

    return (
        <div className="tree-container">
            <svg ref={graph} />
        </div>
    );
}

export default Chart;