import { memo } from 'react';

import { Paragraph } from '../Paragraph';
import { Img } from '../Header/components.styled';
import { Socials } from '../Socials';

import logo from '@/assets/Logo.png';
import { FooterContainer } from '@/layouts/Container';
import { theme } from '@/theme';
import { ROUTE_NAMES } from '@/constants';

import {
  FooterBorder,
  FooterWrapper,
  SocialWrapper,
  ContactLink,
  NavigationLink,
  FooterHeadline,
  ContactContainer,
} from './styled';

export const Footer = memo(() => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <SocialWrapper>
          <Img src={logo} alt="" />
          <Paragraph size={'p3'} color={theme.colors.grey}>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi.
          </Paragraph>
          <Socials
            socials={{
              facebook: undefined,
              twitter: undefined,
              linkedin: undefined,
              youtube: undefined,
              dribbble: undefined,
              behance: undefined,
            }}
          />
        </SocialWrapper>
        <ContactContainer>
          <FooterHeadline>Quick link</FooterHeadline>
          <NavigationLink to={ROUTE_NAMES.HOME}>Home</NavigationLink>
          <NavigationLink to={ROUTE_NAMES.SOLUTIONS}>Solutions</NavigationLink>
          <NavigationLink to={ROUTE_NAMES.BLOG}>Blog</NavigationLink>
          <NavigationLink to={ROUTE_NAMES.CONTACTS}>Contacts</NavigationLink>
          <NavigationLink to={ROUTE_NAMES.OUR_TEAM}>Our team</NavigationLink>
          <NavigationLink to={ROUTE_NAMES.ABOUT_US}>About us</NavigationLink>
          <NavigationLink to={ROUTE_NAMES.SERVICES}>Services</NavigationLink>
          <NavigationLink to={ROUTE_NAMES.FAQS}>FAQ</NavigationLink>
        </ContactContainer>
        <ContactContainer>
          <FooterHeadline>Service</FooterHeadline>
          <NavigationLink to={ROUTE_NAMES.CONTACTS}>Pages</NavigationLink>
          <NavigationLink to={ROUTE_NAMES.CONTACTS}>Pricing</NavigationLink>
          <NavigationLink to={ROUTE_NAMES.CONTACTS}>Site map</NavigationLink>
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
});
