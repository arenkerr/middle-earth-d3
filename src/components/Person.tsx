import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import theme from '../theme';

const Person = ({ profile, coords }) => {
    const ProfilePaper = withStyles({
        root: {
          background: theme.palette.primary.main,
          padding: '1em',
          boxShadow: '0px 0px 3px 1px rgba(0,0,0,0.25)',
        }
      })(Paper);

    return (
        <foreignObject x={coords.y - 300} y={coords.x} width={374} height={86} id="tooltip">
            <ProfilePaper variant="outlined" elevation={3} square>
                <Typography variant="h2">{profile.name}</Typography>
                    {profile.profile.dob && <span>b.{profile.profile.dob}</span>}
                    {profile.profile.dob && profile.profile.dod ? <span> | </span> : null}
                    {profile.profile.dod && <span>d. {profile.profile.dod}</span>}
            </ProfilePaper>
        </foreignObject>
   )
}

export default Person;