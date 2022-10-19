import { NavListItem, Nav } from './components.styled';

export const NavBar = () => {
  return (
    <Nav>
      <NavListItem to="/">Home</NavListItem>
      <NavListItem to="/solutions">Solutions</NavListItem>
      <NavListItem to="/pages">Pages</NavListItem>
      <NavListItem to="/elements">Elements</NavListItem>
      <NavListItem to="/blog">Blog</NavListItem>
      <NavListItem to="/contacts">Contacts</NavListItem>
    </Nav>
  );
};
