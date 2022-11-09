import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export const DropDownContainer = styled.div`
  width: 100%;
  color: inherit;
  border-bottom: 1px solid ${({ theme }) => theme.colors.helperBlue2};
  padding-bottom: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Button = styled.button`
  border: none;
  background: none;
  color: inherit;
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

export const DropDownLink = styled(NavLink)`
  text-decoration: none;
  font: ${({ theme }) => theme.font.headline.headline7};
  color: inherit;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
