import { Card } from '../Cards';
import { Headline } from '../Headline';
import { Paragraph } from '../Paragraph';

import { InfoBlock } from '@/pages/Home/styled';
import { Section } from '@/layouts/Section';
import { Container } from '@/layouts/Container';

import { benefitsData } from './data';
import { CardContainer } from './styled';

export const Benefits = () => {
  return (
    <Section background="dark">
      <Container>
        <InfoBlock>
          <Headline as="h2" size="h2">
            The benefits of Ensome{' '}
          </Headline>
          <Paragraph size="p1">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </Paragraph>
        </InfoBlock>
        <CardContainer>
          {benefitsData.map(({ icon, headline, description }) => (
            <Card icon={icon} headline={headline} description={description} key={headline} />
          ))}
        </CardContainer>
      </Container>
    </Section>
  );
};
