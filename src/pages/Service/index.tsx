import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { PageLayout } from '@/layouts/Pages';
import { Section } from '@/layouts/Section';
import { Subscribe } from '@/components/Subscribe';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Headline } from '@/components/Headline';
import { Paragraph } from '@/components/Paragraph';
import { theme } from '@/theme';
import { servicesData } from '@/pages/Services/ServicesSection/data';

import { ContainerHeadline } from './styled';
import { ServiceSection } from './ServiceSection';
import { ServiceContacts } from './ServiceContacts';

export const Service = () => {
  const { userId } = useParams();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const [currentService] = servicesData.filter(({ headline }) => headline === userId);
  const { serviceInformation } = currentService;

  return (
    <PageLayout>
      <Section background="dark">
        <ContainerHeadline>
          <Breadcrumbs />
          <Headline size={isDesktopOrLaptop ? 'h3' : 'h1'}>{userId}</Headline>
          {!isDesktopOrLaptop && (
            <div style={{ width: '350px' }}>
              <Paragraph size="p3" color={theme.colors.grey}>
                {currentService.description}
              </Paragraph>
            </div>
          )}
        </ContainerHeadline>
      </Section>
      <ServiceSection serviceInformation={serviceInformation} userId={userId} />
      <ServiceContacts />
      <Subscribe />
    </PageLayout>
  );
};
