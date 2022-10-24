import { css } from 'styled-components';
import { DefaultTheme } from 'styled-components';

export const palette = {
  primary: '#185CFF',
  secondary: '#002B4E',
  tertiary: '#F0F9FF',
  helperBlue: '#194060',
  helperBlue2: '#607D94',
  helperBlue3: '#C9DCEC',
  black: '#292D33',
  grey: '#9497A1',
  background: '#F1F6FA',
  error: '#C14040',
  white: '#FFFFFF',
};

export type paletteType = typeof palette;

const boxShadows = {
  shadowButton:
    'box-shadow: 0px 1px 2px 0px rgba(0, 43, 78, 0.3),0px 12px 30px 0px rgba(24, 92, 255, 0.18);',
  shadowCard: '0px 1px 2px 0px rgba(0, 43, 78, 0.3), 0px 2px 20px 17px rgba(24, 92, 255, 0.04);',
  shadowCard2: '0px 12px 30px 17px rgba(24, 92, 255, 0.04);',
  shadowCard3: '0px 4px 12px rgba(12, 68, 204, 0.1);',
  shadowDropdown:
    'box-shadow: 0px 1px 2px 0px rgba(0, 43, 78, 0.3), 0px 2px 6px 0px rgba(0, 43, 78, 0.15);',
};

export type boxShadowsType = typeof boxShadows;

const font = {
  headline: {
    headline1: 'normal 800 46px/60px Manrope, sans-serif',
    headline2: 'normal 800 38px/56px Manrope, sans-serif',
    headline3: 'normal 800 30px/40px Manrope, sans-serif',
    headline4: 'normal 700 22px/33px Manrope, sans-serif',
    headline5: 'normal 700 20px/30px Manrope, sans-serif',
    headline6: 'normal 700 16px/24px Manrope, sans-serif',
    headline7: 'normal 600 14px/24px Manrope, sans-serif',
    headline8: 'normal 500 14px/24px Manrope, sans-serif',
  },
  paragraph: {
    paragraph1: 'normal 400 20px/33px Open Sans, sans-serif',
    paragraph2: 'normal 400 16px/28px Open Sans, sans-serif',
    paragraph2bold: 'normal 700 16px/28px Open Sans, sans-serif',
    paragraph3: 'normal 400 14px/24px Open Sans, sans-serif',
    paragraph5: 'normal 600 14px/24px Open Sans, sans-serif',
  },
};

export type fontType = typeof font;

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
};

export const theme: DefaultTheme = {
  boxShadows,
  font,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [46, 38, 30, 22, 20, 16, 14],
  colors: {
    ...palette,
  },
};
