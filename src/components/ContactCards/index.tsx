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

const data = [
  { icon: mail, headline: 'Email', data: 'ensome@info.co.us', id: '1' },
  { icon: call, headline: 'Phone', data: '+1 601-201-5580', id: '2' },
  { icon: location, headline: 'Address', data: '1642 Washington Ave, Jackson, MS', id: '3' },
];

export const ContactCards: FC<ContactCardsProps> = ({ direction, iconColor }) => {
  return (
    <ContactCardContainer direction={direction} iconColor={iconColor}>
      {data.map(({ icon, headline, data, id }) => (
        <ContactCard direction={direction} key={id}>
          <ContactCardInnerWrapper>
            <Icon icon={icon} />
            {!iconColor && <Headline size="h7">{headline}</Headline>}
          </ContactCardInnerWrapper>
          <Paragraph size="p2" color={theme.colors.grey}>
            {data}
          </Paragraph>
        </ContactCard>
      ))}
    </ContactCardContainer>
  );
};
