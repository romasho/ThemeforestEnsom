import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { Headline } from '@/components/Headline';
import { Paragraph } from '@/components/Paragraph';
import { Buttons } from '@/components/Button';
import { CenterAlignContainer } from '@/layouts/Container';
import { Section } from '@/layouts/Section';
import { BaseBlockCenter } from '@/pages/Home/styled';
import { ROUTE_NAMES } from '@/constants';

export const Contacts = memo(() => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate(ROUTE_NAMES.CONTACTS);
  };

  return (
    <Section background="dark">
      <CenterAlignContainer>
        <BaseBlockCenter>
          <Headline as="h2" size={isMobile ? 'h3' : 'h2'}>
            Do you need help?
          </Headline>
          <Paragraph size={isMobile ? 'p3' : 'p2'}>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi.
          </Paragraph>
          <Buttons variant="fill" onClick={navigateToContacts}>
            Contact Us
          </Buttons>
        </BaseBlockCenter>
      </CenterAlignContainer>
    </Section>
  );
});
