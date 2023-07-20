import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

let linkColor = '#919191'
let linkHoverColor = '#386FA7'

// Create a theme instance.
const theme = createTheme({
  palette: {
    error: {
      main: red.A400,
    },
    black: {
      main: '#000'
    }
  },
  typography: {
    fontFamily: '"Ubuntu", sans-serif',
    fontWeight: 500
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: linkColor,
          textDecorationColor: linkColor,
          fontWeight: 500,
          ":hover": {
            color: linkHoverColor,
            textDecorationColor: linkHoverColor,
            fontWeight: 500,
          }
        },
      }
    }
  }
});

theme.typography.h3 = {
  fontSize: '1.5rem',
  fontFamily: "'Playfair Display', serif",
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
}
theme.typography.h4 = {
  fontSize: '1.3rem',
  fontFamily: "'Playfair Display', serif",
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}
theme.typography.h5 = {
  fontSize: '1.1rem',
  fontFamily: "'Playfair Display', serif",
  [theme.breakpoints.up('md')]: {
    fontSize: '1.4rem',
  },
}


export default theme;
