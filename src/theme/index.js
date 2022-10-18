import { css } from 'styled-components';

const font = 'Manrope';

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
};

const boxShadows = {
  shadowButton:
    'box-shadow: 0px 1px 2px 0px rgba(0, 43, 78, 0.3),0px 12px 30px 0px rgba(24, 92, 255, 0.18);',
  shadowCard: '0px 1px 2px 0px rgba(0, 43, 78, 0.3), 0px 2px 20px 17px rgba(24, 92, 255, 0.04);',
  shadowCard2: '0px 1px 2px 0px rgba(0, 43, 78, 0.3), 0px 12px 30px 17px rgba(24, 92, 255, 0.04);',
  shadowCard3: '0px 1px 2px 0px rgba(0, 43, 78, 0.3), 0px 4px 12px 0px rgba(12, 68, 204, 0.1);',
  shadowDropdown:
    'box-shadow: 0px 1px 2px 0px rgba(0, 43, 78, 0.3), 0px 2px 6px 0px rgba(0, 43, 78, 0.15);',
};

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
};

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default {
  above,
  below,
  boxShadows,
  font,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [46, 38, 30, 22, 20, 16, 14],
  colors: {
    ...palette,
  },
};
