import { memo } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Paragraph } from '@/components/Paragraph';
import { Img } from '@/components/Header/components.styled';
import { Socials } from '@/components/Socials';
import { DropDown } from '@/components/DropDownFooter';
import logo from '@/assets/Logo.png';
import { FooterContainer } from '@/layouts/Container';
import { theme } from '@/theme';
import { Link, Service } from '@/constants';

import {
  FooterBorder,
  FooterWrapper,
  SocialWrapper,
  ContactLink,
  NavigationLink,
  FooterHeadline,
  ContactContainer,
  Text,
  SocialsContainer,
} from './styled';

export const Footer = memo(() => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <FooterWrapper>
      <FooterContainer>
        <SocialWrapper>
          <Img src={logo} alt="" />
          {!isMobile && (
            <Paragraph size={'p3'} color={theme.colors.grey}>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi.
            </Paragraph>
          )}
          {isMobile && (
            <>
              <DropDown title={'Quick link'} dropDownItems={Link} />
              <DropDown title={'Service'} dropDownItems={Service} />
              <DropDown title={'Contact info'} dropDownItems={Service} />
            </>
          )}
          <SocialsContainer>
            {isMobile && <Text>Follow us</Text>}
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
          </SocialsContainer>
        </SocialWrapper>
        {!isMobile && (
          <>
            <ContactContainer>
              <FooterHeadline>Quick link</FooterHeadline>
              {Link.map(({ name, link }) => (
                <NavigationLink key={name} to={link}>
                  {name}
                </NavigationLink>
              ))}
            </ContactContainer>
            <ContactContainer>
              <FooterHeadline>Service</FooterHeadline>
              {Service.map(({ name, link }) => (
                <NavigationLink key={name} to={link}>
                  {name}
                </NavigationLink>
              ))}
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
          </>
        )}
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
