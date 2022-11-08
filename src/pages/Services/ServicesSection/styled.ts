import styled from 'styled-components';

import { CardContainer } from '@/layouts/Container';

export const Container = styled(CardContainer)`
  padding: 120px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding: 50px 0 0 0;
  }
`;
