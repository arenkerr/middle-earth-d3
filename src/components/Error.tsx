import React from 'react';

const Error = ({ error }) => (
    <React.Fragment>
        Error: {error.message}
    </React.Fragment>
)

export default Error;