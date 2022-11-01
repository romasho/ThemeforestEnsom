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
`;

export const InfoBlockWrapper = styled.div`
  display: inline-flex;
  gap: 30px;
  margin: -5px 0 10px 0;
`;

export const InfoBlock = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${(props) => props.theme.colors.grey};

  svg {
    fill: ${(props) => props.theme.colors.grey};
  }
`;

export const Quotes = styled.div`
  max-width: 540px;
  width: 100%;
  font: ${(props) => props.theme.font.paragraph.paragraph1};
  letter-spacing: -0.015em;
  color: ${(props) => props.theme.colors.black};
  border-left: 4px solid ${(props) => props.theme.colors.primary};
  padding-left: 35px;
  margin-left: 95px;
`;

export const PopularNewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: flex-start;
  max-width: 445px;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const StyledContainer = styled(Container)`
  align-items: flex-start;
`;
