import { FC, useState } from 'react';

import { Aside, Link } from './styled';

interface SolutionSidebarProps {
  data: { headline: string }[];
  active: string;
}

export const SolutionSidebar: FC<SolutionSidebarProps> = ({ data, active }) => {
  return (
    <Aside>
      {data.map(({ headline }, index) => (
        <Link href={'#' + headline} key={index} active={active === headline}>
          {headline}
        </Link>
      ))}
    </Aside>
  );
};
