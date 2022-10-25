import { Container } from '@/layouts/Container';
import { Section } from '@/layouts/Section';

import { Card } from './Card';

export const SolutionsCards = () => {
  return (
    <Section background="light">
      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </Section>
  );
};
