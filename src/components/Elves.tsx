import React from 'react';
import Tree from './Tree';
import TreeHeader from './TreeHeader'
import elfData from '../data/elves.js';
import { elves as text } from '../data/mock.json'

const Elves = () => (
    <div>
        <TreeHeader copy={text} />
        <Tree treeData={elfData} size={{ height: 4000, width: 1000}} />
    </div>
)

export default Elves;