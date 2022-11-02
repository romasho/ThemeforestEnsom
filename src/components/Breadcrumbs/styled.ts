import styled from 'styled-components';

import { BreadcrumbsProps } from './types';

export const BreadcrumbsContainer = styled.div<BreadcrumbsProps>`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 0;
  ${(props) =>
    props.position === 'bottom'
      ? `  
    align-items: center;
    position: unset;
    top: 20px;
    left: 0;
    width: 100%;
    justify-content: center;
    margin-top: -20px;`
      : ''}

  svg {
    fill: ${({ theme }) => theme.colors.grey};
  }
`;
