import { memo } from 'react';

import { PageLayout } from '@/layouts/Pages';
import { Information } from '@/pages/Home/Information';
import { Features } from '@/pages/Home/Features';
import { CompanyOverview } from '@/components/CompanyOverview';
import { Benefits } from '@/pages/Home/Benefits';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/pages/Home/Pricing';
import { Blog } from '@/pages/Home/Blog';
import { Contacts } from '@/components/Contacts';
import { Subscribe } from '@/components/Subscribe';

const Home = memo(() => {
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
});

export default Home;
