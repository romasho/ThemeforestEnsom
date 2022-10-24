import { FC } from 'react';

import { Headline } from '../Headline';
import { Paragraph } from '../Paragraph';

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
  return (
    <CardContainer>
      <HeadContainer>
        <Avatar src={avatar} alt="avatar" />
        <div>
          <Headline size="h6" as="h6">
            {name}
          </Headline>
          <Headline size="h7m">{position}</Headline>
        </div>
      </HeadContainer>
      <Paragraph size="p2">{description}</Paragraph>
    </CardContainer>
  );
};
