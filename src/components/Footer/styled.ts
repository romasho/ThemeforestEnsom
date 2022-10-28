import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from '@/layouts/Container';

export const FooterWrapper = styled.footer`
  padding: 10px 0;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const FooterBorder = styled(Container)`
  border-top: solid 1px ${(props) => props.theme.colors.helperBlue2};
  padding-top: 35px;
  padding-bottom: 30px;
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  max-width: 285px;
  row-gap: 20px;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font: ${(props) => props.theme.font.paragraph.paragraph3};
  color: ${(props) => props.theme.colors.grey};
`;

export const ContactLink = styled.a`
  text-decoration: none;
  font: ${(props) => props.theme.font.paragraph.paragraph3};
  color: ${(props) => props.theme.colors.grey};
`;

export const FooterHeadline = styled.h6`
  font: ${(props) => props.theme.font.headline.headline6};
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 30px;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
