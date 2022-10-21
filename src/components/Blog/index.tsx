import { ArrowControls } from '../ArrowControls';
import { Headline } from '../Headline';

import { Section } from '@/layouts/Section';
import { Container } from '@/layouts/Container';

export const Blog = () => {
  return (
    <Section background="light">
      <Container>
        <Headline as="h2" size="h2">
          Our Blog
        </Headline>
        <ArrowControls />
      </Container>
    </Section>
  );
};
