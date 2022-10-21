import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 255px;
  height: 248px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.colors.white};
  padding: 25px;
  row-gap: 10px;
  box-shadow: ${(props) => props.theme.boxShadows.shadowCard2};

  &:nth-child(2) {
    margin-top: 55px;
  }

  &:nth-child(3) {
    margin-top: -50px;
  }

  svg {
    width: 45px;
    height: 47px;
    fill: ${(props) => props.theme.colors.primary};
    margin-bottom: 5px;
  }
`;
