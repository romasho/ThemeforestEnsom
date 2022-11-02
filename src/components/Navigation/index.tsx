import { Dropdown } from '../Dropdown';

import { ROUTE_NAMES } from '@/constants';

import { NavListItem, Nav } from './components.styled';

const items = [
  { label: 'FAQ', value: ROUTE_NAMES.FAQS },
  { label: 'Our team', value: ROUTE_NAMES.OUR_TEAM },
  { label: 'About us', value: ROUTE_NAMES.ABOUT_US },
];

export const NavBar = () => {
  return (
    <Nav>
      <NavListItem to={ROUTE_NAMES.HOME} end>
        Home
      </NavListItem>
      <NavListItem to={ROUTE_NAMES.SOLUTIONS}>Solutions</NavListItem>
      <Dropdown label="Pages" items={items} />
      <NavListItem to={ROUTE_NAMES.SERVICES}>Services</NavListItem>
      <NavListItem to={ROUTE_NAMES.BLOG}>Blog</NavListItem>
      <NavListItem to={ROUTE_NAMES.CONTACTS}>Contacts</NavListItem>
    </Nav>
  );
};
