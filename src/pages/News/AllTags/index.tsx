import { useMediaQuery } from 'react-responsive';

import { TagsSection, TagsContainer } from '../styled';

import { Headline } from '@/components/Headline';
import { Tag } from '@/components/Tag';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { disableAll, toggleActive } from '@/store/reducers/blogSlice';

export const AllTags = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 768px)',
  });
  const { filterPosts } = useAppSelector((state) => state.blogSlice);
  const dispatch = useAppDispatch();

  const clickHandler = (el: string) => () => {
    dispatch(toggleActive(el));
  };

  const disableAllHandle = () => {
    dispatch(disableAll());
  };

  return (
    <TagsSection>
      {!isDesktopOrLaptop && <Headline size="h4">Tags</Headline>}
      <TagsContainer>
        <Tag
          isActive={filterPosts.filter(({ isActive }) => isActive).length > 0 ? false : true}
          onClick={disableAllHandle}
        >
          All topics
        </Tag>
        {filterPosts.map(({ tag, isActive }, index) => (
          <Tag key={index} isActive={isActive} onClick={clickHandler(tag)}>
            {tag}
          </Tag>
        ))}
      </TagsContainer>
    </TagsSection>
  );
};
