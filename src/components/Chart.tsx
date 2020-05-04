import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3'; 
import hobbits from '../data/hobbits.js';
import elves from '../data/elves.js';
import buildHeirarchy from '../util/buildHeirarchy'

function Chart() {
    // format data for use with D3
    const data = buildHeirarchy(elves);
    console.log(data);

    const graph = useRef() as React.MutableRefObject<SVGSVGElement>;
    const height = 6000;
    const width = 6000;

    useEffect(() => {
        const svgElement = d3.select(graph.current);
        svgElement
            .attr("width", width)
            .attr("height", height)
            .append("g")
                .attr("transform", "translate(40,0)");

        const cluster = d3.cluster()
            .size([width, height]);

        const root = d3.hierarchy(data, d => d.children);
        cluster(root);

        console.log('root', root.descendants().slice(1));

        // paths
        svgElement.selectAll('path')
            .data( root.descendants().slice(1) )
            .enter()
            .append('path')
            .attr("d", function(d: any) {
                return "M" + d.x + "," + d.y
                        + "C" + d.parent.x + "," + d.y
                        + " " + d.parent.x + "," + d.parent.y 
                        + " " + d.parent.x + "," + d.parent.y;
                    })
            .style("fill", 'none')
            .attr("stroke", '#ccc')
        
        // nodes
        svgElement.selectAll("g")
            .data(root.descendants())
            .enter()
            .append("g")
            .attr("transform", function(d: any) {
                return "translate(" + d.x + "," + d.y + ")"
            })
            .append("text").text(function(d: any) { 
                console.log(d.data.data.name)
                return d.data.data.name})
            .append("circle")
                .attr("r", 7)
                .style("fill", "#69b3a2")
                .attr("stroke", "black")
                .style("stroke-width", 2);

    }, [graph, data]);



    return (
        <div className="container">
            <h1>Chart</h1>
            <svg ref={graph} />
        </div>
    );
}

export default Chart;