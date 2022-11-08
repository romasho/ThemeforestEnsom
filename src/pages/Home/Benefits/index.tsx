import { memo } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Headline } from '@/components/Headline';
import { Paragraph } from '@/components/Paragraph';
import { BaseBlock } from '@/pages/Home/styled';
import { Section } from '@/layouts/Section';
import { Container } from '@/layouts/Container';
import { Card } from '@/layouts/Card';
import { theme } from '@/theme';

import { benefitsData } from './data';
import { CardContainer, StyledContainer } from './styled';

export const Benefits = memo(() => {
  const isMobile = useMediaQuery({ query: `(max-width: ${theme.breakPoints.mobile})` });

  return (
    <Section background="dark">
      <Container>
        <BaseBlock>
          <Headline as="h2" size={isMobile ? 'h3' : 'h2'}>
            The benefits of Ensome{' '}
          </Headline>
          <Paragraph size={isMobile ? 'p3' : 'p1'}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </Paragraph>
        </BaseBlock>
        <StyledContainer>
          <CardContainer>
            {benefitsData.map(({ icon, headline, description }) => (
              <Card
                variant="small_card"
                icon={icon}
                headline={headline}
                description={description}
                key={headline}
              />
            ))}
          </CardContainer>
        </StyledContainer>
      </Container>
    </Section>
  );
});
