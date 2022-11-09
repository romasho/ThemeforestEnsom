import { memo, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Buttons } from '@/components/Button';
import { NavBar } from '@/components/Header/Navigation';
import { HeaderContainer } from '@/layouts/Container';
import { ReactComponent as play } from '@/assets/svg/icon_play_circle.svg';
import logo from '@/assets/logo_blue.png';
import { Icon } from '@/components/Icon';
import { ReactComponent as burger } from '@/assets/svg/icon_navigation.svg';
import { ReactComponent as close } from '@/assets/svg/icon_dismiss.svg';
import { useOnClickOutside } from '@/hooks/useOutsideClick';
import { VideoPlayer } from '@/components/Video';
import { BurgerMenu } from '@/components/BurgerMenu';

import { Img, HeaderWrapper, Burger } from './components.styled';

export const Header = memo(() => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const [openPlayer, setOpenPlayer] = useState(false);
  const burgerMenu = useRef(null);
  const burgerIcon = useRef(null);
  const player = useRef(null);

  const toggleBurger = () => setOpenBurgerMenu((prev) => !prev);
  const closeBurger = () => {
    if (openBurgerMenu) toggleBurger();
  };

  const togglePlayer = () => setOpenPlayer((prev) => !prev);
  const closePlayer = () => {
    if (openPlayer) togglePlayer();
  };

  useOnClickOutside(player, closePlayer);
  useOnClickOutside(burgerMenu, closeBurger, burgerIcon);

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <Img src={logo} alt="" />
          {!isTabletOrMobile && (
            <>
              <NavBar />
              <Buttons variant="withIcon" icon={play} onClick={togglePlayer}>
                Watch the demo
              </Buttons>
            </>
          )}
          {isTabletOrMobile && (
            <Burger onClick={toggleBurger} ref={burgerIcon}>
              <Icon icon={openBurgerMenu ? close : burger} />
            </Burger>
          )}
        </HeaderContainer>
      </HeaderWrapper>
      <BurgerMenu open={openBurgerMenu} burgerMenu={burgerMenu} />
      <VideoPlayer open={openPlayer} player={player} />
    </>
  );
});
