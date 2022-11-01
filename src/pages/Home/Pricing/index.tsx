import { memo } from 'react';

import { Headline } from '@/components/Headline';
import { WithoutPaddingContainer } from '@/layouts/Container';
import { Section } from '@/layouts/Section';
import { PricingCard } from '@/pages/Home/PricingCard/Index';

import { data } from './data';
import { CardContainer } from './styled';

export const Pricing = memo(() => {
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
});
