import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Ralway, sans-serif',
  },
  palette: {
    primary: {
      main: '#495e57',
    },
    secondary: {
      main: '#f4ce14',
    },
    background: {
      default: '#f5f7f8',
    },
  },
});

export { theme };
