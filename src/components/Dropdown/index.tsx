import React, { FC, ReactNode, useRef, useState } from 'react';
import styled from 'styled-components';

import { Icon } from '../Icon';
import { NavListItem } from '../Navigation/components.styled';

import { ReactComponent as arrow } from '@/assets/svg/icon_chevron_down_20.svg';
import { useOnClickOutside } from '@/hooks/useOursideClick';

type Props = {
  label: ReactNode;
  items: { value: string; label: string }[];
};

export const Dropdown: FC<Props> = ({ label, items }) => {
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

const Control = styled.button`
  display: flex;
  align-items: center;
  font: ${({ theme }) => theme.font.headline.headline7};
  text-decoration: none;
  border: none;
  background: unset;
  color: ${({ theme }) => theme.colors.grey};

  &:hover {
    color: ${(props) =>
      props.color === 'white' ? props.theme.colors.white : props.theme.colors.black};
  }

  &.active {
    color: ${(props) =>
      props.color === 'white' ? props.theme.colors.white : props.theme.colors.black};
    font-weight: 600;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const Menu = styled.menu`
  font: ${({ theme }) => theme.font.headline.headline7};
  margin: 1px 0 0;
  background: white;
  position: absolute;
  z-index: 2;
  border-radius: 6px;
  ${({ theme }) => theme.boxShadows.shadowDropdown};

  a {
    padding: 10px 20px;
  }
`;
