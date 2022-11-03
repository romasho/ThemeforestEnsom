import styled, { keyframes } from 'styled-components';

export const DropDownContainer = styled.div`
  width: 328px;
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.helperBlue2};
  padding-bottom: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;

  svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const Button = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.white};
  font: ${({ theme }) => theme.font.headline.headline6};
`;

const rotate = keyframes`
    0% {
      opacity: 0;
      transform: translateY(-40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
`;

export const LinkContainer = styled.div`
  padding-left: 28px;
  width: 100%;
  display: flex;
  flex-direction: column;
  animation: ${rotate} 0.3s forwards;
  gap: 15px;
`;
