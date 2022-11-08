import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { PageLayout } from '@/layouts/Pages';
import { Section } from '@/layouts/Section';
import { Subscribe } from '@/components/Subscribe';
import { Contacts } from '@/components/Contacts';
import { CenterAlignContainer } from '@/layouts/Container';
import { Headline } from '@/components/Headline';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DataAnalyticsSolutions } from '@/pages/Solutions/SolutionsCards/data';
import { theme } from '@/theme';

import { SolutionSection } from './SolutionSection';

export const Solution = () => {
  const { userId } = useParams();
  const isMobile = useMediaQuery({ query: `(max-width: ${theme.breakPoints.mobile})` });

  const [currentSolution] = DataAnalyticsSolutions.filter((el) => el.title === userId);
  const { solutionDescription } = currentSolution;

  return (
    <PageLayout>
      <Section background="dark">
        <CenterAlignContainer>
          <Headline size={isMobile ? 'h3' : 'h1'}>{userId}</Headline>
          <Breadcrumbs position="bottom" />
        </CenterAlignContainer>
      </Section>
      <SolutionSection solutionDescription={solutionDescription} />
      <Contacts />
      <Subscribe />
    </PageLayout>
  );
};

export default Solution;
