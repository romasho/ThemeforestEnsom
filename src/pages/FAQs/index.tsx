import { DescriptionPage } from '@/components/DescriptionPage';
import { PageLayout } from '@/layouts/Pages';
import { Section } from '@/layouts/Section';
import { Contacts } from '@/components/Contacts';
import { Subscribe } from '@/components/Subscribe';
import { Container } from '@/layouts/Container';

import { FAQsData } from './data';
import { DropDownList } from './DropdownList';

export const FAQs = () => {
  return (
    <PageLayout>
      <Section background="light">
        <DescriptionPage
          page="FAQs"
          headline="Frequently asked questions"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam."
        />
      </Section>
      <Section background="light">
        <Container>
          {FAQsData.map(({ question, answer, id }) => (
            <DropDownList key={id} question={question} answer={answer} />
          ))}
        </Container>
      </Section>

      <Contacts />
      <Subscribe />
    </PageLayout>
  );
};
