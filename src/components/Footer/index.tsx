import { memo } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Img } from '@/components/Header/components.styled';
import { Socials } from '@/components/Socials';
import logo from '@/assets/Logo.png';
import { FooterContainer } from '@/layouts/Container';

import { FooterWrapper, SocialWrapper, Text, SocialsContainer } from './styled';
import { Rights } from './rights';
import { ContactsDesktop } from './contactsDesktop';
import { ContactsMobile } from './contactsMobile';

export const Footer = memo(() => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <FooterWrapper>
      <FooterContainer>
        <SocialWrapper>
          <Img src={logo} alt="" />
          <ContactsMobile />
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
        <ContactsDesktop />
      </FooterContainer>
      <Rights />
    </FooterWrapper>
  );
});
