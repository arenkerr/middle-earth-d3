import React from 'react';
import Typography from '@material-ui/core/Typography';
import Back from './Back';
import { CenteredContainer } from '../theme/main';

const About = () => {
    return ( 
        <React.Fragment>
            <CenteredContainer>
                <Typography variant="h1">Credits</Typography>
                <a href="https://github.com/RobSis/middle-earth-genealogy-project" target="_blank" rel="noopener noreferrer">
                    Middle-Earth Genealogy Project
                </a><br /> 
                Source for Middle-Earth genealogy data. 
            </CenteredContainer>
            <Back />
        </React.Fragment>
    )
}

export default About;