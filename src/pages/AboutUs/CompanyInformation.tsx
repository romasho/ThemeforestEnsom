import { useMediaQuery } from 'react-responsive';

import { BaseBlockRow, BaseBlock } from '@/pages/Home/styled';
import { data } from '@/components/CompanyOverview/data';
import { CompanyNumbers } from '@/components/CompanyNumbers';
import { Headline } from '@/components/Headline';
import { Paragraph } from '@/components/Paragraph';
import { CenterAlignContainer } from '@/layouts/Container';
import { Section } from '@/layouts/Section';

export const CompanyInformation = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Section background="dark">
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
          <Paragraph size={isMobile ? 'p3' : 'p2'}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor
            quam, non mollis quam finibus nec.
          </Paragraph>
        </BaseBlock>
      </CenterAlignContainer>
    </Section>
  );
};
