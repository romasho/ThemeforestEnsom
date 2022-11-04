import styled from 'styled-components';

import { Section } from '@/layouts/Section/index';
import { Container } from '@/layouts/Container';

export const ContactContainer = styled(Container)`
  align-items: flex-start;
  flex-wrap: nowrap;
  padding-top: 0;
  gap: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const TeamMemberInfo = styled.div`
  width: 540px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 20px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;

  &:last-child {
    gap: 10px;
  }

  svg {
    fill: grey;
  }

  @media (max-width: 768px) {
    margin-top: -5px;
  }
`;

export const Img = styled.img`
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const EmployeeSection = styled(Section)`
  flex-direction: column;
`;
