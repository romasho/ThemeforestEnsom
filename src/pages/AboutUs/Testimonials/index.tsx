import { useRef } from 'react';
import { NavigationOptions } from 'swiper/types';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';

import { HeadlineWrapper, ControlsWrapper } from '../styled';

import { ControlArrows } from '@/components/ControlArrows';
import { Headline } from '@/components/Headline';
import { WithoutPaddingContainer } from '@/layouts/Container';
import { testimonialsData } from '@/components/Testimonials/data';
import { TestimonialCard } from '@/components/TestimonialsCard';
import { SwiperWrapper } from '@/layouts';
import { Paragraph } from '@/components/Paragraph';
import { BaseBlock } from '@/pages/Home/styled';

SwiperCore.use([Navigation]);

const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
};

export const Testimonials = () => {
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

  const arrow = <ControlArrows left={navPrevButton} right={navNextButton} />;

  return (
    <WithoutPaddingContainer>
      <HeadlineWrapper>
        <Headline as="h2" size={isMobile ? 'h3' : 'h2'}>
          Testimonials
        </Headline>
        {isMobile && arrow}
      </HeadlineWrapper>
      <ControlsWrapper>
        <BaseBlock>
          <Paragraph size={isMobile ? 'p3' : 'p1'}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium.
          </Paragraph>
        </BaseBlock>
        {!isMobile && arrow}
      </ControlsWrapper>
      <SwiperWrapper>
        <Swiper breakpoints={breakpoints} onBeforeInit={onBeforeInit}>
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
