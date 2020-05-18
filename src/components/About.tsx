import React from 'react';
import Typography from '@material-ui/core/Typography';
import Back from './Back';
import { CenteredContainer } from '../theme/main';
import Footer from './Footer';

const About = () => {
    return ( 
        <React.Fragment>
            <CenteredContainer>
                <Typography variant="h1">Credits</Typography>
                <a href="https://github.com/RobSis/middle-earth-genealogy-project" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >Middle-Earth Genealogy Project</a> 
            </CenteredContainer>
            <Footer />
            <Back />
        </React.Fragment>
    )
}

export default About;