import { FC } from 'react';

import { Paragraph } from '../Paragraph';

import { Container, Numbers } from './styled';

interface CompanyNumbersProps {
  number: string;
  description: string;
}

export const CompanyNumbers: FC<CompanyNumbersProps> = ({ number, description }) => {
  return (
    <Container>
      <Numbers>{number}</Numbers>
      <Paragraph size="p2">{description}</Paragraph>
    </Container>
  );
};
