import { FC, FunctionComponent, SVGProps } from 'react';

import { Headline } from '@/components/Headline';
import { Icon } from '@/components/Icon';
import { Paragraph } from '@/components/Paragraph';
import { Link } from '@/components/Link';

import { CardContainer, IconWrapper } from './styled';

export interface CardProps {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  headline: string;
  description: string;
  variant: 'right_text' | 'center_text' | 'big_icon' | 'small_card';
}

export const Card: FC<CardProps> = ({ variant, icon, headline, description }) => {
  return (
    <CardContainer variant={variant}>
      <IconWrapper variant={variant}>
        <Icon icon={icon} />
      </IconWrapper>
      <Headline as="h5" size={variant === 'small_card' ? 'h5' : 'h4'}>
        {headline}
      </Headline>
      <Paragraph size={variant === 'small_card' ? 'p3' : 'p2'}>{description}</Paragraph>
      {(variant === 'center_text' || variant === 'big_icon') && <Link to={headline} />}
    </CardContainer>
  );
};
