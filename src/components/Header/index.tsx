import { memo } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Buttons } from '../Button';
import { NavBar } from '../Navigation';

import { HeaderContainer } from '@/layouts/Container';
import { ReactComponent as play } from '@/assets/svg/icon_play_circle.svg';
import logo from '@/assets/logo_blue.png';

import { Img, HeaderWrapper } from './components.styled';

export const Header = memo(() => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Img src={logo} alt="" />
        {!isTabletOrMobile && <NavBar />}
        {!isTabletOrMobile && (
          <Buttons variant="withIcon" icon={play}>
            Watch the demo
          </Buttons>
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
});
