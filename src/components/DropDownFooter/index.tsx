import { FC, useState } from 'react';

import { Icon } from '@/components/Icon';
import { ReactComponent as arrow } from '@/assets/svg/icon_chevron_down_20.svg';
import { NavigationLink } from '@/components/Footer/styled';

import { Button, DropDownContainer, LinkContainer } from './styled';

interface DropDownListProps {
  title: string;
  answer: { name: string; link: string }[];
}

export const DropDown: FC<DropDownListProps> = ({ title, answer }) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <>
      <DropDownContainer onClick={handleClick}>
        <Button>{title}</Button>
        <Icon
          icon={arrow}
          style={{
            transition: 'all 0.3s ease',
            transform: `rotate(${isOpen ? '0.5turn' : 0})`,
          }}
        />
        {isOpen && (
          <LinkContainer>
            {answer.map(({ name, link }) => (
              <NavigationLink key={name} to={link}>
                {name}
              </NavigationLink>
            ))}
          </LinkContainer>
        )}
      </DropDownContainer>
    </>
  );
};
