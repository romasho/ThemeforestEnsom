import { FC } from 'react';

import { Icon } from '@/components/Icon';
import { ReactComponent as leftIcon } from '@/assets/svg/icon_arrow__left.svg';
import { ReactComponent as rightIcon } from '@/assets/svg/icon_arrow_right.svg';

import { ArrowContainer, ArrowButton } from './styled';

interface ControlArrowsProps {
  left: React.RefObject<HTMLButtonElement>;
  right: React.RefObject<HTMLButtonElement>;
}

export const ControlArrows: FC<ControlArrowsProps> = ({ left, right }) => {
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
