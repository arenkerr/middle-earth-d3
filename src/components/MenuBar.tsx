import React from 'react';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { AppMenu, MenuButton } from '../theme/main';
import { makeStyles } from '@material-ui/core/styles';
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
                <Typography variant="h2">Middle-Earth Trees</Typography>
                <MenuButton aria-controls="menu" aria-haspopup="true" onClick={handleClick} color="primary">
                    <SvgIcon component={GoIcon} viewBox="0 0 24 10.125" width="60px" height="22px" style={{ fontSize: "3rem"}}></SvgIcon>
                </MenuButton>
                <Menu
                    id="menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </AppMenu>
    )
}

export default MenuBar;