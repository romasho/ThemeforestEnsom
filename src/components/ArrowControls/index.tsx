import { Icon } from '../Icon';

import { ReactComponent as leftIcon } from '@/assets/svg/icon_arrow__left.svg';
import { ReactComponent as rightIcon } from '@/assets/svg/icon_arrow_right.svg';

import { ArrowContainer, ArrowButton } from './styled';

export const ArrowControls = ({ left, right }) => {
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
