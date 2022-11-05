import { useMediaQuery } from 'react-responsive';

import { Advantages } from '../Advantages';

import { Headline } from '@/components/Headline';
import { benefitsData } from '@/pages/Home/Benefits/data';
import { Section } from '@/layouts/Section';
import img from '@/assets/img/img_0011.png';
import { BaseBlock } from '@/pages/Home/styled';
import { BackgroundHalfSection } from '@/pages/Home/Features/styled';

import { AdvantagesContainer } from './styled';

export const AdvantagesSection = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Section background={isMobile ? 'light' : 'dark'}>
      <BackgroundHalfSection background="dark" img={img} />
      <BaseBlock>
        <Headline as="h2" size={isMobile ? 'h3' : 'h2'}>
          Why choose us?
        </Headline>
        <AdvantagesContainer>
          {benefitsData.slice(0, 3).map(({ headline, description }) => (
            <Advantages key={headline} title={headline} description={description} />
          ))}
        </AdvantagesContainer>
      </BaseBlock>
    </Section>
  );
};
