import styled from 'styled-components';

export const Img = styled.img`
  width: 185px;
  height: 132px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 92px;
    height: 65px;
  }
`;
