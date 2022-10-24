import { Headline } from '@/components/Headline';
import { Link } from '@/components/Link';
import { Paragraph } from '@/components/Paragraph';

import { BlogInfo, PostContainer } from './styled';

export const BlogPost = ({ img, data, headline, description }) => {
  return (
    <PostContainer>
      <img src={img} alt="blog_img" />
      <BlogInfo>
        <Paragraph size="p3">{data}</Paragraph>
        <Headline size="h4">{headline}</Headline>
        <Paragraph size="p2">{description}</Paragraph>
        <Link />
      </BlogInfo>
    </PostContainer>
  );
};
