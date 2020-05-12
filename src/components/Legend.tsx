
import React from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { mdiCompassRose } from '@mdi/js';
import Icon from '@mdi/react';
// import { Expander } from '../theme';




const Legend = ({ copy }) => {

    return (
        <ExpansionPanel elevation={1}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="secondary" />}>
                <Icon path={mdiCompassRose} size={3} />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>{copy.desc}</Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

export default Legend;