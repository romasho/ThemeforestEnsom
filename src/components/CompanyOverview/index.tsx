import { CompanyNumbers } from '../CompanyNumbers';
import { Headline } from '../Headline';
import { Paragraph } from '../Paragraph';

import { CenterAlignContainer } from '@/layouts/Container';
import { Section } from '@/layouts/Section';
import { InfoBlockRow, InfoBlock, InfoBlockRowImages } from '@/pages/Home/styled';

import { data, logos } from './data';

export const CompanyOverview = () => {
  return (
    <>
      <Section background="light">
        <CenterAlignContainer>
          <Headline as="h2" size="h2">
            We provide services that guarantee your success
          </Headline>
          <InfoBlockRow>
            {data.map(({ description, number }) => (
              <CompanyNumbers number={number} description={description} key={description} />
            ))}
          </InfoBlockRow>
          <InfoBlock>
            <Paragraph size="p1">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt
              tempor quam, non mollis quam finibus nec.
            </Paragraph>
          </InfoBlock>
          <InfoBlockRowImages>
            {logos.map((img, index) => (
              <img src={img} key={index} alt={'' + index} />
            ))}
          </InfoBlockRowImages>
        </CenterAlignContainer>
      </Section>
    </>
  );
};
