import { createTheme } from '@mui/material';
import { CSSProperties } from 'react';
import '@fontsource/russo-one';
import '@fontsource-variable/montserrat';
import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    bat: true;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    backgroundColorLight?: Palette['background'];
  }
  interface PaletteOptions {
    backgroundColorLight?: PaletteOptions['background'];
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  bat: CSSProperties;
}

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0e0e18',
      paper: '#0e0e18'
    },
    backgroundColorLight: {
      default: '#505c7c',
      paper: '#282e3c'
    },
    text: {
      primary: '#dbdbdc',
      secondary: '#0060a8'
    },
    primary: {
      main: '#021c25',
      light: '#0e0e18',
      contrastText: '#c4b61d'
    },
    secondary: {
      main: '#c4b61d',
      light: '#8d9195',
      contrastText: '#186c89'
    }
  },
  typography: {
    fontFamily: '"Montserrat Variable", sans-serif;',
    fontSize: 16,
    h1: {
      fontFamily: '"Russo One", sans-serif;',
      fontSize: '2rem',
      lineHeight: '1.5'
    },
    h2: {
      fontFamily: '"Russo One", sans-serif;',
      lineHeight: '1.5'
    },
    h3: {
      fontFamily: '"Russo One", sans-serif;',
      fontSize: '1.5rem',
      lineHeight: '1.5'
    },
    h4: {
      fontFamily: '"Russo One", sans-serif;',
      lineHeight: '1.5'
    },
    h5: {
      fontFamily: '"Russo One", sans-serif;',
      lineHeight: '1.5'
    },
    h6: {
      fontFamily: '"Russo One", sans-serif;',
      lineHeight: '1.5'
    },
    bat: {
      fontFamily: '"Russo One", sans-serif;'
    }
  } as ExtendedTypographyOptions,
  breakpoints: {
    sm: 500
  }
});
