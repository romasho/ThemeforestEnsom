import { useState } from 'react';

import { SectionColumn } from '@/layouts/Section';
import { DescriptionPage } from '@/components/DescriptionPage';
import { Container, WithoutPaddingContainer } from '@/layouts/Container';
import { BlogPost } from '@/pages/Home/BlogPost';
import { Buttons } from '@/components/Button';
import { AllTags } from '@/pages/News/AllTags';
import { useAppSelector } from '@/hooks/redux';

import { AlignToCenter, Link } from './styled';

export const BlogCardsSection = () => {
  const { data, filterPosts } = useAppSelector((state) => state.blogSlice);

  const [index, setIndex] = useState(6);

  const addPosts = () => setIndex((prevIndex) => prevIndex + 6);

  const applyFilters = filterPosts.filter(({ isActive }) => isActive).length > 0;
  const filteredData = data.filter((elem) =>
    filterPosts.reduce((acc, el) => (elem.tags.includes(el.tag) && el.isActive ? true : acc), false)
  );

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
        <WithoutPaddingContainer>
          <AllTags />
        </WithoutPaddingContainer>
        {(applyFilters ? filteredData : data)
          .slice(0, index)
          .map(({ img, date, headline, description, id, tags }) => (
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
          {(applyFilters ? filteredData : data).length > index && (
            <Buttons variant="little" onClick={addPosts}>
              More articles
            </Buttons>
          )}
        </AlignToCenter>
      </Container>
    </SectionColumn>
  );
};
