import styled from 'styled-components';

export const HeadlineWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const ListItem = styled.li`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;
