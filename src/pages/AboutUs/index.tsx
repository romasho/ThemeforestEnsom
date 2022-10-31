import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BaseBlock, BaseBlockRow, BaseBlockWidth } from '../Home/styled';

import { DescriptionPage } from '@/components/DescriptionPage';
import { PageLayout } from '@/layouts/Pages';
import { Section } from '@/layouts/Section';
import { Contacts } from '@/components/Contacts';
import { Subscribe } from '@/components/Subscribe';
import img from '@/assets/img/02_img_10.png';
import { data, logos } from '@/components/CompanyOverview/data';
import { CenterAlignContainer } from '@/layouts/Container';
import { Headline } from '@/components/Headline';
import { CompanyNumbers } from '@/components/CompanyNumbers';
import { Paragraph } from '@/components/Paragraph';
import { Card } from '@/layouts/Card';
import { servicesData } from '@/pages/Services/ServicesSection/data';
import { ROUTE_NAMES } from '@/constants';
import { SwiperWrapper } from '@/layouts';

import { BackgroundSection, Link, ImgWrapper } from './styled';
import { Testimonials } from './Testimonials';

export const AboutUs = () => {
  const obj = useLocation();

  return (
    <PageLayout>
      <Section background="light">
        <DescriptionPage
          page={'About Us'}
          headline={'We work with 15 years of experience'}
          description={
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore.'
          }
        />
      </Section>
      <BackgroundSection background="dark" img={img} />
      <Section background="dark">
        <CenterAlignContainer>
          <Headline as="h2" size="h2">
            We provide services that guarantee your success
          </Headline>
          <BaseBlockRow>
            {data.map(({ description, number }) => (
              <CompanyNumbers number={number} description={description} key={description} />
            ))}
          </BaseBlockRow>
          <BaseBlock>
            <Paragraph size="p1">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt
              tempor quam, non mollis quam finibus nec.
            </Paragraph>
          </BaseBlock>
        </CenterAlignContainer>
      </Section>
      <Section background="light">
        <CenterAlignContainer>
          <BaseBlockWidth>
            <Headline size="h2">Why people chosse Ensome?</Headline>
            <Paragraph size="p1">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore.
            </Paragraph>
          </BaseBlockWidth>
          <SwiperWrapper>
            <Swiper slidesPerView={3} spaceBetween={30}>
              {servicesData.map(({ icon, headline, description, id }) => (
                <SwiperSlide key={id}>
                  <Link to={ROUTE_NAMES.SERVICE + headline}>
                    <Card
                      variant="center_text"
                      icon={icon}
                      headline={headline}
                      description={description}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperWrapper>
        </CenterAlignContainer>
        <Testimonials />
        <ImgWrapper>
          {logos.map((img, index) => (
            <img src={img} key={index} alt={'' + index} />
          ))}
        </ImgWrapper>
      </Section>
      <Contacts />
      <Subscribe />
    </PageLayout>
  );
};
