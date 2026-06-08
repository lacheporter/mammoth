import { createTheme } from '@mui/material/styles';

export const mammothTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F27A1A',
      light: '#FFB066',
      dark: '#BD5300',
    },
    secondary: {
      main: '#2F3B46',
      light: '#596673',
      dark: '#1C242C',
    },
    background: {
      default: '#F4EFE7',
      paper: '#FBF8F3',
    },
    text: {
      primary: '#202831',
      secondary: '#4B5661',
    },
    divider: '#D8CDBE',
    action: {
      hover: 'rgba(47, 59, 70, 0.06)',
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
