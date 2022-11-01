import { useState } from 'react';

import { SectionColumn } from '@/layouts/Section';
import { DescriptionPage } from '@/components/DescriptionPage';
import { Container } from '@/layouts/Container';
import { BlogPost } from '@/pages/Home/BlogPost';
import { dataBlog } from '@/pages/Home/Blog/data';
import { Buttons } from '@/components/Button';

import { AlignToCenter, Link } from './styled';

export const BlogCardsSection = () => {
  const [index, setIndex] = useState(6);

  const addPosts = () => setIndex((prevIndex) => prevIndex + 6);

  return (
    <SectionColumn background="light">
      <DescriptionPage
        page={'Blog'}
        headline={'Discover new things with Ensome blog'}
        description={
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore.'
        }
      />
      <Container>
        {dataBlog.slice(0, index).map(({ img, date, headline, description, id, tags }) => (
          <Link key={id} to={headline}>
            <BlogPost
              variant="medium"
              img={img}
              data={date}
              headline={headline}
              description={description}
              tags={tags}
            />
          </Link>
        ))}
        <AlignToCenter>
          {dataBlog.length > index && (
            <Buttons variant="little" onClick={addPosts}>
              More articles
            </Buttons>
          )}
        </AlignToCenter>
      </Container>
    </SectionColumn>
  );
};
