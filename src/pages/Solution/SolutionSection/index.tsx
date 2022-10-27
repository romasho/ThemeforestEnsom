import { FC } from 'react';

import { SolutionDescription } from '@/components/SolutionDescription';
import { SolutionSidebar } from '@/components/SolutionSidebar';
import { Section } from '@/layouts/Section';

import { Container } from './styled';

interface SolutionSectionProps {
  solutionDescription: { headline: string; paragraph: string[]; types?: string[]; img?: string }[];
}

export const SolutionSection: FC<SolutionSectionProps> = ({ solutionDescription }) => {
  return (
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
  );
};
