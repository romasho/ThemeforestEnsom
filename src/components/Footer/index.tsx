import { Paragraph } from '../Paragraph';
import { Img } from '../Header/components.styled';
import { Icon } from '../Icon';
import { Socials } from '../Socials';

import logo from '@/assets/Logo.png';
import { ReactComponent as facebookIcon } from '@/assets/svg/socials/icon_facebook.svg';
import { Container } from '@/layouts/Container';
import { theme } from '@/theme';

import { FooterContainer, FooterWrapper, SocialWrapper } from './styled';

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <SocialWrapper>
          <Img src={logo} alt="" />
          <Paragraph size={'p3'} color={theme.colors.helperBlue2}>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi.
          </Paragraph>
          <Socials />
        </SocialWrapper>
      </Container>
      <FooterContainer>
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
      </FooterContainer>
    </FooterWrapper>
  );
};
