import React, { useRef, useCallback } from 'react';
import { d3ize, parse } from 'gedcom-d3';
import { ForceGraph3D } from 'react-force-graph';
import hobbits from '../data/hobbits.js'

function Hobbits() {

    const data = d3ize(parse(hobbits));
    const graph = useRef() as React.MutableRefObject<any>;
    
    console.log(data);

    const handleClick = useCallback(node => {
        // Aim at node from outside it
        const distance = 40;
        const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);

        graph.current.cameraPosition(
          { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
          node, // lookAt ({ x, y, z })
          3000  // ms transition duration
        );
      }, [graph]);

    return (
        <ForceGraph3D 
            graphData={data}
            onNodeClick={handleClick}
            ref={graph}
        />
    );
}

export default Hobbits;