import { PopularNewsContainer, TagsContainer } from '../styled';

import { Headline } from '@/components/Headline';
import { Tag } from '@/components/Tag';
import { dataBlog } from '@/pages/Home/Blog/data';

export const AllTags = () => {
  const allTags = [...new Set(dataBlog.map(({ tags }) => tags).flat())];

  return (
    <PopularNewsContainer>
      <Headline size="h4">Tags</Headline>
      <TagsContainer>
        {allTags.map((el, index) => (
          <Tag key={index}>{el}</Tag>
        ))}
      </TagsContainer>
    </PopularNewsContainer>
  );
};
