import { FC, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { SolutionDescriptionContainer } from '../SolutionDescription/styled';

import { SolutionDescription } from '@/pages/Solution/SolutionDescription';
import { SolutionSidebar } from '@/pages/Solution/SolutionSidebar';
import { Section } from '@/layouts/Section';

import { Container, SolutionDescriptionWrapper } from './styled';
import { SolutionSectionProps } from './types';

export const SolutionSection: FC<SolutionSectionProps> = ({ solutionDescription }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const observer = useRef<IntersectionObserver | null>(null);
  const itemEls = useRef<HTMLElement[]>([]);
  const [active, setActive] = useState('');

  const handleClick = (headline: string) => () => setActive(headline);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        setActive(entry.target.id);
      }
    });
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(handleObserver, { threshold: [0.5, 1] });
    if (itemEls.current) {
      itemEls.current.forEach((element) => observer.current?.observe(element));
    }
  }, []);

  return (
    <Section background="light">
      <Container>
        {!isMobile && <SolutionSidebar data={solutionDescription} active={active} />}
        <SolutionDescriptionWrapper>
          {solutionDescription.map(({ headline, paragraph, img, types }, index) => (
            <SolutionDescriptionContainer
              id={headline}
              key={index}
              ref={(element) => itemEls.current.push(element as HTMLElement)}
              onClick={handleClick(headline)}
            >
              <SolutionDescription
                key={index}
                headline={headline}
                paragraph={paragraph}
                img={img}
                types={types}
              />
            </SolutionDescriptionContainer>
          ))}
        </SolutionDescriptionWrapper>
      </Container>
    </Section>
  );
};
