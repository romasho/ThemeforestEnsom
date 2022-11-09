import styled from 'styled-components';

import { BlogPostType, VariantProps } from './types';

export const PostContainer = styled.div<Partial<BlogPostType>>`
  display: flex;
  flex-direction: column;

  img {
    border-radius: 6px;
    object-fit: cover;
  }

  ${({ variant, theme }) => {
    switch (variant) {
      case 'medium':
        return `
        width: ${theme.width.wideBlock};
        gap: 30px;
        box-shadow: ${theme.boxShadows.shadowCard3};
        padding-bottom: 30px;
        
        @media (max-width: ${theme.breakPoints.mobile}) {
          max-width: ${theme.width.containerMobile};
          gap: 20px;
          padding-bottom: 20px;
        }
        `;
      case 'small':
        return `    
        width: ${theme.width.middleBlock};
        gap: 20px;`;
      case 'without_description':
        return `    
        width: 445px;
        gap: 20px;
        flex-direction: row;
        align-items: center;
        
        img {
          width: 190px;
          height: 114px;
        }

         @media (max-width: ${theme.breakPoints.mobile}) {
            max-width: ${theme.width.containerMobile};
            width: 100%;

            img {
              width: 160px;
              height: 96px;
            }
        }`;
      case 'right_text':
        return `    
        width: 100%;
        gap: 20px;
        flex-direction: row;
        align-items: center;
        
        img {
          width: 215px;
          height: 171px;
        }
        `;
    }
  }}
`;

export const BlogInfo = styled.div<Partial<BlogPostType>>`
  display: flex;
  flex-direction: column;
  ${({ variant, theme }) => {
    switch (variant) {
      case 'medium':
        return `
        gap: 17px;
        padding: 0 35px;

        @media (max-width: ${theme.breakPoints.mobile}) {
          gap: 12px;
          padding: 0 20px;
        } 
        `;
      case 'small':
        return `    
        gap: 12px;`;
      case 'without_description':
        return `gap: 15px;
        
        @media (max-width: ${theme.breakPoints.mobile}) {
          gap: 6px;
      }
        `;
      case 'right_text':
        return `    
        gap: 15px;`;
    }
  }}
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const Typography = styled.h6<VariantProps>`
  letter-spacing: -0.015em;
  ${({ variant, theme }) => {
    switch (variant) {
      case 'big':
        return `
        font: ${theme.font.headline.headline4};`;
      case 'medium':
        return `    
        font: ${theme.font.headline.headline4};
        
        @media (max-width: ${theme.breakPoints.mobile}) {
          font: ${theme.font.headline.headline6};
      }
        `;
      case 'small':
        return `
        font: ${theme.font.headline.headline6};
        
        @media (max-width: ${theme.breakPoints.mobile}) {
          font: ${theme.font.headline.headline7}
        }
        `;
      case 'without_description':
        return `
          font: ${theme.font.headline.headline6};
          
          @media (max-width: ${theme.breakPoints.mobile}) {
            font: ${theme.font.headline.headline7}
          }
          `;
      default:
        return `    
        font: ${theme.font.headline.headline6};`;
    }
  }};
`;
