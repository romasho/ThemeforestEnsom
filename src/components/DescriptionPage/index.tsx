import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Breadcrumbs } from '../Breadcrumbs';
import { Headline } from '../Headline';

import { Text, PageDescriptionWrapper, PageDescriptionContainer } from './styled';

interface DescriptionPageProps {
  page: string;
  headline: string;
  description: string;
}

export const DescriptionPage: FC<DescriptionPageProps> = ({ page, headline, description }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <PageDescriptionContainer>
      <Breadcrumbs />
      <PageDescriptionWrapper>
        <Headline size="h6">
          <span>{page}</span>
        </Headline>
        <Headline as="h1" size={isDesktopOrLaptop ? 'h3' : 'h1'}>
          {headline}
        </Headline>
        <Text>{description}</Text>
      </PageDescriptionWrapper>
    </PageDescriptionContainer>
  );
};
