import { FC, FunctionComponent, SVGProps } from 'react';

import { Headline } from '@/components/Headline';
import { Icon } from '@/components/Icon';
import { Link } from '@/components/Link';
import { Paragraph } from '@/components/Paragraph';
import { theme } from '@/theme';

import { ServicesCardContainer } from './styled';

interface ServicesCardProps {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  headline: string;
  description: string;
}

export const ServicesCard: FC<ServicesCardProps> = ({ icon, headline, description }) => {
  return (
    <ServicesCardContainer>
      <Icon icon={icon} />
      <Headline size="h4">{headline}</Headline>
      <Paragraph size="p2" color={theme.colors.grey}>
        {description}
      </Paragraph>
      <Link to={headline} />
    </ServicesCardContainer>
  );
};
