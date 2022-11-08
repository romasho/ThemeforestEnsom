import styled from 'styled-components';

export const ArrowContainer = styled.div`
  width: 235px;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 104px;
  }
`;

export const ArrowButton = styled.button`
  width: 110px;
  height: 60px;
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 30px;
    fill: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    svg {
      fill: ${({ theme }) => theme.colors.helperBlue3};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 48px;
    height: 40px;
    border-radius: 14px;

    svg {
      width: 24px;
      height: 24px;
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
