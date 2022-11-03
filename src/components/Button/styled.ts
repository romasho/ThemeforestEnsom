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
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 6px;
  outline: 0;
  border: 0;
  box-shadow: 0px 12px 30px rgba(24, 92, 255, 0.18);
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: ${({ icon }) => (icon ? 'center' : 'space-around')};
  font: ${({ theme }) => theme.font.headline.headline6};

  &:hover {
    text-decoration: none;
    background-color: #467dff;
  }

  &:active {
    box-shadow: none;
  }

  ${({ variant, theme }) => {
    switch (variant) {
      case 'fill':
        return `
        @media (max-width: 768px) {
          width: 100%;
        }`;
      case 'withIcon':
        return `
        width: 168px;
        height: 45px;
        padding: 10px 14px;
        box-shadow: none;
        font: ${theme.font.headline.headline7};`;
      case 'circle':
        return `
        width: 140px;
        height: 140px;
        border-radius: 100%;
        border: 9px solid #185CFF;
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.4);
        font: ${theme.font.headline.headline7};

        &:hover {
          border: 9px solid #467dff;
        }

        &::before {
          content: '';
          position: absolute;
          left: -19px;
          top: -19px;
          right: -19px;
          bottom: -19px;
          border: 10px solid white;
          border-radius: 50%;
        }

        @media (max-width: 768px) {
          width: 100px;
          height: 100px;
          border: 5px solid #185CFF;
          font: ${theme.font.headline.headline8};

          &::before {
            left: -9px;
            top: -9px;
            right: -9px;
            bottom: -9px;
            border: 5px solid white;
          }
        }
          `;
      case 'little':
        return `width: 137px;
        height: auto;
        padding: 10px 14px; 
        font: ${theme.font.headline.headline7};
        box-shadow: none;
        letter-spacing: -0.01em;
        &:hover {
          background-color: ${theme.colors.primary};
          box-shadow: 0px 12px 30px rgba(24, 92, 255, 0.18);;
        }
        `;
    }
  }}

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey};
    box-shadow: none;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.colors.white};
  }
`;
