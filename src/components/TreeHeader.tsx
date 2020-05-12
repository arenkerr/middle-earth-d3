import React from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { Expander } from '../theme';

const TreeHeader = ({ copy }) => (
    <ExpansionPanel elevation={1} defaultExpanded={true}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h1">{copy.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Typography>{copy.desc}</Typography>
        </ExpansionPanelDetails>
    </ExpansionPanel>
);

export default TreeHeader;