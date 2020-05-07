import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3'; 
import hobbits from '../data/hobbits.js';
import elves from '../data/elves.js';
import buildHeirarchy from '../util/buildHeirarchy'

function Chart() {
    // format data for use with D3
    const data = buildHeirarchy(elves);
    const graph = useRef() as React.MutableRefObject<SVGSVGElement>;
    const height = 2000;
    const width = 1000;
    const margin = { top: 40, right: 40, bottom: 40, left: 40 }

    // console.log(data);

    useEffect(() => {
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

        // root.children?.forEach((child: any) => {
        //     if (child.parent.data.id === "0") {
        //         child.y = 60;
        //     }
        // })

        // paths from parent to child
        svgElement.selectAll('path')
            .data(root.descendants().slice(1))
            .enter()
            .append('path')
            .attr("d", (d: any) => {
                if (d.parent.data.id !== "0") {
                    return "M" + d.y + "," + d.x
                        + "C" + (d.parent.y + 50) + "," + d.x
                        + " " + (d.parent.y + 150) + "," + d.parent.x 
                        + " " + d.parent.y + "," + d.parent.x;
                }

                return null;
            })
            .style("fill", 'none')
            .attr("stroke", '#ccc')

        
        // nodes
        
        svgElement.selectAll("g")
            .data(root.descendants().slice(1))
            .enter()
            .append("g")
            .attr("transform", (d: any) => {
                if (d.data.data.spouse && d.data.data.husband === true) {
                    // move node near spouse 
                    return "translate(" + nodeLocation[d.data.data.spouseId].y + "," + nodeLocation[d.data.data.spouseId].x + ")"
                }
                return "translate(" + d.y + "," + d.x + ")"
            })
            .attr("class", "child")
                .append('circle')
                    .attr('r', 10)
                    .style("fill", '#ccc')
        
        svgElement.selectAll("child")
            .data(root.descendants().slice(1))
            .enter()
            .append("text")
                .attr("transform", (d: any) => {
                    if (d.data.data.spouse && d.data.data.husband === true) {
                        // move node near spouse 
                        return "translate(" + nodeLocation[d.data.data.spouseId].y + "," + nodeLocation[d.data.data.spouseId].x + ")"
                    }
                    return `translate(${d.y + 5},${d.x + 10})`
                })
                .text(function(d: any) { 
                    return d.data.data.name 
                })
                .style("fill", '#000000')

        // svgElement.selectAll("child")
        //     .data(root.descendants().slice(1))
        //     .enter()
        //     .append('path')
        //     .attr("d", (d: any) => {
        //         if (d.data.data.spouse && d.data.data.husband === true) {
        //             // find the spouse coords
        //             let coords = nodeLocation[d.data.data.spouse.id];
        //             return  `M ${d.x} ${d.y - 5} L ${coords.x} ${coords.y}`
        //         }
        //         return null;
        //     })
        //     .style("fill", 'none')
        //     .attr("stroke", '#0000FF')
        //     .attr("class", "spouse-path")

    }, [graph, data]);



    return (
        <div className="container">
            <h1>Chart</h1>
            <svg ref={graph} />
        </div>
    );
}

export default Chart;