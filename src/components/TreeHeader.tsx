import React from 'react';
import Typography from '@material-ui/core/Typography';

const TreeHeader = ({ copy }) => {

    return (
        <div>
            <Typography variant="h1">{copy.title}</Typography>
            <p>{copy.desc}</p>
        </div>
    );
}

export default TreeHeader;