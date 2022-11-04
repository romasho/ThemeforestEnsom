import styled from 'styled-components';

import { Container } from '@/layouts/Container';

export const NewsContainer = styled.div`
  max-width: 635px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 30px;
  align-items: stretch;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const InfoBlockWrapper = styled.div`
  display: inline-flex;
  gap: 30px;
  margin: -5px 0 10px 0;

  @media (max-width: 768px) {
    gap: 17px 24px;
    flex-wrap: wrap;

    span:nth-child(1) {
      order: 1;
    }

    span:nth-child(2) {
      order: 3;
    }

    span:nth-child(3) {
      order: 2;
    }
  }
`;

export const InfoBlock = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey};

  svg {
    fill: ${({ theme }) => theme.colors.grey};
  }
`;

export const Quotes = styled.div`
  max-width: 540px;
  width: 100%;
  font: ${({ theme }) => theme.font.paragraph.paragraph1};
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  padding-left: 35px;
  margin-left: 95px;

  @media (max-width: 768px) {
    font: ${({ theme }) => theme.font.paragraph.paragraph2};
    margin-left: 0px;
    padding-left: 28px;
  }
`;

export const PopularNewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: flex-start;
  max-width: 445px;
`;

export const TagsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: flex-start;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const StyledContainer = styled(Container)`
  align-items: flex-start;
`;
