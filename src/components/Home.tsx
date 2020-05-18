import React from 'react';
import { CenteredContainer } from '../theme/main';
import HomeAnimation from './HomeAnimation';
import Footer from './Footer';

const Home = () => (
        <React.Fragment>
            <CenteredContainer>
                <HomeAnimation />
            </CenteredContainer>
            <Footer />
        </React.Fragment>
)

export default Home;