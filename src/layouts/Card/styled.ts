import styled from 'styled-components';

import { CardProps } from '.';

export const CardContainer = styled.div<Partial<CardProps>>`
  width: 255px;
  height: 248px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 25px;
  row-gap: 10px;
  box-shadow: ${({ theme }) => theme.boxShadows.shadowCard3};
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
      case 'center_text':
        return `width: 350px;
        height: 353px;
        align-items: center;
        text-align: center;
        margin: 10px 0px 10px 10px;
        `;
    }
  }}
  max-width: 540px;

  p {
    color: ${({ theme }) => theme.colors.grey};
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
    fill: ${({ theme }) => theme.colors.primary};
  }
`;
