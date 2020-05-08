import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3'; 
import hobbits from '../data/hobbits.js';
import elves from '../data/elves.js';
import buildHeirarchy from '../util/buildHeirarchy';
import { svg } from 'd3';

function Chart() {
    // format data for use with D3
    const data = buildHeirarchy(elves);
    const graph = useRef() as React.MutableRefObject<SVGSVGElement>;

    // console.log(data);

    useEffect(() => {
        const height = 4000;
        const width = 1000;
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
        let nodeLocation = {};

        function makeTable(root) {
            root.children.forEach(node => {
                nodeLocation[node.data.id] = {x: node.x, y: node.y}
                if (node.children) {
                    return makeTable(node)
                } 
            } )
        }

        makeTable(root);

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

        // paths from child to their spouse
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
            .attr('id', (d: any) => {
                console.log(d.data.data.id)
                return d.data.data.id;
            })

        // add circles for nodes
        const circle = svgElement.selectAll('g')
            .data(root.descendants().slice(1))
            .enter()
            .append('g')
            .attr('transform', (d: any) => {
                if (d.parent.data.id === '0' && d.data.data.husband === true) {
                    return null;
                }
                return 'translate(' + d.y + ',' + d.x + ')'
            })
            .attr('class', 'child')
                .append('circle')
                    .attr('r', (d: any) => {
                        if (d.parent.data.id === '0' && d.data.data.husband === true) {
                            return null;
                        }
                        return 6;
                    })
                    .style('fill', '#ccc')
                    .on('click', (d: any, i, n) => {
                        const path: any = document.getElementById(d.data.data.id)
                        console.log(path)
                        path.setAttribute('style', 'opacity: 1');
                        spousePath.style('fill', 'none');
                    } )
        
        // add names
        svgElement.selectAll('child')
            .data(root.descendants().slice(1))
            .enter()
            .append('text')
                .attr('transform', (d: any) => {
                    return `translate(${d.y - 25},${d.x + 25})`
                })
                .text(function(d: any) { 
                    if (d.parent.data.id === '0' && d.data.data.husband === true) {
                        return null;
                    }
                    return d.data.data.name 
                })
                .style('fill', '#000000')

        // add names of husbands next to wife
        svgElement.selectAll('child')
            .data(root.descendants().slice(1))
            .enter()
            .append('text')
            .attr('transform', (d: any) => {
                if (d.data.data.husband === true) {
                    // move node near spouse 
                    return `translate(${nodeLocation[d.data.data.spouseId].y - 25},${nodeLocation[d.data.data.spouseId].x - 15})`
                }
                return null;
            })
            .text(function(d: any) { 
                if (d.data.data.husband === true) {
                    return d.data.data.name 
                }
            })
            .style('fill', (d: any) => {
                return `#000FFF`
            })
    }, [graph, data]);



    return (
        <div className='container'>
            <h1>Chart</h1>
            <svg ref={graph} />
        </div>
    );
}

export default Chart;