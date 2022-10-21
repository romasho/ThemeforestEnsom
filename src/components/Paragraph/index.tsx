import { FC, ReactNode } from 'react';

import { Typography } from './components.styled';

export type ParagraphType = 'p1' | 'p2' | 'p2b' | 'p3' | 'p3b';

interface ParagraphProps {
  children: ReactNode;
  size: ParagraphType;
  color?: string;
}

export const Paragraph: FC<ParagraphProps> = ({ children, size, color }) => {
  return (
    <Typography size={size} color={color}>
      {children}
    </Typography>
  );
};
