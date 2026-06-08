import { createTheme } from '@mui/material/styles';

export const mammothTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#C2854D',
    },
    secondary: {
      main: '#2E5A5C',
    },
    background: {
      default: '#F8F4EF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1F2D3A',
      secondary: '#445566',
    },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    h2: {
      fontSize: '2.6rem',
      fontWeight: 700,
      lineHeight: 1.15,
    },
    h6: {
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          borderRadius: 10,
        },
      },
    },
  },
});
