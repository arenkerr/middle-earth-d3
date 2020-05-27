import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Tree from '../Tree/Tree';
import TreeHeader from '../Tree/TreeHeader';
import Back from '../Back';
import Legend from '../Legend/Legend';
import SearchFab from '../SearchFab';
import elfData from '../../data/elves.js';

const GET_DESCRIPTION = gql`
    query getRace($title: String!) {
        getRace(title: $title) {
            title
            desc
        }
    }`;

const Elves = () => {
    const { loading, error, data } = useQuery(GET_DESCRIPTION, { variables: { title: 'Elves' }});
    if (error) console.log(error);

    return (
        <React.Fragment>
            {!loading && <TreeHeader copy={data.getRace}/>}
            <Tree treeData={elfData} size={{ height: 4600, width: 1200}} translate={2100}/>
            <SearchFab race={"Elf"}/>
            <Back />
            <Legend />
        </React.Fragment>
    )
}

export default Elves;