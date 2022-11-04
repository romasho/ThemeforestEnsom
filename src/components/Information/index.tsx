import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { Headline } from '../Headline';
import { Paragraph } from '../Paragraph';

import { Section } from '@/layouts/Section';
import { Container } from '@/layouts/Container';
import { HeadlineWrapper } from '@/pages/Home/styled';
import { theme } from '@/theme';
import { ROUTE_NAMES } from '@/constants';
import img from '@/assets/img/img_11.png';

import { DescriptionWrapper, PositionedButton, BackgroundSection } from './styled';

export const Information = memo(() => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const navigate = useNavigate();

  const navigateToServices = () => {
    navigate(ROUTE_NAMES.SOLUTIONS);
  };

  return (
    <>
      <Section background="light">
        <Container>
          <HeadlineWrapper>
            <Headline as="h1" size={isMobile ? 'h3' : 'h1'}>
              Find true power in your data with <span>Ensome</span>
            </Headline>
          </HeadlineWrapper>
          <DescriptionWrapper>
            <Paragraph size={isMobile ? 'p3' : 'p2'} color={theme.colors.grey}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              lauda, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
            </Paragraph>
            <PositionedButton variant="circle" onClick={navigateToServices}>
              Learn more
            </PositionedButton>
          </DescriptionWrapper>
        </Container>
      </Section>
      <BackgroundSection background="dark" img={img} />
    </>
  );
});
