import React from 'react';
import Tree from '../Tree/Tree';
import TreeHeader from '../Tree/TreeHeader'
import Back from '../Back';
import Legend from '../Legend/Legend';
import SearchFab from '../SearchFab';
import elfData from '../../data/elves.js';
import { elves as text } from '../../data/mock.json';

const Elves = () => (
    <div>
        <TreeHeader copy={text} />
        <Tree treeData={elfData} size={{ height: 4600, width: 1200}} translate={2100}/>
        <SearchFab race={"Elf"}/>
        <Back />
        <Legend />
    </div>
)

export default Elves;