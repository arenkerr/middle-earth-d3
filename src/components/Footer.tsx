import React from 'react';
import { Link } from 'react-router-dom';
import { CenteredContainer } from '../theme/main';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';

const Footer = () => (
    <div className="footer">
        <ul className="inline-list">
            <li><Link to="/about">About</Link>&nbsp; | &nbsp;</li>
            <li>
                <IconButton href="https://github.com/anikerr/middle-earth-d3" 
                    style={{ padding: 0}}
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <GitHubIcon color="secondary" height="28" width="28"/>
                </IconButton>
            </li>
        </ul>
    </div>
)

export default Footer;