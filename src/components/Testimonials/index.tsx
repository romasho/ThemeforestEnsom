import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useRef, memo } from 'react';
import { NavigationOptions } from 'swiper/types';
import { useMediaQuery } from 'react-responsive';

import { ControlArrows } from '@/components/ControlArrows';
import { Headline } from '@/components/Headline';
import { TestimonialCard } from '@/components/TestimonialsCard';
import { Section } from '@/layouts/Section';
import { Container } from '@/layouts/Container';
import { SwiperWrapper } from '@/layouts';

import { testimonialsData } from './data';
import { TestimonialsWrapper } from './styled';

import 'swiper/css';

SwiperCore.use([Navigation]);

const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1130: {
    slidesPerView: 3,
  },
};

export const Testimonials = memo(() => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const navPrevButton = useRef<HTMLButtonElement>(null);
  const navNextButton = useRef<HTMLButtonElement>(null);

  const onBeforeInit = (Swiper: SwiperCore): void => {
    if (typeof Swiper.params.navigation !== 'boolean') {
      const navigation = Swiper.params.navigation as NavigationOptions;
      navigation.prevEl = navPrevButton.current;
      navigation.nextEl = navNextButton.current;
    }
  };

  return (
    <Section background="light">
      <Container>
        <Headline as="h2" size={isMobile ? 'h3' : 'h2'}>
          Testimonials
        </Headline>
        <ControlArrows left={navPrevButton} right={navNextButton} />
        <TestimonialsWrapper>
          <SwiperWrapper>
            <Swiper onBeforeInit={onBeforeInit} breakpoints={breakpoints}>
              {testimonialsData.map(({ avatar, name, position, description, id }) => (
                <SwiperSlide key={id}>
                  <TestimonialCard
                    avatar={avatar}
                    name={name}
                    position={position}
                    description={description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperWrapper>
        </TestimonialsWrapper>
      </Container>
    </Section>
  );
});
