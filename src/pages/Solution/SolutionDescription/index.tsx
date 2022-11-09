import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Headline } from '@/components/Headline';
import { Paragraph } from '@/components/Paragraph';
import { theme } from '@/theme';

import { SolutionDescriptionContainer, Li, Ul } from './styled';
import { SolutionDescriptionProps } from './types';

export const SolutionDescription: FC<SolutionDescriptionProps> = ({
  headline,
  paragraph,
  img,
  types,
}) => {
  const isMobile = useMediaQuery({ query: `(max-width: ${theme.breakPoints.mobile})` });

  return (
    <>
      <Headline size={isMobile ? 'h4' : 'h2'}>{headline}</Headline>
      {img && <img src={img} />}
      {paragraph.map((el, index) => (
        <Paragraph size={isMobile ? 'p3' : 'p1'} key={index} color={theme.colors.grey}>
          {el}
        </Paragraph>
      ))}
      {types && (
        <Ul>
          {types.map((el, index) => (
            <Li key={index}>{el}</Li>
          ))}
        </Ul>
      )}
    </>
  );
};
