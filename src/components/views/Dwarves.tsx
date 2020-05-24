import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks'
import Tree from '../Tree/Tree';
import TreeHeader from '../Tree/TreeHeader';
import Back from '../Back';
import Legend from '../Legend/Legend';
import SearchFab from '../SearchFab';
import DwarfData from '../../data/dwarves.js';

const GET_DESCRIPTION = gql`
    query getRace($title: String!) {
        getRace(title: $title) {
            title
            desc
        }
    }`;

const Dwarves = () => {
    const { loading, error, data } = useQuery(GET_DESCRIPTION, { variables: { title: 'Dwarves' }});
    if (error) console.log(error);

    return (
        <React.Fragment>
            {!loading && <TreeHeader copy={data.getRace} />}
            <Tree treeData={DwarfData} size={{ height: 10200, width: 10200 }} translate={1060}/>
            <SearchFab race={"Dwarf"}/>
            <Back />
            <Legend />
        </React.Fragment>
    )
}

export default Dwarves;