import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Tree from '../Tree/Tree';
import TreeHeader from '../Tree/TreeHeader';
import Back from '../Back';
import Legend from '../Legend/Legend';
import SearchFab from '../SearchFab';
import MenAtaniData from '../../data/men-atani.js';

const GET_DESCRIPTION = gql`
    query getRace($title: String!) {
        getRace(title: $title) {
            title
            desc
        }
    }`;

const MenAtani = () => {
    const { loading, error, data } = useQuery(GET_DESCRIPTION, { variables: { title: 'Men: Atani' }});
    if (error) console.log(error);

    const startPos = 'node@I254d84f5d1@';

    return (
        <React.Fragment>
            {!loading && <TreeHeader copy={data.getRace} />}
            <Tree treeData={MenAtaniData} size={{ height: 6000, width: 6600 }} translate={2300} scrollTo={startPos} />
            <SearchFab race={"Men: Atani"}/>
            <Back />
            <Legend />
        </React.Fragment>
    )
}

export default MenAtani;