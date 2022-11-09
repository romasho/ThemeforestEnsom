import styled from 'styled-components';

import { CardProps, VariantProps } from './types';

export const CardContainer = styled.div<Partial<CardProps>>`
  width: ${({ theme }) => theme.width.slimBlock};
  height: 248px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 25px;
  row-gap: 10px;
  box-shadow: ${({ theme }) => theme.boxShadows.shadowCard3};
  ${({ variant, theme }) => {
    switch (variant) {
      case 'big_icon':
        return `max-width: ${theme.width.wideBlock};
        width: auto;
        height: auto;
        display: flex;
        gap: 20px;
        padding: 20px 35px;
        
        @media (max-width: ${theme.breakPoints.mobile}) {
          gap: 16px;
        }
        `;
      case 'small_card':
        return `
        width: ${theme.width.slimBlock};
        height: 248px;`;
      case 'center_text':
        return `width: ${theme.width.middleBlock};
        height: 353px;
        align-items: center;
        text-align: center;
        margin: 10px 0px 10px 10px;

        @media (max-width: ${theme.breakPoints.mobile}) {
          width: 272px;
          height: auto;
          margin: 10px 0px;
        }
        `;
    }
  }}
  max-width: ${({ theme }) => theme.width.wideBlock};

  p {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const IconWrapper = styled.span<Partial<CardProps>>`
  display: flex;
  svg {
    ${({ variant, theme }) => {
      switch (variant) {
        case 'big_icon':
          return `
          width: 60px;
          height: 60px;
          
          @media (max-width: ${theme.breakPoints.mobile}) {
            width: 42px;
            height: 42px;
          }
          `;
        case 'small_card':
          return `    
          width: 45px;
          height: 45px;`;
        case 'center_text':
          return `
          @media (max-width: ${theme.breakPoints.mobile}) {
            width: 36px;
            height: 36px;
          }
          `;
      }
    }}
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const Typography = styled.h6<VariantProps>`
  letter-spacing: -0.015em;
  ${({ variant, theme }) => {
    switch (variant) {
      case 'small_card':
        return `
        font: ${theme.font.headline.headline5};`;
      default:
        return `    
        font: ${theme.font.headline.headline4};
        @media (max-width: ${theme.breakPoints.mobile}) {
          font: ${theme.font.headline.headline5}
        }
        `;
    }
  }};
`;

export const Text = styled.p<VariantProps>`
  letter-spacing: -0.015em;
  ${({ variant, theme }) => {
    switch (variant) {
      case 'small_card':
        return `
        font: ${theme.font.paragraph.paragraph3};`;
      case 'big_icon':
        return `      
          font: ${theme.font.paragraph.paragraph2};
        
          @media (max-width: ${theme.breakPoints.mobile}) {
            margin-top: -6px;
            font: ${theme.font.paragraph.paragraph3};
          }
          `;
      default:
        return `    
        font: ${theme.font.paragraph.paragraph2};
        @media (max-width: ${theme.breakPoints.mobile}) {
          font: ${theme.font.paragraph.paragraph3}
        }
        `;
    }
  }};
`;
