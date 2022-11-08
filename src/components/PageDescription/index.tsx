import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Headline } from '@/components/Headline';

import { Text, PageDescriptionWrapper, PageDescriptionContainer } from './styled';

interface PageDescriptionProps {
  page: string;
  headline: string;
  description: string;
}

export const PageDescription: FC<PageDescriptionProps> = ({ page, headline, description }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <PageDescriptionContainer>
      <Breadcrumbs />
      <PageDescriptionWrapper>
        <Headline size="h6">
          <span>{page}</span>
        </Headline>
        <Headline as="h1" size={isMobile ? 'h3' : 'h1'}>
          {headline}
        </Headline>
        <Text>{description}</Text>
      </PageDescriptionWrapper>
    </PageDescriptionContainer>
  );
};
