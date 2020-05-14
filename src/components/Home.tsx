import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Home = () => {
    return ( 
        <Container>
            <Typography variant="h1">Middle-Earth Trees</Typography>
            <ul>
                <li><Link to="/elves">Elves</Link></li>
                <li><Link to="/hobbits">Hobbits</Link></li>
                <li><Link to="/dwarves">Dwarves</Link></li>
                <li><Link to="/men/atanatari">Men of the First Age</Link></li>
                <li><Link to="/men/atani">Men of the Second and Third Age</Link></li>
                <li><Link to="/all">All</Link></li>
            </ul>
        </Container>
    )
}

export default Home;