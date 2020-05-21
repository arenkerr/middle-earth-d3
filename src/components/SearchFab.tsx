import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core';
import { FloatingButton } from '../theme/main';
import Search from './Search';

const useStyles = makeStyles({
    container: {
        position: 'fixed',
        top: '75px',
        right: '0',
    }
});

const SearchFab = ({ race }) => {
    console.log(race);
    const [open, setOpen] = useState(false);
    const classes = useStyles();

   return (
        <div className={classes.container}>
            <FloatingButton onClick={() => setOpen(!open)}>
                { !open ?
                    <SearchIcon fontSize="large" color="primary" width="1em" height="1em" />
                    : <CloseIcon fontSize="large" color="primary" width="1em" height="1em" />
                }
            </FloatingButton>
        { open && <Search race={ race }/>}
        </div>
   )
}

export default SearchFab;