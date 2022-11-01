import styled from 'styled-components';

import { BlogPostType } from './types';

export const PostContainer = styled.div<Partial<BlogPostType>>`
  display: flex;
  flex-direction: column;

  img {
    border-radius: 6px;
    object-fit: cover;
  }

  ${(props) => {
    switch (props.variant) {
      case 'medium':
        return `
        width: 540px;
        gap: 30px;
        box-shadow: ${props.theme.boxShadows.shadowCard3};
        padding-bottom: 30px;`;
      case 'small':
        return `    
        width: 350px;
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
        `;
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
  ${(props) => {
    switch (props.variant) {
      case 'medium':
        return `
        gap: 17px;
        padding: 0 35px;`;
      case 'small':
        return `    
        gap: 12px;`;
      case 'without_description':
        return `gap: 15px;`;
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
