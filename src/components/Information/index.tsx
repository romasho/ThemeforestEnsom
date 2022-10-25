import { Headline } from '../Headline';
import { Paragraph } from '../Paragraph';

import { Section } from '@/layouts/Section';
import { Container } from '@/layouts/Container';
import { HeadlineWrapper } from '@/pages/Home/styled';
import { theme } from '@/theme';

import { DescriptionWrapper, PositionedButton, BackgroundSection } from './styled';

export const Information = () => {
  return (
    <>
      <Section background="light">
        <Container>
          <HeadlineWrapper>
            <Headline as="h1" size="h1">
              Find true power in your data with <span>Ensome</span>
            </Headline>
          </HeadlineWrapper>
          <DescriptionWrapper>
            <Paragraph size="p2" color={theme.colors.grey}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              lauda, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
            </Paragraph>
            <PositionedButton variant="circle">Learn more</PositionedButton>
          </DescriptionWrapper>
        </Container>
      </Section>
      <BackgroundSection background="dark" />
    </>
  );
};
