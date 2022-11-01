import { memo } from 'react';

import { Headline } from '@/components/Headline';
import { Paragraph } from '@/components/Paragraph';
import { BaseBlock } from '@/pages/Home/styled';
import { Section } from '@/layouts/Section';
import { Container } from '@/layouts/Container';
import { Card } from '@/layouts/Card';

import { benefitsData } from './data';
import { CardContainer } from './styled';

export const Benefits = memo(() => {
  return (
    <Section background="dark">
      <Container>
        <BaseBlock>
          <Headline as="h2" size="h2">
            The benefits of Ensome{' '}
          </Headline>
          <Paragraph size="p1">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </Paragraph>
        </BaseBlock>
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
      </Container>
    </Section>
  );
});
