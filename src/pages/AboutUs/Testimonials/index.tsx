import { useRef } from 'react';
import { NavigationOptions } from 'swiper/types';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { HeadlineWrapper, ControlsWrapper } from '../styled';

import { ArrowControls } from '@/components/ArrowControls';
import { Headline } from '@/components/Headline';
import { WithoutPaddingContainer } from '@/layouts/Container';
import { testimonialsData } from '@/components/Testimonials/data';
import { TestimonialCard } from '@/components/TestimonialsCard';
import { SwiperWrapper } from '@/layouts';
import { Paragraph } from '@/components/Paragraph';
import { BaseBlock } from '@/pages/Home/styled';

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
    <WithoutPaddingContainer>
      <HeadlineWrapper>
        <Headline as="h2" size="h2">
          Testimonials
        </Headline>
      </HeadlineWrapper>
      <ControlsWrapper>
        <BaseBlock>
          <Paragraph size="p1">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium.
          </Paragraph>
        </BaseBlock>
        <ArrowControls left={navPrevButton} right={navNextButton} />
      </ControlsWrapper>
      <SwiperWrapper>
        <Swiper slidesPerView={2} onBeforeInit={onBeforeInit}>
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
      </SwiperWrapper>
    </WithoutPaddingContainer>
  );
};
