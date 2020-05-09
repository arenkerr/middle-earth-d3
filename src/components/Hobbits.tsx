import React from 'react';
import Tree from './Tree';
import TreeHeader from './TreeHeader'
import hobbitData from '../data/hobbits.js';
import { hobbits as text } from '../data/mock.json'

const Hobbits = () => (
    <div>
        <TreeHeader copy={text} />
        <Tree treeData={hobbitData} size={{ height: 10000, width: 1000 }} />
    </div>
)

export default Hobbits;