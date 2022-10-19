import styled from 'styled-components';

import { ReactComponent } from '*.svg';

type ButtonPropsType = {
  contained?: boolean;
  icon?: typeof ReactComponent;
};

export const Button = styled.button<ButtonPropsType>`
  width: 190px;
  height: 54px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border-radius: 6px;
  outline: 0;
  border: 0;
  box-shadow: 0px 12px 30px rgba(24, 92, 255, 0.18);
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: ${({ icon }) => (icon ? 'center' : 'space-around')};

  ${(props) =>
    props.contained
      ? `color: ${props.theme.colors.white};
  background-color: ${props.theme.colors};`
      : ''};

  &:hover {
    text-decoration: none;
    background-color: #467dff;
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.grey};
    box-shadow: none;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: ${(props) => props.theme.colors.white};
  }
`;
