import { createTheme, em } from '@mantine/core';

const theme = createTheme({
  white: '#FCFBFE',
  black: '#080709',
  colors: {},
  primaryShade: 4,
  fontFamily: 'Montserrat',
  breakpoints: {
    xs: em(375),
    sm: em(480),
    md: em(768),
    lg: em(1024),
    xl: em(1440),
  },
});

export default theme;
