import React from 'react';
import Tree from './Tree';
import TreeHeader from './TreeHeader'
import Back from './Back';
import elfData from '../data/elves.js';
import { elves as text } from '../data/mock.json';

const Elves = () => (
    <div>
        <TreeHeader copy={text} />
        <Tree treeData={elfData} size={{ height: 4600, width: 1300}} translate={2100}/>
        <Back />
    </div>
)

export default Elves;