import { PageDescription } from '@/components/PageDescription';
import { Testimonials } from '@/components/Testimonials';
import { PageLayout } from '@/layouts/Pages';
import { Section } from '@/layouts/Section';
import { Contacts } from '@/components/Contacts';
import { Subscribe } from '@/components/Subscribe';
import { SolutionsCards } from '@/pages/Solutions/SolutionsCards';

import { AdvantagesSection } from './AdvantagesSection';

export const Solutions = () => {
  return (
    <PageLayout>
      <Section background="light">
        <PageDescription
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

export default Solutions;
