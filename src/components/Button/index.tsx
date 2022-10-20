import { FC, ReactNode } from 'react';

import { ReactComponent } from '*.svg';

import { Icon } from '@/components/Icon';

import { Button } from './styled';

export type ButtonType =
  | 'fill'
  | 'withIcon'
  | 'withIconNoFill'
  | 'withIconNoFillBig'
  | 'little'
  | 'circle'
  | 'circle-mobile'
  | 'search'
  | 'outlined';

interface ButtonProps {
  children: ReactNode;
  icon?: typeof ReactComponent;
  disabled?: boolean;
  variant: ButtonType;
}

export const Buttons: FC<ButtonProps> = ({ children, icon, disabled, variant }) => {
  return (
    <Button variant={variant} disabled={disabled}>
      {icon && <Icon icon={icon} />}
      {children}
    </Button>
  );
};
