import * as d3 from 'd3'; 
import { d3ize, parse } from 'gedcom-d3';

export default function buildTree(input) {
    const data = d3ize(parse(input));

    // organize data into heirarchy by creating a list of parent-child links
    const list : any[] = [];

    // a "fake root" is provided for nodes without known parents, to prevent multiple root error
    // https://github.com/d3/d3-hierarchy/blob/master/README.md#stratify
    const fakeRoot = {
        name: "root",
        parentId: "",
        id: '0',
    }

    data.nodes.forEach(node => {
        let person = {
            name: node.name,
            parentId: "",
            id: node.id,
        }

        data.links.forEach(link => {
            if (link.target === node.id && link.targetType === "CHIL") {
                // find parent/child relationship
                person.parentId = link.source;
            } 
        })

        if (person.parentId === "") {
            person.parentId = fakeRoot.id;
        }
        list.push(person);
    });

    list.push(fakeRoot);

    const root = d3.stratify()
        .id(function(d: any) { return d.id; })
        .parentId(function(d: any) { return d.parentId; })
        (list);
    
    return root;
}