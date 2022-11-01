import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useRef } from 'react';
import { NavigationOptions } from 'swiper/types';

import { BlogPost } from '../BlogPost';

import { ArrowControls } from '@/components/ArrowControls';
import { Headline } from '@/components/Headline';
import { Section } from '@/layouts/Section';
import { Container } from '@/layouts/Container';
import { SwiperWrapper } from '@/layouts';

import { PostsContainer } from './styled';
import 'swiper/css';
import { dataBlog } from './data';

SwiperCore.use([Navigation]);

export const Blog = () => {
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
          Our Blog
        </Headline>
        <ArrowControls left={navPrevButton} right={navNextButton} />
        <PostsContainer>
          <SwiperWrapper>
            <Swiper slidesPerView={3} onBeforeInit={onBeforeInit} spaceBetween={30}>
              {dataBlog.map(({ img, date, headline, description, id }) => (
                <SwiperSlide key={id}>
                  <BlogPost
                    variant="small"
                    img={img}
                    data={date}
                    headline={headline}
                    description={description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperWrapper>
        </PostsContainer>
      </Container>
    </Section>
  );
};
