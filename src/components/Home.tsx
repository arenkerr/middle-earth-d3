import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { CenteredContainer } from '../theme/main';
import HomeAnimation from './HomeAnimation';

const Home = () => {
    return ( 
        <CenteredContainer>
            <Typography variant="h1">Middle-Earth Trees</Typography>
            <HomeAnimation />
            {/* <ul>
                <li><Link to="/elves">Elves</Link></li>
                <li><Link to="/hobbits">Hobbits</Link></li>
                <li><Link to="/dwarves">Dwarves</Link></li>
                <li><Link to="/men/atanatari">Men of the First Age</Link></li>
                <li><Link to="/men/atani">Men of the Second and Third Age</Link></li>
                <li><Link to="/all">All</Link></li>
                 <li><Link to="/about">About</Link></li>
            </ul> */}
        </CenteredContainer>
    )
}

export default Home;