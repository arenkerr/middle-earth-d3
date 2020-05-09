import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const Home = () => {
    return ( 
        <div>
            <Typography variant="h1">Middle-Earth Trees</Typography>
            <ul>
                <li><Link to="/elves">Elves</Link></li>
                <li><Link to="/hobbits">Hobbits</Link></li>
            </ul>
        </div>
    )
}

export default Home;