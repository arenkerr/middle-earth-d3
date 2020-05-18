import React from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpandingHeader } from '../theme/main';

const TreeHeader = ({ copy }) => (
    <ExpandingHeader elevation={1} defaultExpanded={true}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon width="2rem" height="2rem" />}>
            <Typography variant="h1">{copy.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Typography>{copy.desc}</Typography>
        </ExpansionPanelDetails>
    </ExpandingHeader>
);

export default TreeHeader;