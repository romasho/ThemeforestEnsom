import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import { ContainerHeadline } from '../Service/styled';
import { BaseBlock } from '../Home/styled';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageLayout } from '@/layouts/Pages';
import { Section } from '@/layouts/Section';
import { theme } from '@/theme';
import { Headline } from '@/components/Headline';
import { Paragraph } from '@/components/Paragraph';
import { Container } from '@/layouts/Container';
import { Subscribe } from '@/components/Subscribe';
import { testimonialsData } from '@/components/Testimonials/data';

import { TeamContainer, ImageContainer, Link } from './styled';

export const OurTeam = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const numberCardsToRender = isMobile ? 8 : 9;
  const [employees, setEmployees] = useState<typeof testimonialsData>([]);
  const [currentCountEmployees, setCurrenCountEmployees] = useState(0);
  const loader = useRef(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setEmployees([
      ...employees,
      ...testimonialsData.slice(currentCountEmployees, currentCountEmployees + numberCardsToRender),
    ]);
  }, [currentCountEmployees]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 1.0,
    };

    observer.current = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.current.observe(loader.current);
    }
  }, []);

  const handleObserver = (entities: IntersectionObserverEntry[]) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setCurrenCountEmployees((prev) => prev + numberCardsToRender);
    }
  };

  const PageDescription = (
    <BaseBlock>
      <Paragraph size="p3" color={theme.colors.background}>
        Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque laudantium,
        totam remiga aperiam, eaque ipsa. Phasellus tristique eu nisl eu consectetur.
      </Paragraph>
      <Paragraph size="p3" color={theme.colors.background}>
        Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit,
        tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo
        libero.
      </Paragraph>
    </BaseBlock>
  );

  return (
    <PageLayout>
      <Section background="secondary">
        <ContainerHeadline>
          <Breadcrumbs color="white" />
          <Headline size={isMobile ? 'h3' : 'h1'} color="white">
            Our Team
          </Headline>
          {!isMobile && PageDescription}
        </ContainerHeadline>
      </Section>
      <Section background="light">
        <Container>
          {isMobile && PageDescription}
          <TeamContainer>
            {employees.map(({ avatar, name, position, id }) => (
              <Link to={name} key={id}>
                <ImageContainer img={avatar}>
                  <Headline size={isMobile ? 'h7' : 'h5'} color={theme.colors.white}>
                    {name}
                  </Headline>
                  <Paragraph size={isMobile ? 'p3' : 'p2'} color={theme.colors.white}>
                    {position}
                  </Paragraph>
                </ImageContainer>
              </Link>
            ))}
          </TeamContainer>
        </Container>
      </Section>
      <div ref={loader} />
      <Subscribe />
    </PageLayout>
  );
};

export default OurTeam;
