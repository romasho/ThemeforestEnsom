import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useRef } from 'react';
import { NavigationOptions } from 'swiper/types';
import { useMediaQuery } from 'react-responsive';
import { memo } from 'react';

import { BlogPost } from '../BlogPost';

import { ArrowControls } from '@/components/ArrowControls';
import { Headline } from '@/components/Headline';
import { Section } from '@/layouts/Section';
import { Container } from '@/layouts/Container';
import { SwiperWrapper } from '@/layouts';
import { useAppSelector } from '@/hooks/redux';
import { Buttons } from '@/components/Button';

import { PostsContainer } from './styled';
import 'swiper/css';

SwiperCore.use([Navigation]);

const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 3,
  },
};

export const Blog = memo(() => {
  const { data } = useAppSelector((state) => state.blogSlice);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 768px)',
  });
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
        <Headline as="h2" size={isDesktopOrLaptop ? 'h3' : 'h2'}>
          Our Blog
        </Headline>
        {!isDesktopOrLaptop && <ArrowControls left={navPrevButton} right={navNextButton} />}
        <PostsContainer>
          {!isDesktopOrLaptop && (
            <SwiperWrapper>
              <Swiper breakpoints={breakpoints} onBeforeInit={onBeforeInit} spaceBetween={30}>
                {data.map(({ img, date, headline, description, id }) => (
                  <SwiperSlide key={id}>
                    <BlogPost
                      variant={isDesktopOrLaptop ? 'without_description' : 'small'}
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
          {isDesktopOrLaptop &&
            data
              .slice(0, 3)
              .map(({ img, date, headline, description, id }) => (
                <BlogPost
                  key={id}
                  variant={isDesktopOrLaptop ? 'without_description' : 'small'}
                  img={img}
                  data={date}
                  headline={headline}
                  description={description}
                />
              ))}
          {isDesktopOrLaptop && <Buttons variant="fill">Learn more</Buttons>}
        </PostsContainer>
      </Container>
    </Section>
  );
});
