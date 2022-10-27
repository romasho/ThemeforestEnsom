import { useParams } from 'react-router-dom';

import { PageLayout } from '@/layouts/Pages';
import { Section } from '@/layouts/Section';
import { Subscribe } from '@/components/Subscribe';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Headline } from '@/components/Headline';
import { Paragraph } from '@/components/Paragraph';
import { theme } from '@/theme';
import { servicesData } from '@/components/ServicesSection/data';

import { ContainerHeadline } from './styled';
import { ServiceSection } from './ServiceSection';
import { ServiceContacts } from './ServiceContacts';

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
      <ServiceSection serviceInformation={serviceInformation} userId={userId} />
      <ServiceContacts />
      <Subscribe />
    </PageLayout>
  );
};
