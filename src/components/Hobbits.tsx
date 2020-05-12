import React from 'react';
import Tree from './Tree';
import TreeHeader from './TreeHeader';
import Back from './Back';
import hobbitData from '../data/hobbits.js';
import { hobbits as text } from '../data/mock.json';

const Hobbits = () => (
    <div>
        <TreeHeader copy={text} />
        <Tree treeData={hobbitData} size={{ height: 10200, width: 1300 }} translate={4400}/>
        <Back />
    </div>
)

export default Hobbits;