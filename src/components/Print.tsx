import React from 'react';
import buildHeirarchy from '../util/buildHeirarchy';
import formatSeedProfile from '../util/formatSeedProfile';
import elves from '../data/elves';

const Print = () => {

    const data = buildHeirarchy(elves);
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
