import { FC } from 'react';

import { Headline } from '@/components/Headline';
import { Link } from '@/components/Link';
import { Paragraph } from '@/components/Paragraph';
import { Tag } from '@/components/Tag';
import { ROUTE_NAMES } from '@/constants';

import { BlogInfo, PostContainer, TagContainer } from './styled';
import { BlogPostType } from './types';

export const BlogPost: FC<BlogPostType> = ({ img, data, headline, description, variant, tags }) => {
  return (
    <PostContainer variant={variant}>
      <img src={img} alt="blog_img" />
      <BlogInfo variant={variant}>
        <Paragraph size="p3">{data}</Paragraph>
        <Headline size={variant === ('big' || 'medium' || 'small') ? 'h4' : 'h6'}>
          {headline}
        </Headline>
        {variant !== 'without_description' && <Paragraph size="p2">{description}</Paragraph>}
        {!tags && variant !== 'right_text' && <Link to={ROUTE_NAMES.BLOG + '/' + headline} />}
        {tags && (
          <TagContainer>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagContainer>
        )}
      </BlogInfo>
    </PostContainer>
  );
};
