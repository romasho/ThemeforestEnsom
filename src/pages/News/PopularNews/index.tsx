import { FC } from 'react';

import { PostsProps } from '../types';
import { AllTags } from '../AllTags';
import { PopularNewsContainer } from '../styled';

import { Headline } from '@/components/Headline';
import { BlogPost } from '@/pages/Home/BlogPost';

export const PopularNews: FC<PostsProps> = ({ posts }) => {
  return (
    <PopularNewsContainer>
      <Headline size="h4">Popular posts</Headline>
      {posts.map(({ img, date, headline, id }) => (
        <BlogPost
          key={id}
          img={img}
          data={date}
          headline={headline}
          description={''}
          variant={'without_description'}
        />
      ))}
      <AllTags />
    </PopularNewsContainer>
  );
};
