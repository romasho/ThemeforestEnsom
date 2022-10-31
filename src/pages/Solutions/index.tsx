import { BaseBlock } from '../Home/styled';

import { DescriptionPage } from '@/components/DescriptionPage';
import { Testimonials } from '@/components/Testimonials';
import { PageLayout } from '@/layouts/Pages';
import { Section } from '@/layouts/Section';
import { Contacts } from '@/components/Contacts';
import { Subscribe } from '@/components/Subscribe';
import { SolutionsCards } from '@/components/SolutionsCards';

import { AdvantagesSection } from './AdvantagesSection';

export const Solutions = () => {
  return (
    <PageLayout>
      <Section background="light">
        <DescriptionPage
          page={'Solutions'}
          headline={'Data analytics solutions'}
          description={'Getting ready for your success, we provide truly outstanding IT solutions.'}
        />
      </Section>
      <SolutionsCards />
      <AdvantagesSection />
      <Testimonials />
      <Contacts />
      <Subscribe />
    </PageLayout>
  );
};
