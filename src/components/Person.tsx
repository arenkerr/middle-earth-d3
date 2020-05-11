import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../styles/person.scss'

const Person = ({ profile, coords }) => (
    <foreignObject x={coords.y - 300} y={coords.x} width={400} height={560} id="tooltip">
        <div className="person">
            <Typography variant="h2">{profile.name}</Typography>
            <ul className="person__info">
                {profile.profile.dob && <li>b. {profile.profile.dob}</li>}
                {profile.profile.dod && <li>&nbsp;| d. {profile.profile.dod}</li>}
            </ul>
        </div>
    </foreignObject>
)

export default Person;