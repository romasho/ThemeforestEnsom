import { Advantages } from '../Advantages';

import { Headline } from '@/components/Headline';
import { benefitsData } from '@/pages/Home/Benefits/data';
import { Section } from '@/layouts/Section';
import img from '@/assets/img/img_0011.png';
import { BaseBlock } from '@/pages/Home/styled';
import { BackgroundHalfSection } from '@/pages/Home/Features/styled';

import { AdvantagesContainer } from './styled';

export const AdvantagesSection = () => {
  return (
    <Section background="dark">
      <BackgroundHalfSection background="dark" img={img} />
      <BaseBlock>
        <Headline as="h2" size="h2">
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
