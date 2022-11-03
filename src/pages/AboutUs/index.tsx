import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';

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

import { BackgroundSection, Link, ImgWrapper, WrapSection } from './styled';
import { Testimonials } from './Testimonials';

const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 3,
  },
};

export const AboutUs = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 768px)',
  });

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
          <Headline as="h2" size={isDesktopOrLaptop ? 'h3' : 'h2'}>
            We provide services that guarantee your success
          </Headline>
          <BaseBlockRow>
            {data.map(({ description, number }) => (
              <CompanyNumbers number={number} description={description} key={description} />
            ))}
          </BaseBlockRow>
          <BaseBlock>
            <Paragraph size={isDesktopOrLaptop ? 'p3' : 'p2'}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt
              tempor quam, non mollis quam finibus nec.
            </Paragraph>
          </BaseBlock>
        </CenterAlignContainer>
      </Section>
      <WrapSection background="light">
        <CenterAlignContainer>
          <BaseBlockWidth>
            <Headline size={isDesktopOrLaptop ? 'h3' : 'h2'}>Why people chosse Ensome?</Headline>
            <Paragraph size={isDesktopOrLaptop ? 'p3' : 'p2'}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore.
            </Paragraph>
          </BaseBlockWidth>
          <SwiperWrapper>
            <Swiper slidesPerView={3} spaceBetween={30} breakpoints={breakpoints}>
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
      </WrapSection>
      <Contacts />
      <Subscribe />
    </PageLayout>
  );
};
