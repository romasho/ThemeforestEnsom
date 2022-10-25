import styled from 'styled-components';

import { TypographyType, HtmlTag } from '.';

type ButtonPropsType = {
  contained?: boolean;
  as?: HtmlTag;
  size: TypographyType;
};

export const Typography = styled.h6<ButtonPropsType>`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 800;
  letter-spacing: -0.015em;
  ${(props) => {
    switch (props.size) {
      case 'h1':
        return `
        font-size: 46px;
        line-height: 60px;`;
      case 'h2':
        return `
        font-size: 38px;
        line-height: 56px;`;
      case 'h3':
        return `
        font-size: 30px;
        line-height: 40px;
        `;
      case 'h4':
        return `font-weight: 700;
        font-size: 22px;
        line-height: 33px;`;
      case 'h5':
        return `font-weight: 700;
        font-size: 20px;
        line-height: 30px;`;
      case 'h6':
        return `font-weight: 700;
        font-size: 16px;
        line-height: 24px;`;
      case 'h7':
        return `font-weight: 600;
          font-size: 14px;
          line-height: 24px;`;
      case 'h7m':
        return `font-weight: 500;
            font-size: 14px;
            line-height: 24px;`;
    }
  }}

  span {
    color: ${(props) => props.theme.colors.primary};
  }
`;
