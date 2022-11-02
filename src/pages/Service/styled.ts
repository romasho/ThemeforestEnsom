import styled from 'styled-components';

import { Container } from '@/layouts/Container';

export const ContainerHeadline = styled(Container)`
  padding-bottom: 90px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
`;

export const Link = styled.a`
  text-decoration: none;
  font: ${({ theme }) => theme.font.paragraph.paragraph1};
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};

    svg {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ServiceSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  max-width: 445px;
  width: 100%;
  gap: 30px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 445px;
  gap: 30px;
`;
