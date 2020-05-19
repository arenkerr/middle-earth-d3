import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Backdrop from '@material-ui/core/Backdrop';
import { ProfilePaper } from '../theme/main';
import Loading from './Loading';
import Error from './Error';

const GET_PROFILE = gql`
    query getPerson($name: String!) {
        getPerson(name: $name) {
            bio
        }
    }`;

const Profile = ({ profile, open }) => { 
    const name = profile.name;  

    return (
        <Query query={GET_PROFILE} variables={{name}}>
            {((result: any) => {
                const { loading, error, data } = result;
                if (loading) return <Loading />;
                if (error) return <Error error={error} />;
                console.log(result)

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
                            <p>{data.getPerson.bio !== null ? data.getPerson.bio : <em>No biography available.</em>}</p>
                        </ProfilePaper>
                    </Modal>
                )
            }
            )}
        </Query>
    );

}

export default Profile;