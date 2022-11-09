import { AllTags } from '../AllTags';
import { PopularNewsContainer } from '../styled';

import { Headline } from '@/components/Headline';
import { BlogPost } from '@/pages/Home/BlogPost';
import { useAppSelector } from '@/hooks/redux';

export const PopularNews = () => {
  const { data } = useAppSelector((state) => state.blogSlice);
  const popularNews = data
    .slice()
    .sort((a, b) => a.views - b.views)
    .slice(0, 4);

  return (
    <PopularNewsContainer>
      <Headline size="h4">Popular posts</Headline>
      {popularNews.map(({ img, date, headline, id }) => (
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
