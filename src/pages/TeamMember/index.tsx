import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

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

import { ContactContainer, TeamMemberInfo, Block, Img, EmployeeSection } from './styled';

export const TeamMember = () => {
  const { userId } = useParams();
  const isMobile = useMediaQuery({ query: `(max-width: ${theme.breakPoints.mobile})` });

  const [currenMember] = testimonialsData.filter(({ name }) => name === userId);
  const { avatar, name, position, description, socials } = currenMember;
  const names = [
    { title: 'Name', data: name },
    { title: 'Position', data: position },
    { title: 'Description', data: description },
  ];

  return (
    <PageLayout>
      <Section background="dark">
        <CenterAlignContainer>
          <Headline size={isMobile ? 'h3' : 'h1'}>{userId}</Headline>
          <Breadcrumbs position="bottom" />
        </CenterAlignContainer>
      </Section>
      <EmployeeSection background="light">
        <Container>
          <Img src={avatar} />
          <TeamMemberInfo>
            {names.map(({ title, data }) => (
              <Block key={title}>
                <Headline size={isMobile ? 'h7' : 'h6'} color={theme.colors.primary}>
                  {title}
                </Headline>
                <Paragraph size={isMobile ? 'p3' : 'p1'}>{data}</Paragraph>
              </Block>
            ))}
            <Block>
              <Headline size={isMobile ? 'h7' : 'h6'} color={theme.colors.primary}>
                Social networks
              </Headline>
              <Socials socials={socials} />
            </Block>
          </TeamMemberInfo>
        </Container>
        <ContactContainer>
          <Headline size={isMobile ? 'h4' : 'h2'}>
            Want {name} to share his expertise with you?
          </Headline>
          <ContactForm />
        </ContactContainer>
      </EmployeeSection>
      <Subscribe />
    </PageLayout>
  );
};

export default TeamMember;
