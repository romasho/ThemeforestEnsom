import img from '@/assets/img/blogImg/img_.png';
import { Headline } from '@/components/Headline';
import { Link } from '@/components/Link';
import { Paragraph } from '@/components/Paragraph';

import { BlogInfo, PostContainer } from './styled';

export const BlogPost = () => {
  return (
    <PostContainer>
      <img src={img} alt="blog_img" />
      <BlogInfo>
        <Paragraph size="p3">22 June 2022</Paragraph>
        <Headline size="h4">ISO 13485 compliance of medical devices</Headline>
        <Paragraph size="p2">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...
        </Paragraph>
        <Link />
      </BlogInfo>
    </PostContainer>
  );
};
