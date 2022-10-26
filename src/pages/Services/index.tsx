import { useLocation } from 'react-router-dom';

import { DescriptionPage } from '@/components/DescriptionPage';
import { PageLayout } from '@/layouts/Pages';
import { Section } from '@/layouts/Section';
import { Contacts } from '@/components/Contacts';
import { Subscribe } from '@/components/Subscribe';
import { CompanyOverview } from '@/components/CompanyOverview';
import { ServicesSection } from '@/components/ServicesSection';

export const Services = () => {
  const obj = useLocation();
  console.log(obj);

  return (
    <PageLayout>
      <Section background="light">
        <DescriptionPage
          page={'Services'}
          headline={'Data Analytics Services'}
          description={
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore.'
          }
        />
      </Section>
      <ServicesSection />
      <CompanyOverview />
      <Contacts />
      <Subscribe />
    </PageLayout>
  );
};
