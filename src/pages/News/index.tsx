import { useParams } from 'react-router-dom';

import { dataBlog } from '@/pages/Home/Blog/data';
import { PageLayout } from '@/layouts/Pages';
import { Section } from '@/layouts/Section';
import { Subscribe } from '@/components/Subscribe';
import { CenterAlignContainer } from '@/layouts/Container';
import { Headline } from '@/components/Headline';
import { Breadcrumbs } from '@/components/Breadcrumbs';

import { StyledContainer } from './styled';
import { CurrentNews } from './CurrentNews';
import { PopularNews } from './PopularNews';
import { RelatedNews } from './RelatedNews';

export const News = () => {
  const { userId } = useParams();

  const [currentNews] = dataBlog.filter((el) => el.headline === userId);

  const popularNews = dataBlog.sort((a, b) => b.views - a.views).slice(0, 4);

  const { tags } = currentNews;
  const relatedPosts = dataBlog
    .filter((elem) => tags.reduce((acc, el) => (elem.tags.includes(el) ? true : acc), false))
    .slice(0, 3);

  return (
    <PageLayout>
      <Section background="dark">
        <CenterAlignContainer>
          <Headline size="h1">{userId}</Headline>
          <Breadcrumbs position="bottom" />
        </CenterAlignContainer>
      </Section>
      <Section background="light">
        <StyledContainer>
          <CurrentNews post={currentNews} />
          <PopularNews posts={popularNews} />
          <RelatedNews posts={relatedPosts} />
        </StyledContainer>
      </Section>
      <Subscribe />
    </PageLayout>
  );
};
