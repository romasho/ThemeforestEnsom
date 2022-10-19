import { FC } from 'react';

import { ReactComponent } from '*.svg';

interface IconPropsType {
  icon: typeof ReactComponent;
  handleClick?: () => void;
}

export const Icon: FC<IconPropsType> = ({ icon, handleClick }) => {
  const BtnIcon = icon;
  return <BtnIcon onClick={handleClick} />;
};
