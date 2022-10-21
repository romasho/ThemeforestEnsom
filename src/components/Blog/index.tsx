import { ArrowControls } from '../ArrowControls';
import { Headline } from '../Headline';

import { Section } from '@/layouts/Section';
import { Container } from '@/layouts/Container';

import { BlogPost } from './BlogPost';
import { PostsContainer } from './styled';

export const Blog = () => {
  return (
    <Section background="light">
      <Container>
        <Headline as="h2" size="h2">
          Our Blog
        </Headline>
        <ArrowControls />
        <PostsContainer>
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </PostsContainer>
      </Container>
    </Section>
  );
};
