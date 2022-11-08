import { FC, useState } from 'react';

import { Icon } from '@/components/Icon';
import { ReactComponent as arrow } from '@/assets/svg/icon_chevron_down_20.svg';
import { ReactComponent as arrowRight } from '@/assets/svg/icon_arrow_right.svg';

import { Button, DropDownContainer, LinkContainer, DropDownLink, Controls } from './styled';

interface DropDownListProps {
  title: string;
  dropDownItems: { name: string; link: string }[];
}

export const DropDown: FC<DropDownListProps> = ({ title, dropDownItems }) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <>
      <DropDownContainer>
        <Controls onClick={handleClick}>
          <Button>{title}</Button>
          <Icon
            icon={arrow}
            style={{
              transition: 'all 0.3s ease',
              transform: `rotate(${isOpen ? '0.5turn' : 0})`,
            }}
          />
        </Controls>

        {isOpen && (
          <LinkContainer>
            {dropDownItems.map(({ name, link }) => (
              <DropDownLink key={name} to={link}>
                {name} <Icon icon={arrowRight} />
              </DropDownLink>
            ))}
          </LinkContainer>
        )}
      </DropDownContainer>
    </>
  );
};
