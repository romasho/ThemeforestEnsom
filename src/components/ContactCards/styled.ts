import styled from 'styled-components';

import { ContactCardsProps } from './types';

export const ContactCard = styled.div<ContactCardsProps>`
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.direction === 'column'
      ? ''
      : `flex-direction: row;
      gap: 15px;`}
`;

export const ContactCardInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ContactCardContainer = styled.div<ContactCardsProps>`
  display: flex;
  gap: 50px;

  ${(props) =>
    props.direction === 'column'
      ? ''
      : `gap: 15px;
  flex-direction: column;`}

  svg {
    fill: ${(props) => props.iconColor};
  }
`;
