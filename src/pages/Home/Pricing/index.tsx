import { memo } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Headline } from '@/components/Headline';
import { PricingCard } from '@/pages/Home/PricingCard/Index';

import { data } from './data';
import { CardContainer, StyledContainer, StyledSection } from './styled';

export const Pricing = memo(() => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <StyledSection background="light">
      <StyledContainer>
        <Headline size={isDesktopOrLaptop ? 'h3' : 'h2'}>Our pricing</Headline>
      </StyledContainer>
      <StyledContainer>
        <CardContainer>
          {data.map(({ access, price, advantages }) => {
            return (
              <PricingCard access={access} price={price} advantages={advantages} key={access} />
            );
          })}
        </CardContainer>
      </StyledContainer>
    </StyledSection>
  );
});
