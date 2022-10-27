import { FC } from 'react';

import { ReactComponent as checkmark } from '@/assets/svg/icon_checkmark.svg';
import { Headline } from '@/components/Headline';
import { Paragraph } from '@/components/Paragraph';
import { Icon } from '@/components//Icon';
import { theme } from '@/theme';

import { ServiceDescriptionContainer, Li, Ul, Img, Box } from './styled';
import { ServiceDescriptionProps } from './types';

export const ServiceDescription: FC<ServiceDescriptionProps> = ({
  headline,
  paragraph,
  img,
  marks,
}) => {
  return (
    <ServiceDescriptionContainer id={headline}>
      <Headline size="h2">{headline}</Headline>
      <Paragraph size="p1" color={theme.colors.grey}>
        {paragraph}
      </Paragraph>
      <Box>
        {img && <Img marks={marks} src={img} />}
        {marks && (
          <Ul>
            {marks.map((el, index) => {
              return (
                <Li key={index}>
                  <Icon icon={checkmark} />
                  {el}
                </Li>
              );
            })}
          </Ul>
        )}
      </Box>
    </ServiceDescriptionContainer>
  );
};
