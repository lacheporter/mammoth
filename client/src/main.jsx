import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import App from './App.jsx';
import { mammothTheme } from './theme';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={mammothTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
