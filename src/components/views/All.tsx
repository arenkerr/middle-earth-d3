import React from 'react';
import Tree from '../Tree/Tree';
import TreeHeader from '../Tree/TreeHeader';
import Back from '../Back';
import Legend from '../Legend/Legend';
import AllData from '../../data/all';
import { all as text } from '../../data/mock.json';

const All = () => {
    // to give the user a starting point, scroll to Olwe, possibly the oldest member here
    // TODO: replace this with zoom in/out 
    const nodeId = 'node@I806a0e65c2@';
    return (
        <div>
            <TreeHeader copy={text} />
            <Tree treeData={AllData} size={{ height: 25000, width: 7400 }} translate={12800} scrollTo={nodeId}/>
            <Back />
            <Legend />
        </div>
    )
}

export default All;