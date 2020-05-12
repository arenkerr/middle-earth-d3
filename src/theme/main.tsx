import { createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['Lora', 'serif'].join(','),
        h1: {
            fontFamily: 'Cormorant Unicase',
            fontSize: "3rem",
        },
        h2: {
            fontFamily: 'Cormorant Unicase',
            fontSize: "2rem",
        }
    },
    palette: {
        text: {
            primary: '#0a102e',
            secondary: '#2e0b00',
        },
        primary: { main: '#f9ecd7'},
        secondary: {main: '#912400'},
        background: {
            default: '#f9ecd7',
        },
    },
    overrides: {
        MuiExpansionPanel: {
            root: {
                color: '#0a102e',
                background: '#fdf2e1',
                margin: '1em',
                padding: '0.5em',
                position: 'fixed',
                maxWidth: '460px'
              }
        },
    }
});

const BackButton = withStyles({
    root: {
        backgroundColor: '#912400',
        position: 'fixed',
        bottom: '0',
        margin: '0.5em',
        transition: 'background 1s',
        '&:hover': {
            backgroundColor: '#3b0f01',
        }
    }
})(IconButton);

export { 
    theme, 
    BackButton, 
};