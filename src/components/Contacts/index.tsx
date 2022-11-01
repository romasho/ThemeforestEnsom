import { memo } from 'react';

import { Headline } from '@/components/Headline';
import { Paragraph } from '@/components/Paragraph';
import { Buttons } from '@/components/Button';
import { CenterAlignContainer } from '@/layouts/Container';
import { Section } from '@/layouts/Section';
import { BaseBlockCenter } from '@/pages/Home/styled';

export const Contacts = memo(() => {
  return (
    <Section background="dark">
      <CenterAlignContainer>
        <BaseBlockCenter>
          <Headline as="h2" size="h2">
            Do you need help?
          </Headline>
          <Paragraph size="p2">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi.
          </Paragraph>
          <Buttons variant="fill">Contact Us</Buttons>
        </BaseBlockCenter>
      </CenterAlignContainer>
    </Section>
  );
});
