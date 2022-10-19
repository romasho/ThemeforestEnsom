import { FC } from 'react';

import { Typography } from './components.styled';

export type TypographyType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h7m';

interface HeadlineProps {
  children: JSX.Element[] | JSX.Element;
  as: TypographyType;
}

export const Headline: FC<HeadlineProps> = ({ children, as }) => {
  return <Typography as={as}>{children}</Typography>;
};
