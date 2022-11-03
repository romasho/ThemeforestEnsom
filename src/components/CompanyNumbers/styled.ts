import styled from 'styled-components';

export const Container = styled.div`
  width: 160px;
  height: 94px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 768px) {
    width: 104px;
    height: 121px;
    align-items: center;
    gap: 0;
  }
`;

export const Numbers = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 112px;
  display: flex;
  align-items: center;
  letter-spacing: -0.025em;
  height: 56px;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 70px;
  }
`;
