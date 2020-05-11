import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import theme from '../theme';

const TreeHeader = ({ copy }) => {
    const ExpandingHeader = withStyles({
        root: {
          background: theme.palette.primary.main,
          margin: '1em',
          padding: '0.5em',
          position: 'fixed',
          maxWidth: '460px'
        }
      })(ExpansionPanel);

    return (
        <ExpandingHeader elevation={1}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="secondary" />}>
                <Typography variant="h1">{copy.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>{copy.desc}</Typography>
            </ExpansionPanelDetails>
        </ExpandingHeader>
    );
}

export default TreeHeader;