import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { AppMenu, MenuButton } from '../theme/main';
import { ReactComponent as GoIcon } from '../assets/go.svg';

const MenuBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return ( 
            <AppMenu>
                <Typography variant="h2"><Link to="/" color="primary">Middle-Earth Trees</Link></Typography>
                <MenuButton aria-controls="menu" aria-haspopup="true" onClick={handleClick} color="primary">
                    <SvgIcon component={GoIcon} viewBox="0 0 24 10.125" width="60px" height="22px" style={{ fontSize: "3rem"}}></SvgIcon>
                </MenuButton>
                <Menu
                    id="menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    getContentAnchorEl={null}
                    anchorOrigin={{ 
                        vertical: "bottom", 
                        horizontal: "right" }}
                    marginThreshold={0}
                    PaperProps={{ 
                        style: { 
                            backgroundColor: '#fdf2e1', 
                            transform: 'translate(0px, 14px)' 
                        } 
                    }}
                >
                    <Link to="/elves"><MenuItem onClick={handleClose}>Elves</MenuItem></Link>
                    <Link to="/men/atanatari"><MenuItem onClick={handleClose}>Men of the First Age</MenuItem></Link>
                    <Link to="/men/atani"><MenuItem onClick={handleClose}>Men of the Second &amp; Third Age</MenuItem></Link>
                    <Link to="/hobbits"><MenuItem onClick={handleClose}>Hobbits</MenuItem></Link>
                    <Link to="/dwarves"><MenuItem onClick={handleClose}>Dwarves</MenuItem></Link>
                    <Link to="/all"><MenuItem onClick={handleClose}>All</MenuItem></Link>
                    <Link to="/about"><MenuItem onClick={handleClose}>About</MenuItem></Link>
                </Menu>
            </AppMenu>
    )
}

export default MenuBar;