import { FC, ReactNode, useRef, useState } from 'react';

import { Icon } from '@/components/Icon';
import { NavListItem } from '@/components/Header/Navigation/components.styled';
import { ReactComponent as arrow } from '@/assets/svg/icon_chevron_down_20.svg';
import { useOnClickOutside } from '@/hooks/useOutsideClick';

import { Menu, Control } from './styled';

interface HeaderMenuProps {
  label: ReactNode;
  items: { value: string; label: string }[];
}

export const HeaderMenu: FC<HeaderMenuProps> = ({ label, items }) => {
  const [isOpen, setOpen] = useState(false);
  const node = useRef(null);

  const handleOpen = () => setOpen(!isOpen);
  const handleClose = () => setOpen(false);
  useOnClickOutside(node, handleClose);

  return (
    <div ref={node}>
      <Control onClick={handleOpen} type="button">
        {label} <Icon icon={arrow} />
      </Control>
      {isOpen && (
        <Menu>
          {items.map((item) => (
            <NavListItem to={item.value} key={item.value}>
              {item.label}
            </NavListItem>
          ))}
        </Menu>
      )}
    </div>
  );
};
