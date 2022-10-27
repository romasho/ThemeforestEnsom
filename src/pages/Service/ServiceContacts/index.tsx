import { Box } from '../styled';

import { ContactForm } from '@/components/ContactForm';
import { ContactCards } from '@/components/ContactCards';
import { Container } from '@/pages/Solution/SolutionSection/styled';
import { Section } from '@/layouts/Section';
import { Headline } from '@/components/Headline';
import { Paragraph } from '@/components/Paragraph';
import { theme } from '@/theme';

export const ServiceContacts = () => {
  return (
    <Section background="dark">
      <Container>
        <Box>
          <Headline size="h2">Contact information</Headline>
          <Paragraph size="p2" color={theme.colors.grey}>
            Fill up the form and our Team will get back to you with 25 hours.
          </Paragraph>
          <ContactCards direction="row" iconColor={theme.colors.primary} />
        </Box>
        <ContactForm />
      </Container>
    </Section>
  );
};
