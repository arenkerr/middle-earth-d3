import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Tree from '../Tree/Tree';
import TreeHeader from '../Tree/TreeHeader';
import Back from '../Back';
import Legend from '../Legend/Legend';
import SearchFab from '../SearchFab';
import hobbitData from '../../data/hobbits.js';

const GET_DESCRIPTION = gql`
    query getRace($title: String!) {
        getRace(title: $title) {
            title
            desc
        }
    }`;

const Hobbits = () => {
    const { loading, error, data } = useQuery(GET_DESCRIPTION, { variables: { title: 'Hobbits' }});
    if (error) console.log(error);

    return (
        <React.Fragment>
            {!loading && <TreeHeader copy={data.getRace} />}
            <Tree treeData={hobbitData} size={{ height: 10200, width: 1200 }} translate={4600}/>
            <SearchFab race={"Hobbit"}/>
            <Back />
            <Legend />
        </React.Fragment>
    )
}

export default Hobbits;