import styled from 'styled-components';

export const ServicesCardContainer = styled.div`
  max-width: 540px;
  padding: 35px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
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
