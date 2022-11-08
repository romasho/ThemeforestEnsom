import { memo, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Socials } from '../Socials';
import { Headline } from '../Headline';
import { DropDown } from '../DropDownFooter';

import { Buttons } from '@/components/Button';
import { NavBar } from '@/components/Navigation';
import { HeaderContainer } from '@/layouts/Container';
import { ReactComponent as play } from '@/assets/svg/icon_play_circle.svg';
import logo from '@/assets/logo_blue.png';
import { Icon } from '@/components/Icon';
import { ReactComponent as burger } from '@/assets/svg/icon_navigation.svg';
import { ReactComponent as close } from '@/assets/svg/icon_dismiss.svg';
import { ROUTE_NAMES } from '@/constants';
import { useOnClickOutside } from '@/hooks/useOursideClick';

import { Img, HeaderWrapper, Burger, BurgerMenu, Block } from './components.styled';

export const Header = memo(() => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [open, setOpen] = useState(false);
  const node = useRef(null);
  const burgerIcon = useRef(null);

  const handleClick = () => setOpen((prev) => !prev);
  const handleClose = () => {
    if (open) handleClick();
  };

  useOnClickOutside(node, handleClose, burgerIcon);

  return (
    <>
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
            <Burger onClick={handleClick} ref={burgerIcon}>
              <Icon icon={open ? close : burger} />
            </Burger>
          )}
        </HeaderContainer>
      </HeaderWrapper>
      {isTabletOrMobile && (
        <BurgerMenu open={open} ref={node}>
          <Block>
            <DropDown title="Home" dropDownItems={[{ name: 'Home', link: ROUTE_NAMES.HOME }]} />
          </Block>
          <Block>
            <DropDown
              title="Solutions"
              dropDownItems={[{ name: 'Solutions', link: ROUTE_NAMES.SOLUTIONS }]}
            />
          </Block>
          <Block>
            <DropDown
              title="Pages"
              dropDownItems={[
                { name: 'FAQ', link: ROUTE_NAMES.FAQS },
                { name: 'Our Team', link: ROUTE_NAMES.OUR_TEAM },
                { name: 'About us', link: ROUTE_NAMES.ABOUT_US },
              ]}
            />
          </Block>
          <Block>
            <DropDown
              title="Services"
              dropDownItems={[{ name: 'Services', link: ROUTE_NAMES.SERVICES }]}
            />
          </Block>
          <Block>
            <DropDown title="Blog" dropDownItems={[{ name: 'Blog', link: ROUTE_NAMES.BLOG }]} />
          </Block>
          <Block>
            <DropDown
              title="Contacts"
              dropDownItems={[{ name: 'Contacts', link: ROUTE_NAMES.CONTACTS }]}
            />
          </Block>
          <Block>
            <Headline size="h6">Follow us</Headline>
            <Socials
              socials={{
                facebook: undefined,
                twitter: undefined,
                linkedin: undefined,
                youtube: undefined,
                dribbble: undefined,
                behance: undefined,
              }}
            />
          </Block>
        </BurgerMenu>
      )}
    </>
  );
});
