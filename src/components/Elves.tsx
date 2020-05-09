import React from 'react';
import Tree from './Tree';
import TreeHeader from './TreeHeader'
import elfData from '../data/elves.js';
import { elves as text } from '../data/mock.json'
import Button from '@material-ui/core/Button';


const Elves = () => (
    <div>
        <TreeHeader copy={text} />
        <Button color="primary">Button Test</Button>
        <Tree treeData={elfData} size={{ height: 4000, width: 1000}} />
    </div>
)

export default Elves;