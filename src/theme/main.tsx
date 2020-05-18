import { createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';

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
        secondary: {main: '#9e3513'},
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
        MuiSvgIcon: {
            root: {
                width: 'none', // set width and height in the component
                height: 'none',
            }
        },
        MuiIconButton: {
            root: {
                padding: '0',
            }
        },
        MuiMenu: {
            paper: {
                top: '66px !important', //  !important is needed as mui injects inline styles
                transform: 'none !important', // prevents scaling bug when window is resized or view changes
            }
        }
    }
});

const BackButton = withStyles({
    root: {
        backgroundColor: theme.palette.secondary.main,
        position: 'fixed',
        bottom: '0',
        margin: '0.5em',
        padding: '12px',
        transition: 'background 1s',
        '&:hover': {
            backgroundColor: '#9e35139c',
        }
    }
})(IconButton);

const ProfilePaper = withStyles({
    root: {
      background: theme.palette.primary.main,
      padding: '1em',
      outline: 'none'
    }
  })(Paper);

const CenteredContainer = withStyles({
    root: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        margin: '8em auto'
    }
})(Container);

const AppMenu = withStyles({
    root: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        padding: '1em',
        flexFlow: 'row',
        justifyContent: 'space-between'
    }
})(AppBar);

const MenuButton = withStyles({
    root: {
        borderRadius: '10%'
    }
})(IconButton);

const ExpandingHeader = withStyles({
    root: {
        top: '64px',
        margin: '0'
    }
})(ExpansionPanel)

export { 
    theme, 
    AppMenu,
    BackButton, 
    MenuButton,
    ProfilePaper,
    ExpandingHeader,
    CenteredContainer,
};