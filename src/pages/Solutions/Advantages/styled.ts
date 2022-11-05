import styled from 'styled-components';

export const HeadlineWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  svg {
    fill: ${({ theme }) => theme.colors.primary};
    width: 25px;
    height: 25px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  gap: 15px;
  flex-direction: column;
  margin-top: 10px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;
