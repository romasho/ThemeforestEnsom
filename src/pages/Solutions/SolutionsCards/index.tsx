import { Card } from '@/layouts/Card';
import { CardContainer } from '@/layouts/Container';
import { Section } from '@/layouts/Section';

import { DataAnalyticsSolutions } from './data';

export const SolutionsCards = () => {
  return (
    <Section background="light">
      <CardContainer>
        {DataAnalyticsSolutions.map(({ icon, title, description, id }) => (
          <Card
            variant="big_icon"
            icon={icon}
            headline={title}
            description={description}
            key={id}
          />
        ))}
      </CardContainer>
    </Section>
  );
};
