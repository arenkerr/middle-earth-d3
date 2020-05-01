import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3'; 

function Person(props:any) {
  const ref = useRef() as React.MutableRefObject<SVGSVGElement>;
  const data = [ 150 , 200, 300 , 400, 500 ];

  useEffect(() => {
    const svgElement = d3.select(ref.current);

    data.forEach(num => {
      svgElement.append("circle")
      .attr("cx", num)
      .attr("cy", 70)
      .attr("r",  50)
    });
  });

  return (
    <div>
      <h1>hello</h1>
      <svg
        ref={ref}
      />
    </div>
  );
}

export default Person;