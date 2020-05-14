import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3'; 
import scrollIntoView from 'scroll-into-view';
import Container from '@material-ui/core/Container';
import buildHeirarchy from '../util/buildHeirarchy';
import buildTable from '../util/buildTable';
import Person from './Person';
import '../styles/tree.scss'

function Chart({ treeData, size, translate, scrollTo = '' }) {
    // format data for use with D3
    const data = buildHeirarchy(treeData);
    const graph = useRef() as React.MutableRefObject<SVGSVGElement>;

    // state for displaying profile
    const [person, setPerson] = useState();
    const [position, setPosition] = useState({});
    const [show, setShow] = useState(false);

    // handle click and hover on nodes
    const handleClick = (node) => {
        let coords = { x: node.x, y: node.y }
        setPerson(node.data.data);
        setPosition(coords);
        setShow(true);
    }

    d3.select('body').on('click', () => {
        if (d3.event.path && d3.event.path[0].classList.contains('tree__node') === false) {
            setShow(false)
        }
    });

    const mouseOver = (id) => {
        return d3.select(`[id="${id}"]`)
                .transition()
                .duration(1500)
                .attr('r', 7);
    }
    
    const mouseOut = (id) => {
        return d3.select(`[id="${id}"]`)
        .transition()
        .duration(1500)
        .attr('r', 5);
    }
  
    useEffect(() => {
        const height = size.height;
        const width = size.width;
        const svgElement = d3.select(graph.current);

        svgElement
            .attr('height', height)
            .attr('width', width)        

        const cluster = d3.cluster()
            .nodeSize([44, 180])

        const root = d3.hierarchy(data, d => d.children);
        cluster(root);

        // create a hash table of ids and coords, used for location of spouse
        let nodeLocation = buildTable(root);

        // conditional rendering to handle spouses
        const spouseCheck = (node, renderVal) => node.parent.data.id === '0' && node.data.data.husband === true ? null : renderVal;

        // paths from child to parent
        svgElement.selectAll('path')
            .data(root.descendants().slice(1))
            .enter()
            .append('g')
            .attr('transform', `translate(-150, ${translate})`)  
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
            .style('stroke-width', '2')
            .attr('class', 'tree__path')

        // paths from person to spouse
        const getLength = path => path.getTotalLength();

        svgElement.selectAll()
            .data(root.descendants().slice(1))
            .enter()
            .append('g')
            .attr('transform', `translate(-150, ${translate})`)  
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
            .attr('class', 'tree__spouse-path')
            .attr('id', (d: any) => d.data.data.id);

        // add circles for nodes
        svgElement.selectAll('tree__node')
            .data(root.descendants().slice(1))
            .enter()
            .append('g')
            .attr('transform', `translate(-150, ${translate})`)  
            .append('g')
            .attr('transform', (d: any) => spouseCheck(d, 'translate(' + d.y + ',' + d.x + ')'))
            .append('circle')
                .attr('id', (d: any) => `node${d.data.data.id}`)
                .attr('r', (d: any) => spouseCheck(d, 5))
                .attr('class', 'tree__node')
                .on('click', (d: any) => handleClick(d))
                .on('mouseover', (d: any) => mouseOver(`node${d.data.data.id}`))
                .on('mouseout', (d: any) => mouseOut(`node${d.data.data.id}`));
        
        // add text elements for name labels
        svgElement.selectAll('text')
            .data(root.descendants().slice(1))
            .enter()
            .append('g')
            .attr('transform', `translate(-150, ${translate})`)  
            .append('text')
                .attr('transform', (d: any) => {
                    return `translate(${d.y - 20},${d.x + 20})`
                })
                .text((d: any) => {
                    let name = d.data.data.name;
                    if (d.data.data.husband === true) {
                        name = `${d.data.data.name} ↟`
                    }
                    return spouseCheck(d, name )
                })
                .attr('class', (d: any) => {
                    return d.data.data.husband === true 
                        ? 'tree__name-label tree__name-label--husband' 
                        : 'tree__name-label';
                })
                .on('click', (d: any) => {
                    if (d.data.data.husband === true) {
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
                    }
                })

        // add husbands' name next to wife  
        svgElement.selectAll('.tree__spouse-label')
            .data(root.descendants().slice(1))
            .enter()
            .append('g')
            .attr('transform', `translate(-150, ${translate})`)  
            .append('text')
            .attr('transform', (d: any) => {
                return d.data.data.husband === true 
                    ? `translate(${nodeLocation[d.data.data.spouseId].y - 20},${nodeLocation[d.data.data.spouseId].x - 10})` 
                    : null
            })
            .text((d: any) => d.data.data.husband === true ? d.data.data.name : null)
            .attr('class', 'tree__spouse-label')
            .attr('id', (d: any) => `name${d.data.data.id}`)

            svgElement.select("#tooltip")
                .attr('transform', `translate(-150, ${translate})`)
                .raise(); 

        // if scrollTo is provided in props, scroll there:
        const startPos = document.getElementById(scrollTo);
        startPos && scrollIntoView(startPos);
    });

    return (
        <Container className="tree-container">
                <svg className="tree" ref={graph}>
                    {show && <Person profile={person} coords={position} />}
                </svg>
        </Container>
    );
}

export default Chart;