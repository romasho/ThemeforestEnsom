import { FC } from 'react';

import { Headline } from '@/components/Headline';
import { Link } from '@/components/Link';
import { Paragraph } from '@/components/Paragraph';
import { Tag } from '@/components/Tag';

import { BlogInfo, PostContainer, TagContainer } from './styled';
import { BlogPostType } from './types';

export const BlogPost: FC<BlogPostType> = ({ img, data, headline, description, variant, tags }) => {
  return (
    <PostContainer variant={variant}>
      <img src={img} alt="blog_img" />
      <BlogInfo variant={variant}>
        <Paragraph size="p3">{data}</Paragraph>
        <Headline size="h4">{headline}</Headline>
        <Paragraph size="p2">{description}</Paragraph>
        {!tags && <Link to={headline} />}
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
