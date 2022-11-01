import { useParams } from 'react-router-dom';

import { PageLayout } from '@/layouts/Pages';
import { Section } from '@/layouts/Section';
import { Subscribe } from '@/components/Subscribe';
import { CenterAlignContainer } from '@/layouts/Container';
import { Headline } from '@/components/Headline';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { useAppSelector } from '@/hooks/redux';

import { StyledContainer } from './styled';
import { CurrentNews } from './CurrentNews';
import { PopularNews } from './PopularNews';
import { RelatedNews } from './RelatedNews';

export const News = () => {
  const { data } = useAppSelector((state) => state.blogSlice);
  const { userId } = useParams();

  const [currentNews] = data.filter((el) => el.headline === userId);

  const popularNews = data.sort((a, b) => b.views - a.views).slice(0, 4);

  const { tags } = currentNews;
  const relatedPosts = data
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
