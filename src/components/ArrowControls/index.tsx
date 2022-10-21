import { Icon } from '../Icon';

import { ReactComponent as left } from '@/assets/svg/icon_arrow__left.svg';
import { ReactComponent as right } from '@/assets/svg/icon_arrow_right.svg';

import { ArrowContainer, ArrowButton } from './styled';

export const ArrowControls = () => {
  return (
    <ArrowContainer>
      <ArrowButton>
        <Icon icon={left} />
      </ArrowButton>
      <ArrowButton>
        <Icon icon={right} />
      </ArrowButton>
    </ArrowContainer>
  );
};
