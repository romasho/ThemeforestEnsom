import { FC } from 'react';

import { NewsContainer } from '../styled';
import { PostsProps } from '../types';

import { Headline } from '@/components/Headline';
import { BlogPost } from '@/pages/Home/BlogPost';

export const RelatedNews: FC<PostsProps> = ({ posts }) => {
  return (
    <NewsContainer>
      <Headline size="h3">Related Post</Headline>
      {posts.map(({ img, date, headline, description, id }) => (
        <BlogPost
          key={id}
          img={img}
          data={date}
          headline={headline}
          description={description}
          tags={undefined}
          variant={'right_text'}
        />
      ))}
    </NewsContainer>
  );
};
