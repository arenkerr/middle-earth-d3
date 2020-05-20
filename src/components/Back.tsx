import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { FloatingButton } from '../theme/main';

const useStyles = makeStyles({
    fixed: {
        position: 'fixed',
        bottom: '0',
    }
});

const Back = ({ history }) => {
    const classes = useStyles();

    return (
        <FloatingButton className={classes.fixed} onClick={() => history.goBack()}>
            <ArrowBackIcon fontSize="large" color="primary" width="1em" height="1em" />
        </FloatingButton>
    )
}

export default withRouter(Back);