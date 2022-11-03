import styled from 'styled-components';

export const Img = styled.img`
  width: 141px;
  height: 46px;

  @media (max-width: 768px) {
    width: 90px;
    height: 30px;
  }
`;

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Burger = styled.button`
  border: none;
  background: none;

  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;
