import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Home from './components/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
          <Home />
    </ThemeProvider>
  );
}

export default App;
