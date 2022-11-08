import styled from 'styled-components';

interface BurgerMenuProps {
  open: boolean;
}

export const BurgerMenuWrapper = styled.div<BurgerMenuProps>`
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
  max-width: 328px;
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
