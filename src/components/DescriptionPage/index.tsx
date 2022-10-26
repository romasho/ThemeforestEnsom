import { FC } from 'react';

import { Breadcrumbs } from '../Breadcrumbs';
import { Headline } from '../Headline';

import { Text, PageDescriptionWrapper, PageDescriptionContainer } from './styled';

interface DescriptionPageProps {
  page: string;
  headline: string;
  description: string;
}

export const DescriptionPage: FC<DescriptionPageProps> = ({ page, headline, description }) => {
  return (
    <PageDescriptionContainer>
      <Breadcrumbs />
      <PageDescriptionWrapper>
        <Headline size="h6">
          <span>{page}</span>
        </Headline>
        <Headline as="h1" size="h1">
          {headline}
        </Headline>
        <Text>{description}</Text>
      </PageDescriptionWrapper>
    </PageDescriptionContainer>
  );
};
