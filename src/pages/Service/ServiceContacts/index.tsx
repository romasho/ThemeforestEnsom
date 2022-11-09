import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

import { Box } from '../styled';

import { ContactForm } from '@/components/ContactForm';
import { ContactCards } from '@/components/ContactCards';
import { Container } from '@/pages/Solution/SolutionSection/styled';
import { Section } from '@/layouts/Section';
import { Headline } from '@/components/Headline';
import { Paragraph } from '@/components/Paragraph';
import { theme } from '@/theme';
import { Buttons } from '@/components/Button';
import { ROUTE_NAMES } from '@/constants';

export const ServiceContacts = () => {
  const isMobile = useMediaQuery({ query: `(max-width: ${theme.breakPoints.mobile})` });

  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate(ROUTE_NAMES.CONTACTS);
  };

  return (
    <Section background="dark">
      <Container>
        <Box>
          <Headline size={isMobile ? 'h3' : 'h2'}>Contact information</Headline>
          <Paragraph size={isMobile ? 'p3' : 'p2'} color={theme.colors.grey}>
            Fill up the form and our Team will get back to you with 25 hours.
          </Paragraph>
          <ContactCards direction="row" iconColor={theme.colors.primary} />
        </Box>
        {!isMobile && <ContactForm />}
        {isMobile && (
          <Buttons variant="fill" onClick={navigateToContacts}>
            Contact us
          </Buttons>
        )}
      </Container>
    </Section>
  );
};
