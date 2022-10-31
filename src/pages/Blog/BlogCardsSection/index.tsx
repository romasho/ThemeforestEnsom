import { useState } from 'react';

import { SectionColumn } from '@/layouts/Section';
import { DescriptionPage } from '@/components/DescriptionPage';
import { Container } from '@/layouts/Container';
import { BlogPost } from '@/pages/Home/BlogPost';
import { data } from '@/pages/Home/Blog/data';
import { Buttons } from '@/components/Button';

import { AlignToCenter } from './styled';

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
        {data.slice(0, index).map(({ img, data, headline, description, id, tags }) => (
          <BlogPost
            key={id}
            variant="medium"
            img={img}
            data={data}
            headline={headline}
            description={description}
            tags={tags}
          />
        ))}
        <AlignToCenter>
          {data.length > index && (
            <Buttons variant="little" onClick={addPosts}>
              More articles
            </Buttons>
          )}
        </AlignToCenter>
      </Container>
    </SectionColumn>
  );
};
