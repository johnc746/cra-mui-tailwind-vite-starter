import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material';
import './index.css';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#122155',
      text: '#fafafa',
      title: '#b9babb',
    }
  },
  typography: {
    "fontFamily": `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>
);