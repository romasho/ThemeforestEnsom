import { useLocation } from 'react-router-dom';

import { NavListItem } from '../Navigation/components.styled';

import { ReactComponent as Divider } from '@/assets/svg/icon_divider.svg';

import { BreadcrumbsContainer } from './styled';

export const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const pageName = (str: string) => {
    const mas = str.split('/');
    const pageName = mas[mas.length - 1];
    return pageName[0].toUpperCase() + pageName.slice(1);
  };

  return (
    <BreadcrumbsContainer>
      <NavListItem to="/" end>
        Home
      </NavListItem>
      <Divider />
      <NavListItem to={pathname}>{pageName(pathname)}</NavListItem>
    </BreadcrumbsContainer>
  );
};
