import React from 'react';

const TreeHeader = ({ copy }) => {
    console.log(copy);

    return (<div>
        <h1>{copy.title}</h1>
    </div>)
}

export default TreeHeader;