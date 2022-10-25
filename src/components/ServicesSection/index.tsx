import { Section } from '@/layouts/Section';

import { servicesData } from './data';
import { ServicesCard } from './ServicesCard';
import { Container } from './styled';

export const ServicesSection = () => {
  return (
    <Section background="light">
      <Container>
        {servicesData.map(({ icon, headline, description, id }) => (
          <ServicesCard icon={icon} headline={headline} description={description} key={id} />
        ))}
      </Container>
    </Section>
  );
};
