import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

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
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <ListItem>
      <HeadlineWrapper>
        <Icon icon={checkmark} />
        <Headline size={isMobile ? 'h5' : 'h6'}>{title}</Headline>
      </HeadlineWrapper>
      <Paragraph size="p2" color={theme.colors.grey}>
        {description}
      </Paragraph>
    </ListItem>
  );
};
