import { FC } from 'react';

import { ReactComponent } from '*.svg';

interface IconPropsType {
  icon: typeof ReactComponent;
  handleClick?: () => void;
  style?: React.CSSProperties;
}

export const Icon: FC<IconPropsType> = ({ icon, handleClick, style }) => {
  const BtnIcon = icon;
  return <BtnIcon onClick={handleClick} style={style} />;
};
