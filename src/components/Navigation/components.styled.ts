import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavListItem = styled(NavLink)`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
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
`;

export const Nav = styled.nav`
  display: flex;
  max-width: 510px;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  flex-grow: 1;
`;
