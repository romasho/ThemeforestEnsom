import { FC, FunctionComponent, SVGProps } from 'react';

import { Headline } from '../Headline';
import { Icon } from '../Icon';
import { Paragraph } from '../Paragraph';

import { CardContainer } from './styled';

type CardProps = {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  headline: string;
  description: string;
};

export const Card: FC<CardProps> = ({ icon, headline, description }) => {
  return (
    <CardContainer>
      <Icon icon={icon} />
      <Headline as="h5" size="h5">
        {headline}
      </Headline>
      <Paragraph size="p3">{description}</Paragraph>
    </CardContainer>
  );
};
