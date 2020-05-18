import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const LegendExpander = withStyles({
    root: {
        position: 'fixed',
        bottom: '0',
        right: '0',
        margin: '0',
        maxWidth: 'none',
        background: 'transparent',
        '&:before': {
            height: '0'
        }
    },
    'MuiExpansionPanelDetails-root': {
        background: '#fdf2e1',
    }
})(ExpansionPanel);

const LegendExpanderDetails = withStyles({
    root: {
        background: '#fdf2e1',
        display: 'block', 
    },
})(ExpansionPanelDetails);

const LegendExpanderSummary = withStyles({
    root: {
        padding: '0',
        height: '85px',
    },
    content: {
        justifyContent: 'flex-end',
    },
})(ExpansionPanelSummary);

export { 
    LegendExpander, 
    LegendExpanderSummary,
    LegendExpanderDetails 
};