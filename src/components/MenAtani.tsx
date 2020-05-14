import React from 'react';
import Tree from './Tree';
import TreeHeader from './TreeHeader';
import Back from './Back';
import Legend from './Legend';
import MenAtaniData from '../data/men-atani.js';
import { menAtani as text } from '../data/mock.json';

const MenAtani = () => {
    const startPos = 'node@I254d84f5d1@';

    return (
        <React.Fragment>
            <TreeHeader copy={text} />
            <Tree treeData={MenAtaniData} size={{ height: 6000, width: 6600 }} translate={1900} scrollTo={startPos} />
            <Back />
            <Legend />
        </React.Fragment>
    )
}

export default MenAtani;