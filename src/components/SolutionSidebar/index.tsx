import { FC, useState } from 'react';

import { Aside, Link } from './styled';

interface SolutionSidebarProps {
  data: { headline: string }[];
}

export const SolutionSidebar: FC<SolutionSidebarProps> = ({ data }) => {
  const [active, setActive] = useState(0);

  const handleClick = (id: number) => () => setActive(id);

  return (
    <Aside>
      {data.map(({ headline }, index) => (
        <Link
          href={'#' + headline}
          key={index}
          active={active === index}
          onClick={handleClick(index)}
        >
          {headline}
        </Link>
      ))}
    </Aside>
  );
};
