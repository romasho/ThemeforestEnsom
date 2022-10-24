import { FC, useState } from 'react';

import { Headline } from '@/components/Headline';
import { Tabs } from '@/components/Tabs';
import { Buttons } from '@/components/Button';
import { ReactComponent as checkmark } from '@/assets/svg/icon_checkmark.svg';
import { Icon } from '@/components/Icon';

import {
  AdvantagesItem,
  AdvantagesList,
  CardContainer,
  PriceContainer,
  HeadlineContainer,
} from './styled';

interface PricingCardProps {
  access: string;
  price: string;
  advantages: string[];
}

export const PricingCard: FC<PricingCardProps> = ({ access, price, advantages }) => {
  const [active, setActive] = useState('Month');

  const setActiveMonth = () => {
    setActive('Month');
  };

  const setActiveYear = () => {
    setActive('Year');
  };

  return (
    <CardContainer>
      <HeadlineContainer>
        <Headline size="h6">{access}</Headline>
        <PriceContainer>
          <Headline size="h3">{`${isNaN(+price) ? '' : '$'}${
            active === 'Month' ? price : isNaN(+price) ? price : +price * 10
          }`}</Headline>
          <Tabs firstHandler={setActiveMonth} secondHandler={setActiveYear} currentValue={active} />
        </PriceContainer>
      </HeadlineContainer>
      <Buttons variant="little">Choose plan</Buttons>
      <AdvantagesList>
        {advantages.map((el, index) => {
          return (
            <AdvantagesItem key={index}>
              <Icon icon={checkmark} />
              {el}
            </AdvantagesItem>
          );
        })}
      </AdvantagesList>
    </CardContainer>
  );
};
