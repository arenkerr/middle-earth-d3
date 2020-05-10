import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3'; 
import scrollIntoView from 'scroll-into-view';
import buildHeirarchy from '../util/buildHeirarchy';
import buildTable from '../util/buildTable';
import Person from './Person';
import '../styles/tree.scss'

function Chart({ treeData, size }) {
    // format data for use with D3
    const data = buildHeirarchy(treeData);
    const graph = useRef() as React.MutableRefObject<SVGSVGElement>;

    // state for displaying profile
    const [person, setPerson] = useState();
    const [show, setShow] = useState(false);

    const handleClick = (node) => {
        setPerson(node.data.data);
        setShow(true);
    }

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
        const getLength = path => path.getTotalLength();

        svgElement.selectAll('spouse-path')
            .data(root.descendants().slice(1))
            .enter()
            .append('path')
            .attr('d', (d: any) => {
                if (d.parent.data.id !== '0' && d.data.data.husband === true) {
                    return (
                        `M ${nodeLocation[d.data.data.spouseId].y}, 
                        ${nodeLocation[d.data.data.spouseId].x}
                        C ${d.y + 300}, ${d.x} ${d.y}, ${d.x} ${d.y}, ${d.x}`
                    );
                }
                return null;
            })
            .attr("stroke-dasharray", function() { return `${getLength(this)} ${getLength(this)}` })
            .attr('stroke-dashoffset', function() { return -getLength(this) })
            .style('fill', 'none')
            .attr('stroke', '#000FFF')
            .attr('id', (d: any) => d.data.data.id);

        // add circles for nodes
        svgElement.selectAll('g')
            .data(root.descendants().slice(1))
            .enter()
            .append('g')
            .attr('transform', (d: any) => spouseCheck(d, 'translate(' + d.y + ',' + d.x + ')'))
            .attr('id', (d: any) => `node${d.data.data.id}`)
            .append('circle')
                .attr('r', (d: any) => spouseCheck(d, 6))
                .attr('cursor', 'pointer')
                .style('fill', '#ccc')
                .on('click', (d: any) => {
                    let path = d3.select(`[id="${d.data.data.id}"]`);
                    path.transition()
                        .duration(2000)
                        .attr("stroke-dashoffset", 0)
                    
                    let nameLabel = d3.select(`[id="name${d.data.data.id}"]`);
                    nameLabel.transition()
                        .duration(2500)
                        .style('opacity', 1);

                    let spouseNode = document.getElementById(`node${d.data.data.spouseId}`);
                    scrollIntoView(spouseNode, { time: 3500 });
                });
        
        // add text elements for name labels
        svgElement.selectAll('name-label')
            .data(root.descendants().slice(1))
            .enter()
            .append('text')
                .attr('transform', (d: any) => {
                    return `translate(${d.y - 20},${d.x + 20})`
                })
                .text((d: any) => spouseCheck(d, d.data.data.name ))
                .attr('class', 'tree__name-label')
                .style('cursor', 'pointer')
                .on('click', (d: any) => handleClick(d));

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
            .attr('class', 'tree__spouse-label')
            .attr('id', (d: any) => `name${d.data.data.id}`);

    }, [graph, data, size.height, size.width, person]);

    return (
        <div className="tree-container">
            {show 
                ? <Person profile={person} />
                : null 
            }
            <svg className="tree" ref={graph} />
        </div>
    );
}

export default Chart;