import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

import { ReactComponent as checkmark } from '@/assets/svg/icon_checkmark.svg';
import { Headline } from '@/components/Headline';
import { Paragraph } from '@/components/Paragraph';
import { Icon } from '@/components//Icon';
import { theme } from '@/theme';

import { ServiceDescriptionContainer, Li, Ul, Img, Box, TextWrapper } from './styled';
import { ServiceDescriptionProps } from './types';

export const ServiceDescription: FC<ServiceDescriptionProps> = ({
  headline,
  paragraph,
  img,
  marks,
}) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <ServiceDescriptionContainer id={headline}>
      <TextWrapper>
        <Headline size={isDesktopOrLaptop ? 'h4' : 'h2'}>{headline}</Headline>
        <Paragraph size={isDesktopOrLaptop ? 'p3' : 'p1'} color={theme.colors.grey}>
          {paragraph}
        </Paragraph>
      </TextWrapper>

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
