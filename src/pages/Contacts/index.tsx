import { useMediaQuery } from 'react-responsive';

import { BaseBlock } from '../Home/styled';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Container } from '@/layouts/Container';
import { PageLayout } from '@/layouts/Pages';
import { SectionColumn } from '@/layouts/Section';
import { Headline } from '@/components/Headline';
import { ContactForm } from '@/components/ContactForm';
import { MapboxMap } from '@/components/MapBox';
import { ContactCards } from '@/components/ContactCards';

export const Contacts = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <PageLayout>
      <SectionColumn background="light">
        <Container style={{ alignItems: 'flex-start' }}>
          <Breadcrumbs />
          <BaseBlock>
            <Headline size={isMobile ? 'h3' : 'extraLarge'}>
              How can we <span>help you?</span>
            </Headline>
          </BaseBlock>
          <ContactForm />
          <ContactCards direction="column" />
        </Container>
        <MapboxMap />
      </SectionColumn>
    </PageLayout>
  );
};
