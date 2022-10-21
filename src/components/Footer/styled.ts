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
