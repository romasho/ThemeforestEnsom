import { useNavigate } from 'react-router-dom';

import { Button } from '../Button/styled';
import { Headline } from '../Headline';
import { Paragraph } from '../Paragraph';

import { HeadlineWrapper, InfoBlock } from '@/pages/Home/styled';
import { Section } from '@/layouts/Section';
import { Container } from '@/layouts/Container';
import img from '@/assets/img/02_img_10.png';

import { BackgroundHalfSection } from './styled';

export const Features = () => {
  const navigate = useNavigate();

  const navigateToSolutions = () => {
    navigate('/solutions');
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
          <InfoBlock>
            <Paragraph size="p1">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </Paragraph>
            <Button variant="fill">Discover more</Button>
          </InfoBlock>
        </Container>
      </Section>
      <Section background="dark">
        <BackgroundHalfSection background="dark" img={img} />
        <InfoBlock>
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
        </InfoBlock>
      </Section>
    </>
  );
};
