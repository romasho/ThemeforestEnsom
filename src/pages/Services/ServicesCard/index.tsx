import { FC, FunctionComponent, SVGProps } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Headline } from '@/components/Headline';
import { Icon } from '@/components/Icon';
import { Link } from '@/components/Link';
import { Paragraph } from '@/components/Paragraph';
import { theme } from '@/theme';

import { ServicesCardContainer, TextWrapper } from './styled';

interface ServicesCardProps {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  headline: string;
  description: string;
}

export const ServicesCard: FC<ServicesCardProps> = ({ icon, headline, description }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <ServicesCardContainer>
      <Icon icon={icon} />
      <TextWrapper>
        <Headline size={isMobile ? 'h5' : 'h4'}>{headline}</Headline>
        <Paragraph size={isMobile ? 'p3' : 'p2'} color={theme.colors.grey}>
          {description}
        </Paragraph>
      </TextWrapper>
      <Link to={headline} />
    </ServicesCardContainer>
  );
};
