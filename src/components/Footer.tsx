import React from 'react';
import { Link } from 'react-router-dom';
import { CenteredContainer } from '../theme/main';

const Footer = () => (
    <CenteredContainer>
        <Link to="/about">About</Link> | <a href="https://github.com/anikerr/middle-earth-d3">github repo</a>
    </CenteredContainer>
)

export default Footer;