import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div>
            <h1>Middle-Earth Trees</h1>
            <ul>
                <li><Link to="/elves">Elves</Link></li>
                <li><Link to="/hobbits">Hobbits</Link></li>
            </ul>
        </div>
    )
}

export default Home;