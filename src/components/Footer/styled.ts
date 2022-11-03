import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from '@/layouts/Container';

export const FooterWrapper = styled.footer`
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const FooterBorder = styled(Container)`
  border-top: solid 1px ${({ theme }) => theme.colors.helperBlue2};
  padding-top: 35px;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  max-width: 285px;
  row-gap: 20px;

  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
  }
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font: ${({ theme }) => theme.font.paragraph.paragraph3};
  color: ${({ theme }) => theme.colors.grey};
`;

export const ContactLink = styled.a`
  text-decoration: none;
  font: ${({ theme }) => theme.font.paragraph.paragraph3};
  color: ${({ theme }) => theme.colors.grey};
`;

export const FooterHeadline = styled.h6`
  font: ${({ theme }) => theme.font.headline.headline6};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 30px;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Text = styled.h6`
  font: ${({ theme }) => theme.font.headline.headline6};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.015em;
`;

export const SocialsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;
