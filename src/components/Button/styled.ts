import styled from 'styled-components';

import { ButtonType } from '.';

import { ReactComponent } from '*.svg';

type ButtonPropsType = {
  contained?: boolean;
  icon?: typeof ReactComponent;
  variant: ButtonType;
};

export const Button = styled.button<ButtonPropsType>`
  width: 190px;
  height: 54px;
  padding: 0;
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
  font: ${(props) => props.theme.font.headline.headline6};

  &:hover {
    text-decoration: none;
    background-color: #467dff;
  }

  &:active {
    box-shadow: none;
  }

  ${(props) => {
    switch (props.variant) {
      case 'fill':
        return '';
      case 'withIcon':
        return `
        width: 168px;
        height: 45px;
        padding: 10px 14px;
        box-shadow: none;
        font: ${props.theme.font.headline.headline7};`;
      case 'circle':
        return `
        width: 140px;
        height: 140px;
        border-radius: 100%;
        border: 9px solid #185CFF;
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.4);
        font: ${props.theme.font.headline.headline7};

        &:hover {
          border: 9px solid #467dff;
        }

        &::before {
          content: '';
          position: absolute;
          left: -20px;
          top: -20px;
          right: -20px;
          bottom: -20px;
          border: 10px solid white;
          border-radius: 50%;
        }
          `;
      case 'little':
        return `width: 137px;
        height: auto;
        padding: 10px 14px; 
        font: ${props.theme.font.headline.headline7};
        box-shadow: none;
        letter-spacing: -0.01em;
        &:hover {
          background-color: ${props.theme.colors.primary};
          box-shadow: 0px 12px 30px rgba(24, 92, 255, 0.18);;
        }
        `;
    }
  }}

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
