import React from 'react';
import buildHeirarchy from '../util/buildHeirarchy';
import formatSeedProfile from '../util/formatSeedProfile';
import hobbits from '../data/hobbits';

const Print = () => {

    const data = buildHeirarchy(hobbits);
    console.log(data);

    const formattedData= formatSeedProfile(data);

    console.log(formattedData)

    return (
        <React.Fragment>
            {JSON.stringify(formattedData)}
        </React.Fragment>
    )
}

export default Print;
