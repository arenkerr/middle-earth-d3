import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Backdrop from '@material-ui/core/Backdrop';
import { theme } from '../theme/main';

const Profile = ({ profile, open }) => {
    const ProfilePaper = withStyles({
        root: {
          background: theme.palette.primary.main,
          padding: '1em',
          outline: 'none'
        }
      })(Paper);
      
    return (
        <Modal 
            open={open} 
            BackdropComponent={Backdrop} 
            BackdropProps={{ timeout: 500}}
            style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
            <ProfilePaper style={{top: '25%', margin: 'auto', width: '45%', minHeight: '45%' }}>
                <Typography variant="h2">{profile.name}</Typography>
                {profile.profile.dob && <span>b. {profile.profile.dob}</span>}
                {profile.profile.dob && profile.profile.dod ? <span> | </span> : null}
                {profile.profile.dod && <span>d. {profile.profile.dod}</span>}
            </ProfilePaper>
        </Modal>
   )
}

export default Profile;