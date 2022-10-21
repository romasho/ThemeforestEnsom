import styled from 'styled-components';

export const CardContainer = styled.div`
  box-shadow: ${(props) => props.theme.boxShadows.shadowCard3};
  width: 255px;
  height: 525px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  display: flex;
  row-gap: 30px;
  flex-direction: column;
  padding: 35px 20px;
  align-items: center;
`;

export const AdvantagesList = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 15px;
`;

export const AdvantagesItem = styled.li`
  font: ${(props) => props.theme.font.paragraph.paragraph3};
  color: ${(props) => props.theme.colors.black};
  display: flex;
  align-items: center;

  svg {
    fill: ${(props) => props.theme.colors.primary};
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
