import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { PageLayout } from '@/layouts/Pages';
import { Section } from '@/layouts/Section';
import { Subscribe } from '@/components/Subscribe';
import { CenterAlignContainer } from '@/layouts/Container';
import { Headline } from '@/components/Headline';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { useAppSelector } from '@/hooks/redux';
import { theme } from '@/theme';

import { StyledContainer } from './styled';
import { CurrentNews } from './CurrentNews';
import { PopularNews } from './PopularNews';
import { RelatedNews } from './RelatedNews';
import { AllTags } from './AllTags';

export const News = () => {
  const isMobile = useMediaQuery({ query: `(max-width: ${theme.breakPoints.mobile})` });

  const { data } = useAppSelector((state) => state.blogSlice);
  const { userId } = useParams();

  const [currentNews] = data.filter((el) => el.headline === userId);

  const { tags } = currentNews;
  const relatedPosts = data
    .filter((elem) => tags.reduce((acc, el) => (elem.tags.includes(el) ? true : acc), false))
    .slice(0, 3);

  return (
    <PageLayout>
      <Section background="dark">
        <CenterAlignContainer>
          <Headline size={isMobile ? 'h3' : 'h1'}>{userId}</Headline>
          <Breadcrumbs position="bottom" />
        </CenterAlignContainer>
      </Section>
      <Section background="light">
        <StyledContainer>
          <CurrentNews post={currentNews} />
          {!isMobile && <PopularNews />}
          <RelatedNews posts={relatedPosts} />
          {isMobile && <AllTags />}
        </StyledContainer>
      </Section>
      <Subscribe />
    </PageLayout>
  );
};

export default News;
