import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useRef } from 'react';
import { NavigationOptions } from 'swiper/types';
import { useMediaQuery } from 'react-responsive';
import { memo } from 'react';

import { BlogPost } from '../BlogPost';

import { ControlArrows } from '@/components/ControlArrows';
import { Headline } from '@/components/Headline';
import { Section } from '@/layouts/Section';
import { Container } from '@/layouts/Container';
import { SwiperWrapper } from '@/layouts';
import { useAppSelector } from '@/hooks/redux';
import { Buttons } from '@/components/Button';
import { theme } from '@/theme';

import { PostsContainer } from './styled';
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

export const Blog = memo(() => {
  const { data } = useAppSelector((state) => state.blogSlice);
  const isMobile = useMediaQuery({ query: `(max-width: ${theme.breakPoints.mobile})` });

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
          Our Blog
        </Headline>
        {!isMobile && <ControlArrows left={navPrevButton} right={navNextButton} />}
        <PostsContainer>
          {!isMobile && (
            <SwiperWrapper>
              <Swiper breakpoints={breakpoints} onBeforeInit={onBeforeInit} spaceBetween={30}>
                {data.map(({ img, date, headline, description, id }) => (
                  <SwiperSlide key={id}>
                    <BlogPost
                      variant={isMobile ? 'without_description' : 'small'}
                      img={img}
                      data={date}
                      headline={headline}
                      description={description}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </SwiperWrapper>
          )}
          {isMobile &&
            data
              .slice(0, 3)
              .map(({ img, date, headline, description, id }) => (
                <BlogPost
                  key={id}
                  variant={isMobile ? 'without_description' : 'small'}
                  img={img}
                  data={date}
                  headline={headline}
                  description={description}
                />
              ))}
        </PostsContainer>
        {isMobile && <Buttons variant="fill">Learn more</Buttons>}
      </Container>
    </Section>
  );
});
