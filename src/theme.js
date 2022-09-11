import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    black: {
      main: '#000'
    }
  },
});

theme.typography.h3 = {
  fontSize: '1.5rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
}
theme.typography.h4 = {
  fontSize: '1.3rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}
theme.typography.h5 = {
  fontSize: '1.1rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.4rem',
  },
}


export default theme;
