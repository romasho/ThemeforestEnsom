import styled from 'styled-components';

export const TestimonialsWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 50px;
  max-width: ${({ theme }) => theme.width.container};
  width: calc(100% - 32px);
  margin-left: 4px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding-top: 0;
  }
`;
