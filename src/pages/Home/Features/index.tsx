import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

import { Button } from '../../../components/Button/styled';
import { Headline } from '../../../components/Headline';
import { Paragraph } from '../../../components/Paragraph';

import { HeadlineWrapper, BaseBlock } from '@/pages/Home/styled';
import { Section } from '@/layouts/Section';
import { Container } from '@/layouts/Container';
import img from '@/assets/img/02_img_10.png';
import { ROUTE_NAMES } from '@/constants';

import { BackgroundHalfSection } from './styled';

export const Features = memo(() => {
  const navigate = useNavigate();

  const navigateToSolutions = () => {
    navigate(ROUTE_NAMES.SOLUTIONS);
  };

  const navigateToServices = () => {
    navigate(ROUTE_NAMES.SOLUTIONS);
  };

  return (
    <>
      <Section background="light">
        <Container>
          <HeadlineWrapper>
            <Headline as="h1" size="h1">
              The <span>newest</span> business analytics platform
            </Headline>
          </HeadlineWrapper>
          <BaseBlock>
            <Paragraph size="p1">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </Paragraph>
            <Button variant="fill" onClick={navigateToServices}>
              Discover more
            </Button>
          </BaseBlock>
        </Container>
      </Section>
      <Section background="dark">
        <BackgroundHalfSection background="dark" img={img} />
        <BaseBlock>
          <Headline as="h2" size="h2">
            Radically new solutions for data
          </Headline>
          <Paragraph size="p1">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </Paragraph>
          <Button variant="fill" onClick={navigateToSolutions}>
            Learn more
          </Button>
        </BaseBlock>
      </Section>
    </>
  );
});
