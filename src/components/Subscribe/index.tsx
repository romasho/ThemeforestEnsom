import { memo } from 'react';

import { Headline } from '@/components/Headline';
import { Paragraph } from '@/components/Paragraph';
import { SubscribeContainer } from '@/layouts/Container';
import { SectionWithBorder } from '@/layouts/Section';
import { BaseBlock } from '@/pages/Home/styled';

import { Input, Button, Form } from './styled';

export const Subscribe = memo(() => {
  return (
    <SectionWithBorder background="secondary">
      <SubscribeContainer>
        <BaseBlock>
          <Headline as="h2" size="h2">
            Subscribe to our newsletter
          </Headline>
          <Paragraph size="p1">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium.
          </Paragraph>
        </BaseBlock>
        <Form>
          <Input placeholder="Your email" />
          <Button>Send</Button>
        </Form>
      </SubscribeContainer>
    </SectionWithBorder>
  );
});
