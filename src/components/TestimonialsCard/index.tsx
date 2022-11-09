import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Headline } from '@/components/Headline';
import { Paragraph } from '@/components/Paragraph';
import { theme } from '@/theme';

import { Avatar, CardContainer, HeadContainer } from './styled';

interface TestimonialCardProps {
  avatar: string;
  name: string;
  position: string;
  description: string;
}

export const TestimonialCard: FC<TestimonialCardProps> = ({
  avatar,
  name,
  position,
  description,
}) => {
  const isMobile = useMediaQuery({ query: `(max-width: ${theme.breakPoints.mobile})` });

  return (
    <CardContainer>
      <HeadContainer>
        <Avatar src={avatar} alt="avatar" />
        <div>
          <Headline size={isMobile ? 'h7' : 'h6'} as="h6">
            {name}
          </Headline>
          <Headline size="h7m" color={theme.colors.grey}>
            {position}
          </Headline>
        </div>
      </HeadContainer>
      <Paragraph size={isMobile ? 'p3' : 'p2'} color={theme.colors.grey}>
        {description}
      </Paragraph>
    </CardContainer>
  );
};
