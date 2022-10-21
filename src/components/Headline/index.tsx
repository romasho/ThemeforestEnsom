import { FC, ReactNode } from 'react';

import { Typography } from './components.styled';

export type TypographyType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h7m';

export type HtmlTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadlineProps {
  children: ReactNode;
  as?: HtmlTag;
  size: TypographyType;
}

export const Headline: FC<HeadlineProps> = ({ children, as, size }) => {
  return (
    <Typography as={as} size={size}>
      {children}
    </Typography>
  );
};
