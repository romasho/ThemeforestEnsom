import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Paragraph } from '../Paragraph';

import { Container, Numbers } from './styled';

interface CompanyNumbersProps {
  number: string;
  description: string;
}

export const CompanyNumbers: FC<CompanyNumbersProps> = ({ number, description }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <Container>
      <Numbers>{number}</Numbers>
      <Paragraph size={isDesktopOrLaptop ? 'p3' : 'p2'}>{description}</Paragraph>
    </Container>
  );
};
