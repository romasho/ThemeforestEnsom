import styled from 'styled-components';

import { HeadlineProps } from './types';

export const Typography = styled.h6<HeadlineProps>`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 800;
  letter-spacing: -0.015em;
  ${({ size, theme }) => {
    switch (size) {
      case 'h1':
        return `
        font: ${theme.font.headline.headline1};`;
      case 'h2':
        return `
        font: ${theme.font.headline.headline2};`;
      case 'h3':
        return `
        font: ${theme.font.headline.headline3};`;
      case 'h4':
        return `
        font: ${theme.font.headline.headline4};`;
      case 'h5':
        return `
        font: ${theme.font.headline.headline5};`;
      case 'h6':
        return `
        font: ${theme.font.headline.headline6};
        `;
      case 'h7':
        return `
        font: ${theme.font.headline.headline7};`;
      case 'h7m':
        return `
        font: ${theme.font.headline.headline8semiBold};`;
      case 'extraLarge':
        return `
        font-weight: 800;
        font-size: 80px;
        line-height: 110%;`;
    }
  }}
  color: ${({ color }) => color};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
