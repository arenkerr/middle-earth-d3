import React from 'react';
import Tree from '../Tree/Tree';
import TreeHeader from '../Tree/TreeHeader';
import Back from '../Back';
import Legend from '../Legend/Legend';
import MenAtanatariData from '../../data/men-atanatari.js';
import { menAtanatari as text } from '../../data/mock.json';

const MenAtanatari = () => (
    <React.Fragment>
        <TreeHeader copy={text} />
        <Tree treeData={MenAtanatariData} size={{ height: 3400, width: 1600 }} translate={1900}/>
        <Back />
        <Legend />
    </React.Fragment>
)

export default MenAtanatari;