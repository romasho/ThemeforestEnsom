import styled from 'styled-components';

export const Container = styled.div`
  width: 160px;
  height: 94px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

export const Numbers = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 112px;
  display: flex;
  align-items: center;
  letter-spacing: -0.025em;
  height: 56px;
  color: ${(props) => props.theme.colors.primary};
`;
