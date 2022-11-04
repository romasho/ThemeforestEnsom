import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Headline } from '@/components/Headline';
import { Link } from '@/components/Link';
import { Paragraph } from '@/components/Paragraph';
import { Tag } from '@/components/Tag';
import { ROUTE_NAMES } from '@/constants';
import { theme } from '@/theme';

import { BlogInfo, PostContainer, TagContainer, Typography } from './styled';
import { BlogPostType } from './types';

export const BlogPost: FC<BlogPostType> = ({ img, data, headline, description, variant, tags }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <PostContainer variant={variant}>
      <img src={img} alt="blog_img" />
      <BlogInfo variant={variant}>
        <Paragraph size="p3" color={theme.colors.grey}>
          {data}
        </Paragraph>
        <Typography variant={variant}>{headline}</Typography>
        {variant !== 'without_description' && !isDesktopOrLaptop && (
          <Paragraph size="p2">{description}</Paragraph>
        )}
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
