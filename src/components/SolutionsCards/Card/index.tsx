import { Headline } from '@/components/Headline';
import { Icon } from '@/components/Icon';
import { Link } from '@/components/Link';
import { Paragraph } from '@/components/Paragraph';
import { ReactComponent as icon } from '@/assets/svg/icon_book_database.svg';
import { theme } from '@/theme';

import { CardWrapper, IconWrapper } from './styled';

export const Card = () => {
  return (
    <CardWrapper>
      <IconWrapper>
        <Icon icon={icon} />
      </IconWrapper>
      <Headline size="h4">Data integration</Headline>
      <Paragraph size="p2" color={theme.colors.grey}>
        Big data infrastructure setup and support.; big data quality and security management; big
        data capture, analysis and reporting.
      </Paragraph>
      <Link />
    </CardWrapper>
  );
};
