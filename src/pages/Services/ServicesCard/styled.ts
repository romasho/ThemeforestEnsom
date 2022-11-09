import styled from 'styled-components';

export const ServicesCardContainer = styled.div`
  max-width: ${({ theme }) => theme.width.wideBlock};
  padding: 35px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding: 30px 25px;

    svg {
      width: 84px;
      height: 70px;
    }
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
