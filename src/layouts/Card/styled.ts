import styled from 'styled-components';

import { CardProps } from '.';

export const CardContainer = styled.div<Partial<CardProps>>`
  width: 255px;
  height: 248px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.colors.white};
  padding: 25px;
  row-gap: 10px;
  box-shadow: ${(props) => props.theme.boxShadows.shadowCard3};
  ${(props) => {
    switch (props.variant) {
      case 'big_icon':
        return `max-width: 540px;
        width: auto;
        height: auto;
        display: flex;
        gap: 20px;
        padding: 20px 35px;`;
      case 'small_card':
        return `  &:nth-child(2) {
          margin-top: 55px;
        }
      
        &:nth-child(3) {
          margin-top: -50px;
        }`;
    }
  }}
  max-width: 540px;

  p {
    color: ${(props) => props.theme.colors.grey};
  }
`;

export const IconWrapper = styled.span<Partial<CardProps>>`
  svg {
    ${(props) => {
      switch (props.variant) {
        case 'big_icon':
          return `
          width: 60px;
          height: 60px;`;
        case 'small_card':
          return `    
          width: 45px;
          height: 45px;`;
      }
    }}
    fill: ${(props) => props.theme.colors.primary};
  }
`;
