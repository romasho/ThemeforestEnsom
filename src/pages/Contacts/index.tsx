import { InfoBlock } from '../Home/styled';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Container } from '@/layouts/Container';
import { PageLayout } from '@/layouts/Pages';
import { SectionColumn } from '@/layouts/Section';
import { Headline } from '@/components/Headline';
import { ContactForm } from '@/components/ContactForm';
import { Icon } from '@/components/Icon';
import { ReactComponent as mail } from '@/assets/svg/icon_mail.svg';
import { ReactComponent as call } from '@/assets/svg/icon_call.svg';
import { ReactComponent as location } from '@/assets/svg/icon_location.svg';
import { Paragraph } from '@/components/Paragraph';
import { theme } from '@/theme';
import { MapboxMap } from '@/components/MapBox';

import { ContactCard, ContactCardInnerWrapper, ContactCardContainer } from './styled';

export const Contacts = () => {
  return (
    <PageLayout>
      <SectionColumn background="light">
        <Container style={{ alignItems: 'flex-start' }}>
          <Breadcrumbs />
          <InfoBlock>
            <Headline size="extraLarge">
              How can we <span>help you?</span>
            </Headline>
          </InfoBlock>
          <ContactForm />
          <ContactCardContainer>
            <ContactCard>
              <ContactCardInnerWrapper>
                <Icon icon={mail} />
                <Headline size="h7">Email</Headline>
              </ContactCardInnerWrapper>

              <Paragraph size="p2" color={theme.colors.grey}>
                ensome@info.co.us
              </Paragraph>
            </ContactCard>
            <ContactCard>
              <ContactCardInnerWrapper>
                <Icon icon={call} />
                <Headline size="h7">Phone</Headline>
              </ContactCardInnerWrapper>
              <Paragraph size="p2" color={theme.colors.grey}>
                +1 601-201-5580
              </Paragraph>
            </ContactCard>
            <ContactCard>
              <ContactCardInnerWrapper>
                <Icon icon={location} />
                <Headline size="h7">Address</Headline>
              </ContactCardInnerWrapper>
              <Paragraph size="p2" color={theme.colors.grey}>
                1642 Washington Ave, Jackson, MS
              </Paragraph>
            </ContactCard>
          </ContactCardContainer>
        </Container>
        <MapboxMap />
      </SectionColumn>
    </PageLayout>
  );
};
