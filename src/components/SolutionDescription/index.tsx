import { FC } from 'react';

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
  return (
    <SolutionDescriptionContainer id={headline}>
      <Headline size="h2">{headline}</Headline>
      {img && <img src={img} />}
      {paragraph.map((el, index) => (
        <Paragraph size="p1" key={index} color={theme.colors.grey}>
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
    </SolutionDescriptionContainer>
  );
};
