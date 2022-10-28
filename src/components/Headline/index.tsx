import { FC } from 'react';

import { Typography } from './components.styled';
import { HeadlineProps } from './types';

export const Headline: FC<HeadlineProps> = ({ children, as, size, color }) => {
  return (
    <Typography as={as} size={size} color={color}>
      {children}
    </Typography>
  );
};
