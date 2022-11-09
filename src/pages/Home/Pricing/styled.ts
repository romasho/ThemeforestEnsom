import styled from 'styled-components';

import { WithoutPaddingContainer } from '@/layouts/Container';
import { Section } from '@/layouts/Section';

export const CardContainer = styled.div`
  display: flex;
  column-gap: 20px;
  margin-top: 30px;
`;

export const StyledContainer = styled(WithoutPaddingContainer)`
  justify-content: flex-start;
  overflow-x: auto;
  padding: 0 16px;

  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0;
    display: none !important;
    background: transparent;
  }
`;
export const StyledSection = styled(Section)`
  flex-direction: column;
`;
