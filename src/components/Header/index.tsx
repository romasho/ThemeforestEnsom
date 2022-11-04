import { memo } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Buttons } from '@/components/Button';
import { NavBar } from '@/components/Navigation';
import { HeaderContainer } from '@/layouts/Container';
import { ReactComponent as play } from '@/assets/svg/icon_play_circle.svg';
import logo from '@/assets/logo_blue.png';
import { Icon } from '@/components/Icon';
import { ReactComponent as burger } from '@/assets/svg/icon_navigation.svg';

import { Img, HeaderWrapper, Burger } from './components.styled';

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
        {isTabletOrMobile && (
          <Burger>
            <Icon icon={burger} />
          </Burger>
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
});
