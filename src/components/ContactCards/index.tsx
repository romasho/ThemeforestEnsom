import { FC } from 'react';

import { Icon } from '@/components/Icon';
import { Headline } from '@/components/Headline';
import { ReactComponent as mail } from '@/assets/svg/icon_mail.svg';
import { ReactComponent as call } from '@/assets/svg/icon_call.svg';
import { ReactComponent as location } from '@/assets/svg/icon_location.svg';
import { Paragraph } from '@/components/Paragraph';
import { theme } from '@/theme';

import { ContactCard, ContactCardInnerWrapper, ContactCardContainer } from './styled';
import { ContactCardsProps } from './types';

export const ContactCards: FC<ContactCardsProps> = ({ direction, iconColor }) => {
  return (
    <ContactCardContainer direction={direction} iconColor={iconColor}>
      <ContactCard direction={direction}>
        <ContactCardInnerWrapper>
          <Icon icon={mail} />
          {!iconColor && <Headline size="h7">Email</Headline>}
        </ContactCardInnerWrapper>
        <Paragraph size="p2" color={theme.colors.grey}>
          ensome@info.co.us
        </Paragraph>
      </ContactCard>
      <ContactCard direction={direction}>
        <ContactCardInnerWrapper>
          <Icon icon={call} />
          {!iconColor && <Headline size="h7">Phone</Headline>}
        </ContactCardInnerWrapper>
        <Paragraph size="p2" color={theme.colors.grey}>
          +1 601-201-5580
        </Paragraph>
      </ContactCard>
      <ContactCard direction={direction}>
        <ContactCardInnerWrapper>
          <Icon icon={location} />
          {!iconColor && <Headline size="h7">Address</Headline>}
        </ContactCardInnerWrapper>
        <Paragraph size="p2" color={theme.colors.grey}>
          1642 Washington Ave, Jackson, MS
        </Paragraph>
      </ContactCard>
    </ContactCardContainer>
  );
};
