import { FC } from 'react';

import { Link, ServiceSidebar } from '../styled';

import { Headline } from '@/components/Headline';
import { Icon } from '@/components/Icon';
import { ServiceDescription } from '@/components/ServiceDescription';
import { Section } from '@/layouts/Section';
import { ReactComponent as arrow } from '@/assets/svg/icon_chevron_right.svg';
import { servicesData } from '@/components/ServicesSection/data';
import { Container } from '@/pages/Solution/SolutionSection/styled';

interface ServiceSectionProps {
  serviceInformation: { headline: string; paragraph: string; img?: string; marks?: string[] }[];
  userId: string | undefined;
}

export const ServiceSection: FC<ServiceSectionProps> = ({ serviceInformation, userId }) => {
  return (
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
  );
};
