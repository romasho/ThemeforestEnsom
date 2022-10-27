import { PageLayout } from '@/layouts/Pages';
import { Subscribe } from '@/components/Subscribe';
import { BlogCardsSection } from '@/components/BlogCardsSection';

export const Blog = () => {
  return (
    <PageLayout>
      <BlogCardsSection />
      <Subscribe />
    </PageLayout>
  );
};
