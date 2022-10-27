import styled from 'styled-components';

import { BlogPostType } from './types';

export const PostContainer = styled.div<Partial<BlogPostType>>`
  display: flex;
  flex-direction: column;

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
    }
  }}
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 15px;
`;
