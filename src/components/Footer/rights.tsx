import { theme } from '@/theme';
import { Paragraph } from '@/components/Paragraph';

import { FooterBorder } from './styled';

export const Rights = () => {
  return (
    <FooterBorder>
      <Paragraph size={'p3'} color={theme.colors.helperBlue2}>
        Ensome© 2022 All Rights Reserved
      </Paragraph>
      <div style={{ display: 'flex', maxWidth: '255px', flexGrow: 1 }}>
        <Paragraph size={'p3'} color={theme.colors.helperBlue2}>
          Privacy policy
        </Paragraph>
        <Paragraph size={'p3'} color={theme.colors.helperBlue2}>
          Terms of us
        </Paragraph>
      </div>
    </FooterBorder>
  );
};
