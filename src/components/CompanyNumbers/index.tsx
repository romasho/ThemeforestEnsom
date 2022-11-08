import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Paragraph } from '@/components/Paragraph';
import { theme } from '@/theme';

import { Container, Numbers } from './styled';

interface CompanyNumbersProps {
  number: string;
  description: string;
}

export const CompanyNumbers: FC<CompanyNumbersProps> = ({ number, description }) => {
  const isMobile = useMediaQuery({ query: `(max-width: ${theme.breakPoints.mobile})` });

  return (
    <Container>
      <Numbers>{number}</Numbers>
      <Paragraph size={isMobile ? 'p3' : 'p2'}>{description}</Paragraph>
    </Container>
  );
};
