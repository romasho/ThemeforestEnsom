import styled from 'styled-components';

import { ParagraphType } from '.';

type TypographyType = {
  contained?: boolean;
  size: ParagraphType;
};

export const Typography = styled.p<TypographyType>`
  font-family: 'Open Sans';
  font-style: normal;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  ${(props) => {
    switch (props.size) {
      case 'p1':
        return `font-weight: 400;
        font-size: 20px;
        line-height: 33px;`;
      case 'p2':
        return `font-weight: 400;
        font-size: 16px;
        line-height: 28px;`;
      case 'p2b':
        return `font-weight: 700;
        font-size: 16px;
        line-height: 28px;
        `;
      case 'p3':
        return `font-weight: 400;
        font-size: 14px;
        line-height: 24px;`;
      case 'p3b':
        return `font-weight: 600;
        font-size: 14px;
        line-height: 24px;`;
    }
  }}
`;
