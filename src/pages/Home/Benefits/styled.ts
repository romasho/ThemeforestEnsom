import styled from 'styled-components';

import { Container } from '@/layouts/Container';
import { Section } from '@/layouts/Section';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  max-width: 540px;

  div:nth-child(2) {
    margin-top: 55px;
  }

  div:nth-child(3) {
    margin-top: -50px;
  }

  @media (max-width: 768px) {
    div:nth-child(n) {
      margin-top: 0;
    }

    flex-wrap: nowrap;
    max-width: none;
  }
`;

export const StyledContainer = styled(Container)`
  justify-content: flex-start;
  padding: 6px 0;
  overflow-x: scroll;
  max-width: 540px;

  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0;
    display: none !important;
    background: transparent;
  }
`;
