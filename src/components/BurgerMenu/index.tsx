import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

import { ROUTE_NAMES } from '@/constants';
import { DropDownMenu } from '@/components/DropDownMenu';
import { Headline } from '@/components/Headline';
import { Socials } from '@/components/Socials';
import { theme } from '@/theme';

import { BurgerMenuWrapper, Block } from './styled';

interface BurgerMenuProps {
  open: boolean;
  burgerMenu: React.MutableRefObject<null>;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ open, burgerMenu }) => {
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${theme.breakPoints.mobile})` });

  return (
    <>
      {isTabletOrMobile && (
        <BurgerMenuWrapper open={open} ref={burgerMenu}>
          <Block>
            <DropDownMenu title="Home" dropDownItems={[{ name: 'Home', link: ROUTE_NAMES.HOME }]} />
          </Block>
          <Block>
            <DropDownMenu
              title="Solutions"
              dropDownItems={[{ name: 'Solutions', link: ROUTE_NAMES.SOLUTIONS }]}
            />
          </Block>
          <Block>
            <DropDownMenu
              title="Pages"
              dropDownItems={[
                { name: 'FAQ', link: ROUTE_NAMES.FAQS },
                { name: 'Our Team', link: ROUTE_NAMES.OUR_TEAM },
                { name: 'About us', link: ROUTE_NAMES.ABOUT_US },
              ]}
            />
          </Block>
          <Block>
            <DropDownMenu
              title="Services"
              dropDownItems={[{ name: 'Services', link: ROUTE_NAMES.SERVICES }]}
            />
          </Block>
          <Block>
            <DropDownMenu title="Blog" dropDownItems={[{ name: 'Blog', link: ROUTE_NAMES.BLOG }]} />
          </Block>
          <Block>
            <DropDownMenu
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
        </BurgerMenuWrapper>
      )}
    </>
  );
};
