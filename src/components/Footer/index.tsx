import { Paragraph } from '../Paragraph';
import { Img } from '../Header/components.styled';
import { Socials } from '../Socials';

import logo from '@/assets/Logo.png';
import { FooterContainer } from '@/layouts/Container';
import { theme } from '@/theme';

import {
  FooterBorder,
  FooterWrapper,
  SocialWrapper,
  ContactLink,
  FooterHeadline,
  ContactContainer,
} from './styled';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <SocialWrapper>
          <Img src={logo} alt="" />
          <Paragraph size={'p3'} color={theme.colors.grey}>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi.
          </Paragraph>
          <Socials />
        </SocialWrapper>
        <ContactContainer>
          <FooterHeadline>Quick link</FooterHeadline>
          <ContactLink>Home</ContactLink>
          <ContactLink>Solutions</ContactLink>
          <ContactLink>Blog</ContactLink>
          <ContactLink>Contacts</ContactLink>
          <ContactLink>Our team</ContactLink>
          <ContactLink>About us</ContactLink>
          <ContactLink>Services</ContactLink>
          <ContactLink>FAQ</ContactLink>
        </ContactContainer>
        <ContactContainer>
          <FooterHeadline>Service</FooterHeadline>
          <ContactLink>Pages</ContactLink>
          <ContactLink>Elements</ContactLink>
          <ContactLink>Pricing</ContactLink>
          <ContactLink>Site map</ContactLink>
        </ContactContainer>
        <ContactContainer>
          <FooterHeadline>Contact info</FooterHeadline>
          <ContactLink href="mailto:ensome@info.co.us">ensome@info.co.us</ContactLink>
          <ContactLink href="tel:+1 601-201-5580">+1 601-201-5580</ContactLink>
          <ContactLink>
            1642 Washington Avenue, Jackson,
            <br /> MS, Mississippi, 39201
          </ContactLink>
        </ContactContainer>
      </FooterContainer>
      <FooterBorder>
        <Paragraph size={'p3'} color={theme.colors.helperBlue2}>
          Ensome© 2022 All Rights Reserved
        </Paragraph>
        <div style={{ display: 'flex', maxWidth: '255px', flexGrow: 1 }}>
          <Paragraph size={'p3'} color={theme.colors.helperBlue2}>
            Privacy policy
          </Paragraph>
          <Paragraph size={'p3'} color={theme.colors.helperBlue2}>
            Terms of us
          </Paragraph>
        </div>
      </FooterBorder>
    </FooterWrapper>
  );
};
