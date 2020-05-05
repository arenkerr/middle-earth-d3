import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3'; 
import hobbits from '../data/hobbits.js';
import elves from '../data/elves.js';
import buildHeirarchy from '../util/buildHeirarchy'

function Chart() {
    // format data for use with D3
    const data = buildHeirarchy(elves);
    const graph = useRef() as React.MutableRefObject<SVGSVGElement>;
    const height = 1000;
    const width = 6000;

    // console.log(data);

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
        console.log(root);

        root.children?.forEach((child: any) => {
            if (child.parent.data.id === "0") {
                child.y = 40;
            }
        })

        // paths
        svgElement.selectAll('path')
            .data(root.descendants().slice(1))
            .enter()
            .append('path')
            .attr("d", (d: any) => {
                if (d.parent.data.id !== "0" && d.data.data.render === true) {
                    return "M" + d.x + "," + d.y
                            + "C" + d.parent.x + "," + d.y
                            + " " + d.parent.x + "," + d.parent.y 
                            + " " + d.parent.x + "," + d.parent.y;
                }

                return null;
                    })
            .style("fill", 'none')
            .attr("stroke", '#ccc')
        
        // nodes

        svgElement.selectAll("g")
            .data(root.descendants())
            .enter()
            .append("g")
            .attr("transform", (d: any) => {
                if (d.data.data.render === true) {
                    return "translate(" + d.x + "," + d.y + ")"
                }
                return null;
            })
            .append("text").text(function(d: any) { 
                if (d.data.data.spouse.name !== undefined) {
                    return d.data.data.name + " " + d.data.data.spouse.name
                }
                if (d.data.data.render === true) {
                return d.data.data.name
                }
            })

    }, [graph, data]);



    return (
        <div className="container">
            <h1>Chart</h1>
            <svg ref={graph} />
        </div>
    );
}

export default Chart;