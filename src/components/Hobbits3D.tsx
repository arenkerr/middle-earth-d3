import React, { useRef, useCallback, useEffect } from 'react';
import { d3ize, parse } from 'gedcom-d3';
import { ForceGraph3D } from 'react-force-graph';
import hobbits from '../data/hobbits.js'

function Hobbits3D() {

    const data = d3ize(parse(hobbits));
    const graph = useRef() as React.MutableRefObject<any>;
    
    useEffect(() => {
        console.log(data)
        data.nodes.forEach(node => {
            // if (node.fy < 0) {
            //     node.fy = 1805;
            // }
            if (node.yod > 3019) {
                node.yod = 3019;
            }
        })
      });

    console.log(data);

    const handleClick = useCallback(node => {
        // Aim at node from outside it
        const distance = 40;
        const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
        console.log(node);
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

export default Hobbits3D;