import { FC, ReactNode } from 'react';

import { ReactComponent } from '*.svg';

import { Headline } from '@/components/Headline';
import { Icon } from '@/components/Icon';

import { Button } from './components.styled';

interface ButtonProps {
  children: ReactNode;
  icon?: typeof ReactComponent;
  disabled?: boolean;
}

export const Buttons: FC<ButtonProps> = ({ children, icon, disabled }) => {
  return (
    <Button disabled={disabled}>
      {icon && <Icon icon={icon} />}
      <Headline as={'h6'}>{children}</Headline>
    </Button>
  );
};
