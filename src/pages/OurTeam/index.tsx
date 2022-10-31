import { NavLink } from 'react-router-dom';

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

import { TeamContainer, X } from './styled';

export const OurTeam = () => {
  return (
    <PageLayout>
      <Section background="secondary">
        <ContainerHeadline>
          <Breadcrumbs color="white" />
          <Headline size="h1" color="white">
            Our Team
          </Headline>
          <BaseBlock>
            <Paragraph size="p3" color={theme.colors.background}>
              Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque
              laudantium, totam remiga aperiam, eaque ipsa. Phasellus tristique eu nisl eu
              consectetur.
            </Paragraph>
            <Paragraph size="p3" color={theme.colors.background}>
              Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit,
              tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id
              commodo libero.
            </Paragraph>
          </BaseBlock>
        </ContainerHeadline>
      </Section>
      <Section background="light">
        <Container>
          <TeamContainer>
            {testimonialsData.map(({ avatar, name, position, id }) => (
              <NavLink to={name} key={id}>
                <X img={avatar}>
                  <Headline size="h5" color={theme.colors.white}>
                    {name}
                  </Headline>
                  <Paragraph size="p2" color={theme.colors.white}>
                    {position}
                  </Paragraph>
                </X>
              </NavLink>
            ))}
          </TeamContainer>
        </Container>
      </Section>
      <Subscribe />
    </PageLayout>
  );
};
