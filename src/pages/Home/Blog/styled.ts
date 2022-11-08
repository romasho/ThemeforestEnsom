import styled from 'styled-components';

export const PostsContainer = styled.div`
  max-width: ${({ theme }) => theme.width.container};
  width: calc(100% - 16px);

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 360px;
    row-gap: 20px;
    display: flex;
    flex-direction: column;
  }
`;
