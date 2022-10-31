import { useParams } from 'react-router-dom';

import { PageLayout } from '@/layouts/Pages';
import { Section } from '@/layouts/Section';
import { Subscribe } from '@/components/Subscribe';
import { CenterAlignContainer, Container } from '@/layouts/Container';
import { Headline } from '@/components/Headline';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { testimonialsData } from '@/components/Testimonials/data';
import { ContactForm } from '@/components/ContactForm';
import { Paragraph } from '@/components/Paragraph';
import { theme } from '@/theme';
import { Socials } from '@/components/Socials';

import { ContactContainer, TeamMemberInfo, Block } from './styled';

export const TeamMember = () => {
  const { userId } = useParams();

  const [currenMember] = testimonialsData.filter(({ name }) => name === userId);
  const { avatar, name, position, description, socials } = currenMember;

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
          <img src={avatar} />
          <TeamMemberInfo>
            <Block>
              <Headline size="h6" color={theme.colors.primary}>
                Name
              </Headline>
              <Paragraph size="p1">{name}</Paragraph>
            </Block>
            <Block>
              <Headline size="h6" color={theme.colors.primary}>
                Position
              </Headline>
              <Paragraph size="p1">{position}</Paragraph>
            </Block>
            <Block>
              <Headline size="h6" color={theme.colors.primary}>
                Description
              </Headline>
              <Paragraph size="p1">{description}</Paragraph>
            </Block>
            <Block>
              <Headline size="h6" color={theme.colors.primary}>
                Social networks
              </Headline>
              <Socials socials={socials} />
            </Block>
          </TeamMemberInfo>
        </Container>
        <ContactContainer>
          <Headline size="h2">Want {name} to share his expertise with you?</Headline>
          <ContactForm />
        </ContactContainer>
      </Section>
      <Subscribe />
    </PageLayout>
  );
};
