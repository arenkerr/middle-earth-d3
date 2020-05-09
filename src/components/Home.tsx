import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';


const Home = () => {
    return ( 
        <div>
            <h1>Middle-Earth Trees</h1>
            <ul>
                <li><Link to="/elves">Elves</Link></li>
                <li><Link to="/hobbits">Hobbits</Link></li>
            </ul>
            <Button color="primary">Button Test</Button>
        </div>
    )
}

export default Home;