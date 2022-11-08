import styled from 'styled-components';

export const Map = styled.div`
  width: 100%;
  height: 460px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    height: 290px;
  }
`;
