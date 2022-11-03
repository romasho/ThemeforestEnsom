import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px;
  row-gap: 25px;
  box-shadow: ${({ theme }) => theme.boxShadows.shadowCard3};
  max-width: 540px;
  margin: 10px;

  @media (max-width: 768px) {
    max-width: 328px;
  }
`;

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 25px;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  object-fit: cover;
  object-position: center;
  border-radius: 100%;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
