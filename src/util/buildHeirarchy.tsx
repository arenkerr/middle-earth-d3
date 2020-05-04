import * as d3 from 'd3'; 
import { d3ize, parse } from 'gedcom-d3';
import buildProfile from './buildProfile';

export default function buildHeirarchy(input: any) {
    const data = d3ize(parse(input));

    // organize data into heirarchy by creating a list of parent-child links
    const list : any[] = [];

    // a "fake root" is provided for nodes without known parents, to prevent multiple root error
    // https://github.com/d3/d3-hierarchy/blob/master/README.md#stratify
    const root = {
        name: "root",
        parentId: "",
        id: '0',
    }

    console.log(data.nodes)

    data.nodes.forEach(node => {
        let person = {
            name: node.name,
            parentId: "",
            id: node.id,
            spouseId: "",
            profile: buildProfile(node),
        }

        data.links.forEach(link => {
            if (link.target === node.id) {
                if (link.targetType === "CHIL") {
                    person.parentId = link.source;
                } 
                if (link.targetType === "WIFE") {
                    person.spouseId = link.source;
                }
            }
        })

        if (person.parentId === "") {
            person.parentId = root.id;
        }
        list.push(person);
    });

    list.push(root);

    const heirarchy = d3.stratify()(list);
    
    return heirarchy;
}
