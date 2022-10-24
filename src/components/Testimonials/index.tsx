import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useRef } from 'react';
import { NavigationOptions } from 'swiper/types';

import { ArrowControls } from '../ArrowControls';
import { Headline } from '../Headline';
import { TestimonialCard } from '../TestimonialsCard';

import { Section } from '@/layouts/Section';
import { Container } from '@/layouts/Container';

import { testimonialsData } from './data';
import { TestimonialsWrapper } from './styled';

import 'swiper/css';

SwiperCore.use([Navigation]);

export const Testimonials = () => {
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
        <Headline as="h2" size="h2">
          Testimonials
        </Headline>
        <ArrowControls left={navPrevButton} right={navNextButton} />
        <TestimonialsWrapper>
          <Swiper slidesPerView={3} onBeforeInit={onBeforeInit}>
            {testimonialsData.map(({ avatar, name, position, description }) => (
              <SwiperSlide key={name}>
                <TestimonialCard
                  avatar={avatar}
                  name={name}
                  position={position}
                  description={description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </TestimonialsWrapper>
      </Container>
    </Section>
  );
};
