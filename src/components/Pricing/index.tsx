import { Headline } from '../Headline';

import { WithoutPaddingContainer } from '@/layouts/Container';
import { Section } from '@/layouts/Section';

import { PricingCard } from './PricingCard/Index';
import { data } from './data';
import { CardContainer } from './styled';

export const Pricing = () => {
  return (
    <Section background="light">
      <WithoutPaddingContainer>
        <Headline size="h2">Our pricing</Headline>
        <CardContainer>
          {data.map(({ access, price, advantages }) => {
            return (
              <PricingCard access={access} price={price} advantages={advantages} key={access} />
            );
          })}
        </CardContainer>
      </WithoutPaddingContainer>
    </Section>
  );
};
