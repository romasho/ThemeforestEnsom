import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

import { Icon } from '../Icon';

import { ReactComponent as arrow } from '@/assets/svg/icon_arrow_right.svg';

import { Button } from './styled';

interface LinkProps {
  to: string;
}

export const Link: FC<LinkProps> = ({ to }) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(to);
  };

  return (
    <Button onClick={navigateTo}>
      Read more
      <Icon icon={arrow} />
    </Button>
  );
};
