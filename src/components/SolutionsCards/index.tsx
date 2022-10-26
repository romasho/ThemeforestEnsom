import { Card } from '@/layouts/Card';
import { Container } from '@/layouts/Container';
import { Section } from '@/layouts/Section';

import { DataAnalyticsSolutions } from './data';

export const SolutionsCards = () => {
  return (
    <Section background="light">
      <Container>
        {DataAnalyticsSolutions.map(({ icon, title, description, id }) => (
          <Card
            variant="big_icon"
            icon={icon}
            headline={title}
            description={description}
            key={id}
          />
        ))}
      </Container>
    </Section>
  );
};
