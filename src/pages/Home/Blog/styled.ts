import styled from 'styled-components';

export const PostsContainer = styled.div`
  max-width: 1110px;
  width: calc(100% - 16px);

  @media (max-width: 768px) {
    width: 360px;
    row-gap: 20px;
    display: flex;
    flex-direction: column;
  }
`;
