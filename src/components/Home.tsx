import React from 'react';
import Typography from '@material-ui/core/Typography';
import { CenteredContainer, AppMenu } from '../theme/main';
import MenuBar from './MenuBar';
import HomeAnimation from './HomeAnimation';
import TreeHeader from './TreeHeader';

const text = {
    title: "Middle Earth Trees",
    desc: "Visualizing geneaological data from Tolkien's Middle-Earth"
}

const Home = () => {
    return ( 
        <React.Fragment>
            <MenuBar />
            <CenteredContainer>
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
        </React.Fragment>
    )
}

export default Home;