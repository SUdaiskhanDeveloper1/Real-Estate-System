import { extendTheme } from '@chakra-ui/react';
import { breakpoints, colors, fonts } from './foundations';
import { components } from './components';

const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
  components,
  styles: {
    global: {
      body: { bg: 'brand.background', color: 'brand.textDark' },
      '*:focus-visible': { outline: '3px solid #D4AF37', outlineOffset: '2px' }
    }
  }
});

export default theme;
