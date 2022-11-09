import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.width.container};
  width: calc(100% - 32px);
  display: flex;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 120px 0;
  gap: 30px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    flex-wrap: wrap;
    max-width: 360px;
    padding: 50px 0;
  }
`;

export const SolutionDescriptionWrapper = styled.div`
  width: 100%;
`;
