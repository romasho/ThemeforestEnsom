import { ROUTE_NAMES } from '@/constants';

import { NavListItem, Nav } from './components.styled';

export const NavBar = () => {
  return (
    <Nav>
      <NavListItem to={ROUTE_NAMES.HOME} end>
        Home
      </NavListItem>
      <NavListItem to={ROUTE_NAMES.SOLUTIONS}>Solutions</NavListItem>
      <NavListItem to="/pages">Pages</NavListItem>
      <NavListItem to={ROUTE_NAMES.SERVICES}>Services</NavListItem>
      <NavListItem to={ROUTE_NAMES.BLOG}>Blog</NavListItem>
      <NavListItem to={ROUTE_NAMES.CONTACTS}>Contacts</NavListItem>
    </Nav>
  );
};
