import { useParams } from 'react-router-dom';

import { Container } from '@/pages/Solution/styled';
import { PageLayout } from '@/layouts/Pages';
import { Section } from '@/layouts/Section';
import { Subscribe } from '@/components/Subscribe';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Headline } from '@/components/Headline';
import { ContactForm } from '@/components/ContactForm';
import { ContactCards } from '@/components/ContactCards';
import { servicesData } from '@/components/ServicesSection/data';
import { Paragraph } from '@/components/Paragraph';
import { ServiceDescription } from '@/components/ServiceDescription';
import { theme } from '@/theme';
import { Icon } from '@/components/Icon';
import { ReactComponent as arrow } from '@/assets/svg/icon_chevron_right.svg';

import { ContainerHeadline, Link, ServiceSidebar, Box } from './styled';

export const Service = () => {
  const { userId } = useParams();

  const [currentService] = servicesData.filter(({ headline }) => headline === userId);
  const { serviceInformation } = currentService;

  return (
    <PageLayout>
      <Section background="dark">
        <ContainerHeadline>
          <Breadcrumbs />
          <Headline size="h1">{userId}</Headline>
          <div style={{ width: '350px' }}>
            <Paragraph size="p3" color={theme.colors.grey}>
              {currentService.description}
            </Paragraph>
          </div>
        </ContainerHeadline>
      </Section>
      <Section background="light">
        <Container>
          <div>
            {serviceInformation.map(({ headline, paragraph, img, marks }, index) => (
              <ServiceDescription
                key={index}
                headline={headline}
                paragraph={paragraph}
                img={img}
                marks={marks}
              />
            ))}
          </div>
          <ServiceSidebar>
            <Headline size="h4">Services</Headline>
            <div>
              {servicesData
                .filter(({ headline }) => headline !== userId)
                .map(({ headline, id }) => (
                  <Link href={headline} key={id}>
                    {headline}
                    <Icon icon={arrow} />
                  </Link>
                ))}
            </div>
          </ServiceSidebar>
        </Container>
      </Section>
      <Section background="dark">
        <Container>
          <Box>
            <Headline size="h2">Contact information</Headline>
            <Paragraph size="p2" color={theme.colors.grey}>
              Fill up the form and our Team will get back to you with 25 hours.
            </Paragraph>
            <ContactCards direction="row" iconColor={theme.colors.primary} />
          </Box>
          <ContactForm />
        </Container>
      </Section>
      <Subscribe />
    </PageLayout>
  );
};
