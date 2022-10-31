import { useLocation } from 'react-router-dom';
import { FC } from 'react';

import { NavListItem } from '../Navigation/components.styled';

import { ReactComponent as Divider } from '@/assets/svg/icon_divider.svg';

import { BreadcrumbsContainer } from './styled';
import { BreadcrumbsProps } from './types';

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ position, color = 'black' }) => {
  const { pathname } = useLocation();

  const pageName = (str: string) => {
    const mas = str.split('/');
    const pageName = mas[mas.length - 1];
    return (pageName[0].toUpperCase() + pageName.slice(1)).replace('%20', ' ');
  };

  return (
    <BreadcrumbsContainer position={position} color={color}>
      <NavListItem color={color} to="/" end>
        Home
      </NavListItem>
      <Divider />
      <NavListItem color={color} to={pathname}>
        {pageName(pathname)}
      </NavListItem>
    </BreadcrumbsContainer>
  );
};
