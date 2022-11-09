import styled from 'styled-components';

import { Section } from '@/layouts/Section/index';
import { Container } from '@/layouts/Container';

export const ContactContainer = styled(Container)`
  align-items: flex-start;
  flex-wrap: nowrap;
  padding-top: 0;
  gap: 100px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const TeamMemberInfo = styled.div`
  width: ${({ theme }) => theme.width.wideBlock};
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

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    margin-top: -5px;
  }
`;

export const Img = styled.img`
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 100%;
  }
`;

export const EmployeeSection = styled(Section)`
  flex-direction: column;
`;
