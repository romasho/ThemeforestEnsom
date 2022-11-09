import styled from 'styled-components';

export const CardContainer = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadows.shadowCard3};
  width: ${({ theme }) => theme.width.slimBlock};
  height: 525px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  display: flex;
  row-gap: 30px;
  flex-direction: column;
  padding: 35px 20px;
  align-items: center;
  margin-bottom: 10px;
`;

export const AdvantagesList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 15px;
`;

export const AdvantagesItem = styled.li`
  font: ${({ theme }) => theme.font.paragraph.paragraph3};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;

  svg {
    fill: ${({ theme }) => theme.colors.primary};
    margin-right: 10px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  width: 215px;
  justify-content: space-between;
`;

export const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;
