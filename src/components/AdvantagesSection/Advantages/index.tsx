import { FC } from 'react';

import { Icon } from '@/components/Icon';
import { ReactComponent as checkmark } from '@/assets/svg/icon_checkmark.svg';
import { Headline } from '@/components/Headline';
import { Paragraph } from '@/components/Paragraph';
import { theme } from '@/theme';

import { HeadlineWrapper, ListItem } from './styled';

interface AdvantagesProps {
  title: string;
  description: string;
}

export const Advantages: FC<AdvantagesProps> = ({ title, description }) => {
  return (
    <ListItem>
      <HeadlineWrapper>
        <Icon icon={checkmark} />
        <Headline size="h6">{title}</Headline>
      </HeadlineWrapper>
      <Paragraph size="p2" color={theme.colors.grey}>
        {description}
      </Paragraph>
    </ListItem>
  );
};
