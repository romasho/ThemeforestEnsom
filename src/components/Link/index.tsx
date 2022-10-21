import { Icon } from '../Icon';

import { ReactComponent as arrow } from '@/assets/svg/icon_arrow_right.svg';

import { Button } from './styled';

export const Link = () => {
  return (
    <Button>
      Read more
      <Icon icon={arrow} />
    </Button>
  );
};
