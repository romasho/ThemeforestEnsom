import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1110px;
  width: calc(100% - 32px);
  display: flex;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 120px 0;
  gap: 30px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    max-width: 360px;
    padding: 50px 0;
  }
`;

export const SolutionDescriptionWrapper = styled.div`
  width: 100%;
`;
