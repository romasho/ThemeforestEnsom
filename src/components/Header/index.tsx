import { Buttons } from '../Button';
import { NavBar } from '../Navigation';

import { Container } from '@/layouts/Container';
import { ReactComponent as play } from '@/assets/svg/icon_play_circle.svg';
import logo from '@/assets/logo_blue.png';

import { Img } from './components.styled';

export const Header = () => {
  return (
    <header>
      <Container>
        <Img src={logo} alt="" />
        <NavBar />
        <Buttons icon={play}>Watch the demo</Buttons>
      </Container>
    </header>
  );
};
