import { FC } from 'react';

import { Icon } from '@/components/Icon';
import { Link } from '@/components/Link';

import { CardContainer, IconWrapper, Typography, Text } from './styled';
import { CardProps } from './types';

export const Card: FC<CardProps> = ({ variant, icon, headline, description }) => {
  return (
    <CardContainer variant={variant}>
      <IconWrapper variant={variant}>
        <Icon icon={icon} />
      </IconWrapper>
      <Typography variant={variant}>{headline}</Typography>
      <Text variant={variant}>{description}</Text>
      {variant === 'big_icon' && <Link to={headline} />}
    </CardContainer>
  );
};
