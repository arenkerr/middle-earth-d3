import React from 'react';
import Typography from '@material-ui/core/Typography';

const Person = ({ profile }) => {

    console.log(profile)

    return <div>
        <Typography variant="h1">{profile.name}</Typography>
    </div>
}

export default Person;