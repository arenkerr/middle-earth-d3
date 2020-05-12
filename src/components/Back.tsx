import React from 'react';
import { withRouter } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

const Back = ({ history }) => (
    <IconButton onClick={() => history.goBack()}>
        <ArrowBackIcon fontSize="large" color="primary"/>
    </IconButton>
)

export default withRouter(Back);