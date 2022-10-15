import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import {createTheme} from '@mui/material';
import {ThemeProvider} from '@mui/styles'

function App() {
  const theme = createTheme()
  return (
    <ThemeProvider theme={theme}>
            <Login/>
        </ThemeProvider>
  );
}

export default App;
