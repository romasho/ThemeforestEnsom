import { memo } from 'react';
import { useMediaQuery } from 'react-responsive';

import { CompanyNumbers } from '../CompanyNumbers';
import { Headline } from '../Headline';
import { Paragraph } from '../Paragraph';

import { CenterAlignContainer } from '@/layouts/Container';
import { Section } from '@/layouts/Section';
import { BaseBlockRow, BaseBlock, BaseBlockRowImages } from '@/pages/Home/styled';

import { data, logos } from './data';
import { Img } from './styled';

export const CompanyOverview = memo(() => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <>
      <Section background="light">
        <CenterAlignContainer>
          <Headline as="h2" size={isMobile ? 'h3' : 'h2'}>
            We provide services that guarantee your success
          </Headline>
          <BaseBlockRow>
            {data.map(({ description, number }) => (
              <CompanyNumbers number={number} description={description} key={description} />
            ))}
          </BaseBlockRow>
          <BaseBlock>
            <Paragraph size={isMobile ? 'p3' : 'p1'}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt
              tempor quam, non mollis quam finibus nec.
            </Paragraph>
          </BaseBlock>
          <BaseBlockRowImages>
            {logos.map((img, index) => (
              <Img src={img} key={index} alt={'' + index} />
            ))}
          </BaseBlockRowImages>
        </CenterAlignContainer>
      </Section>
    </>
  );
});
