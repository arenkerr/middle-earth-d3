import React from 'react';
import Typography from '@material-ui/core/Typography';

const Person = ({ profile, coords }) => {
    return (
        <foreignObject x={coords.y} y={coords.x} width={200} height={100}>
            <div className="profile">
                {profile.name}

            </div>
        </foreignObject>
    // <div>
    //     <Typography variant="h1">{profile.name}</Typography>
    // </div>
    )
}

export default Person;