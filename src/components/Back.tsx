import React from 'react';
import { withRouter } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { BackButton } from '../theme/main';

const Back = ({ history }) => (
    <BackButton onClick={() => history.goBack()}>
        <ArrowBackIcon fontSize="large" color="primary" width="1em" height="1em" />
    </BackButton>
)

export default withRouter(Back);