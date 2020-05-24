import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Tree from '../Tree/Tree';
import TreeHeader from '../Tree/TreeHeader';
import Back from '../Back';
import Legend from '../Legend/Legend';
import SearchFab from '../SearchFab';
import AllData from '../../data/all';

const GET_DESCRIPTION = gql`
    query getRace($title: String!) {
        getRace(title: $title) {
            title
            desc
        }
    }`;

const All = () => {
    const { loading, error, data } = useQuery(GET_DESCRIPTION, { variables: { title: 'All' }});
    if (error) console.log(error);

    // to give the user a starting point, scroll to Olwe
    // TODO: replace this with zoom in/out 
    const nodeId = 'node@I806a0e65c2@';

    return (
        <React.Fragment>
            {!loading && <TreeHeader copy={data.getRace} />}
            <Tree treeData={AllData} size={{ height: 25000, width: 7400 }} translate={12900} scrollTo={nodeId}/>
            <SearchFab race={"all"}/>
            <Back />
            <Legend />
        </React.Fragment>
    )
}

export default All;