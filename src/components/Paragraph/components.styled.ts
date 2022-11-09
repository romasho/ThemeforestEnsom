import styled from 'styled-components';

import { ParagraphType } from '.';

type TypographyType = {
  contained?: boolean;
  size: ParagraphType;
  color?: string;
};

export const Typography = styled.p<TypographyType>`
  font-family: 'Open Sans';
  font-style: normal;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  color: ${(props) => (props.color ? props.color : 'none')};
  ${({ size, theme }) => {
    switch (size) {
      case 'p1':
        return `font: ${theme.font.paragraph.paragraph1};`;
      case 'p2':
        return `font: ${theme.font.paragraph.paragraph2};`;
      case 'p2b':
        return `font: ${theme.font.paragraph.paragraph2bold};`;
      case 'p3':
        return `font: ${theme.font.paragraph.paragraph3};`;
      case 'p3b':
        return `font: ${theme.font.paragraph.paragraph3bold};`;
    }
  }};
`;
