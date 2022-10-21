import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px;
  row-gap: 25px;
  box-shadow: ${(props) => props.theme.boxShadows.shadowCard3};
  width: 350px;
`;

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 25px;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
