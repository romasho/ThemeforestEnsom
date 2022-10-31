import { PageLayout } from '@/layouts/Pages';
import { Information } from '@/components/Information';
import { Features } from '@/pages/Home/Features';
import { CompanyOverview } from '@/components/CompanyOverview';
import { Benefits } from '@/pages/Home/Benefits';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/pages/Home/Pricing';
import { Blog } from '@/pages/Home/Blog';
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
