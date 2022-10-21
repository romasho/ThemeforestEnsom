import { ArrowControls } from '../ArrowControls';
import { Headline } from '../Headline';
import { TestimonialCard } from '../TestimonialsCard';

import { Section } from '@/layouts/Section';
import { Container } from '@/layouts/Container';

import { testimonialsData } from './data';
import { TestimonialsWrapper } from './styled';

export const Testimonials = () => {
  return (
    <Section background="light">
      <Container>
        <Headline as="h2" size="h2">
          Testimonials
        </Headline>
        <ArrowControls />
        <TestimonialsWrapper>
          {testimonialsData.map(({ avatar, name, position, description }) => (
            <TestimonialCard
              avatar={avatar}
              name={name}
              position={position}
              description={description}
              key={name}
            />
          ))}
        </TestimonialsWrapper>
      </Container>
    </Section>
  );
};
