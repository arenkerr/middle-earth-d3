import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3'; 
import { d3ize, parse } from 'gedcom-d3';
import hobbits from '../data/hobbits.js';
import { json } from 'd3';
import buildTree from '../util/buildTree'

function Hobbits() {
    // format data for use with D3
    const data = buildTree(hobbits);
    console.log(data);
    const graph = useRef() as React.MutableRefObject<SVGSVGElement>;
    const height = 800;
    const width = 600;


    useEffect(() => {
        const svgElement = d3.select(graph.current);
        svgElement
            .attr("width", width)
            .attr("height", height);

        svgElement.selectAll('g')
            .append('circle')
                .attr("r", 7)
                .style("fill", '#000000');

    }, [graph, data]);



    return (
        <div className="container">
            <h1>Hobbits 2D</h1>
            <svg ref={graph} />
        </div>
    );
}

export default Hobbits;