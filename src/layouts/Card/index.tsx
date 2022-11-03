import { FC, FunctionComponent, SVGProps } from 'react';

import { Icon } from '@/components/Icon';
import { Paragraph } from '@/components/Paragraph';
import { Link } from '@/components/Link';

import { CardContainer, IconWrapper, Typography, Text } from './styled';

export interface VariantProps {
  variant: 'right_text' | 'center_text' | 'big_icon' | 'small_card';
}

export interface CardProps extends VariantProps {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  headline: string;
  description: string;
}

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
