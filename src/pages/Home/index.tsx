import { PageLayout } from '@/layouts/Pages';
import { Information } from '@/components/Information';
import { Features } from '@/components/Features';
import { CompanyOverview } from '@/components/CompanyOverview';
import { Benefits } from '@/components/Benefits';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { Blog } from '@/components/Blog';
import { Contacts } from '@/components/Contacts';
import { Subscribe } from '@/components/Subscribe';

export const Home = () => {
  return (
    <PageLayout>
      <Information />
      <Features />
      <CompanyOverview />
      <Benefits />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contacts />
      <Subscribe />
    </PageLayout>
  );
};
