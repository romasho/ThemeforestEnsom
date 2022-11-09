import styled from 'styled-components';

export const Img = styled.img`
  width: 141px;
  height: 46px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 90px;
    height: 30px;
  }
`;

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  z-index: 5;
`;

export const Burger = styled.button`
  border: none;
  background: none;

  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

interface BurgerMenuProps {
  open: boolean;
}

export const BurgerMenu = styled.div<BurgerMenuProps>`
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-200%)')};
  transition: transform 0.5s ease-in-out;
  position: absolute;
  left: 0;
  width: 100%;
  height: calc(100vh - 44px);
  background: white;
  z-index: 2;
  display: flex;
  gap: 15px;
  flex-direction: column;
  padding: 15px 0;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.boxShadows.shadowDropdown};

  svg {
    fill: ${({ theme }) => theme.colors.black};
  }
`;

export const Block = styled.div`
  max-width: ${({ theme }) => theme.width.containerMobile};
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;

  &:last-child {
    margin-top: 60px;
  }

  a > svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const Video = styled.video`
  position: absolute;
  z-index: 20;
  max-width: ${({ theme }) => theme.width.container};
  width: calc(100% - 50%);
  min-width: ${({ theme }) => theme.width.containerMobile};
  height: auto;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
