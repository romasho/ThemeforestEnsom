import { useParams } from 'react-router-dom';

import { PageLayout } from '@/layouts/Pages';
import { Section } from '@/layouts/Section';
import { Subscribe } from '@/components/Subscribe';
import { Contacts } from '@/components/Contacts';
import { CenterAlignContainer } from '@/layouts/Container';
import { Headline } from '@/components/Headline';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DataAnalyticsSolutions } from '@/components/SolutionsCards/data';
import { SolutionDescription } from '@/components/SolutionDescription';
import { SolutionSidebar } from '@/components/SolutionSidebar';

import { Container } from './styled';

export const Solution = () => {
  const { userId } = useParams();

  const [currentSolution] = DataAnalyticsSolutions.filter((el) => el.title === userId);
  const { solutionDescription } = currentSolution;

  return (
    <PageLayout>
      <Section background="dark">
        <CenterAlignContainer>
          <Headline size="h1">{userId}</Headline>
          <Breadcrumbs position="bottom" />
        </CenterAlignContainer>
      </Section>
      <Section background="light">
        <Container>
          <SolutionSidebar data={solutionDescription} />
          <div>
            {solutionDescription.map(({ headline, paragraph, img, types }, index) => (
              <SolutionDescription
                key={index}
                headline={headline}
                paragraph={paragraph}
                img={img}
                types={types}
              />
            ))}
          </div>
        </Container>
      </Section>
      <Contacts />
      <Subscribe />
    </PageLayout>
  );
};
