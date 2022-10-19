import { FC } from 'react';

import { Typography } from './components.styled';

export type ParagraphType = 'p1' | 'p2' | 'p2b' | 'p3' | 'p3b';

interface ParagraphProps {
  children: JSX.Element | JSX.Element[];
  size: ParagraphType;
}

export const Paragraph: FC<ParagraphProps> = ({ children, size }) => {
  return <Typography size={size}>{children}</Typography>;
};
