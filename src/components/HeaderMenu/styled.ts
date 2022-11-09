import styled from 'styled-components';

export const Control = styled.button`
  display: flex;
  align-items: center;
  font: ${({ theme }) => theme.font.headline.headline7};
  text-decoration: none;
  border: none;
  background: unset;
  color: ${({ theme }) => theme.colors.grey};

  &:hover {
    color: ${(props) =>
      props.color === 'white' ? props.theme.colors.white : props.theme.colors.black};
  }

  &.active {
    color: ${(props) =>
      props.color === 'white' ? props.theme.colors.white : props.theme.colors.black};
    font-weight: 600;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const Menu = styled.menu`
  font: ${({ theme }) => theme.font.headline.headline7};
  margin: 1px 0 0;
  background: white;
  position: absolute;
  z-index: 2;
  border-radius: 6px;
  ${({ theme }) => theme.boxShadows.shadowDropdown};

  a {
    padding: 10px 20px;
  }
`;
