import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


const Loading = () => (
    <React.Fragment>
        <h1>LOADING</h1>
        <CircularProgress color="secondary" style={{top: '25%', margin: 'auto', position: 'fixed', left: '50%'}}/>
    </React.Fragment>
)


export default Loading;