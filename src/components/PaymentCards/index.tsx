import visa from '@/assets/svg/Card/visa.svg';
import master from '@/assets/svg/Card/mastercard.svg';

import {
  BlackStrip,
  CardBack,
  CardContainer,
  CVC,
  FrontCard,
  InfoCard,
  InfoCardBack,
  Input,
  MasterCard,
  ShortInput,
  Visa,
} from './styled';

export const PaymentCards = () => {
  return (
    <CardContainer>
      <FrontCard>
        <InfoCard>Card number</InfoCard>
        <Input name="credit-number" type="tel" maxLength={19} short="medium" />
        <InfoCard>Expiration date</InfoCard>
        <ShortInput>
          <Input
            name="credit-number"
            min="01"
            max="12"
            step="1"
            value="03"
            type="number"
            short="short"
          />
          <Input
            name="credit-number"
            type="number"
            min="2020"
            max="2099"
            step="1"
            value="2024"
            short="short"
          />
        </ShortInput>

        <InfoCard>Cardholder name</InfoCard>
        <Input name="credit-number" type="text" short="long" />
        <Visa img={visa} />
        <MasterCard img={master} />
      </FrontCard>
      <CardBack>
        <BlackStrip />
        <InfoCardBack>CVC/CVV</InfoCardBack>
        <CVC />
        <InfoCardBack>
          The last <br /> 3 or 4 digits on back <br /> of the card
        </InfoCardBack>
      </CardBack>
    </CardContainer>
  );
};
