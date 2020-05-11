import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

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
        },
        primary: { main: '#fffcf7'},
        secondary: {main: '#0a102e'},
        background: {
            default: '#fffcf7',
        },
    },
});

export default theme;