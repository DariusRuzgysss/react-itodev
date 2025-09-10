import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: '#FF5733',
      light: '#afcddb',
    },
    secondary: {
      main: '#465773',
      dark: '#3a5663',
    },
    error: {
      main: '#f44336',
    },
  },
});

export default theme;
