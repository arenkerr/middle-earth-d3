import React from 'react';
import Tree from '../Tree/Tree';
import TreeHeader from '../Tree/TreeHeader';
import Back from '../Back';
import Legend from '../Legend/Legend';
import SearchFab from '../SearchFab';
import DwarfData from '../../data/dwarves.js';
import { dwarves as text } from '../../data/mock.json';

const Dwarves = () => (
    <div>
        <TreeHeader copy={text} />
        <Tree treeData={DwarfData} size={{ height: 10200, width: 10200 }} translate={860}/>
        <SearchFab race={"Dwarf"}/>
        <Back />
        <Legend />
    </div>
)

export default Dwarves;