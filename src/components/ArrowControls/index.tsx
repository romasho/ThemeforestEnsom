import { FC } from 'react';

import { Icon } from '../Icon';

import { ReactComponent as leftIcon } from '@/assets/svg/icon_arrow__left.svg';
import { ReactComponent as rightIcon } from '@/assets/svg/icon_arrow_right.svg';

import { ArrowContainer, ArrowButton } from './styled';

interface ArrowControlsProps {
  left: React.RefObject<HTMLButtonElement>;
  right: React.RefObject<HTMLButtonElement>;
}

export const ArrowControls: FC<ArrowControlsProps> = ({ left, right }) => {
  return (
    <ArrowContainer>
      <ArrowButton ref={left}>
        <Icon icon={leftIcon} />
      </ArrowButton>
      <ArrowButton ref={right}>
        <Icon icon={rightIcon} />
      </ArrowButton>
    </ArrowContainer>
  );
};
