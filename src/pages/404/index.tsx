import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Headline } from '@/components/Headline';
import { CenterAlignContainer } from '@/layouts/Container';
import { Section } from '@/layouts/Section';

export default () => {
  return (
    <>
      <Section background="light">
        <CenterAlignContainer>
          <Breadcrumbs />
          <Headline size="h2">Sorry, page not found</Headline>
        </CenterAlignContainer>
      </Section>
      <Section background="light">
        <CenterAlignContainer>
          <Headline size="h4">Malformed Url</Headline>
        </CenterAlignContainer>
      </Section>
    </>
  );
};
