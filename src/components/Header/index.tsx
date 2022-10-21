import { Buttons } from '../Button';
import { NavBar } from '../Navigation';

import { HeaderContainer } from '@/layouts/Container';
import { ReactComponent as play } from '@/assets/svg/icon_play_circle.svg';
import logo from '@/assets/logo_blue.png';

import { Img, HeaderWrapper } from './components.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Img src={logo} alt="" />
        <NavBar />
        <Buttons variant="withIcon" icon={play}>
          Watch the demo
        </Buttons>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
