import styled from 'styled-components';

import { Container as container } from '@/layouts/Container';

export const Container = styled(container)`
  padding: 120px 0 0 0;

  @media (max-width: 768px) {
    padding: 50px 0 0 0;
  }
`;
