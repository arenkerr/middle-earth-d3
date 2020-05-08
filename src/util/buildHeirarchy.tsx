
import * as d3 from 'd3'; 
import { d3ize, parse } from 'gedcom-d3';
import buildProfile from './buildProfile';
import getSpouse from './getSpouse';
import Root from '../interfaces/Root.interface';
import Person from '../interfaces/Person.interface';

export default function buildHeirarchy(input: any) {
    const data = d3ize(parse(input));

    // organize data into heirarchy by creating a list of parent-child links
    const list: any[] = [];

    // a "fake root" is provided for nodes without known parents, to prevent multiple root error
    // https://github.com/d3/d3-hierarchy/blob/master/README.md#stratify
    const root: Root = {
        name: "root",
        parentId: "",
        id: '0',
    }

    data.nodes.forEach(node => {
        let person: Person = {
            name: node.name,
            parentId: "",
            id: node.id,
            spouseId: "",
            spouse: {},
            // this heirarchy is matrilineal; children appear with mother. 'true' means a link should be made to their family.
            husband: false, 
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

    // get spouses & set husband property to true or false
    list.map(person => {
        if (person.spouseId) {
            person.spouse = getSpouse(person.spouseId, person, list);
        }

        return person;
    })

    let heirarchy = d3.stratify()(list);

    return heirarchy;
}