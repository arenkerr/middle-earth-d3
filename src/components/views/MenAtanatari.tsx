import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Tree from '../Tree/Tree';
import TreeHeader from '../Tree/TreeHeader';
import Back from '../Back';
import Legend from '../Legend/Legend';
import SearchFab from '../SearchFab';
import MenAtanatariData from '../../data/men-atanatari.js';

const GET_DESCRIPTION = gql`
    query getRace($title: String!) {
        getRace(title: $title) {
            title
            desc
        }
    }`;

const MenAtanatari = () => {
    const { loading, error, data } = useQuery(GET_DESCRIPTION, { variables: { title: 'Men: Atanatári' }});
    if (error) console.log(error);

    return (
        <React.Fragment>
            {!loading && <TreeHeader copy={data.getRace} />}
            <Tree treeData={MenAtanatariData} size={{ height: 3400, width: 1600 }} translate={1900}/>
            <SearchFab race={"Men: Atanatari"}/>
            <Back />
            <Legend />
        </React.Fragment>
    )
}

export default MenAtanatari;