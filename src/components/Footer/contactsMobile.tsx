import { useMediaQuery } from 'react-responsive';

import { Service, Link } from '@/constants';
import { theme } from '@/theme';
import { DropDownMenu } from '@/components/DropDownMenu';
import { Paragraph } from '@/components/Paragraph';

export const ContactsMobile = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const render = isMobile ? (
    <>
      <Paragraph size={'p3'} color={theme.colors.grey}>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
        nisi ut aliquid ex ea commodi.
      </Paragraph>
      <DropDownMenu title={'Quick link'} dropDownItems={Link} />
      <DropDownMenu title={'Service'} dropDownItems={Service} />
      <DropDownMenu title={'Contact info'} dropDownItems={Service} />
    </>
  ) : null;
  return render;
};
