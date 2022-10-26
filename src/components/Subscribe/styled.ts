import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  border: none;
  height: 54px;
  width: 125px;
  font: ${(props) => props.theme.font.headline.headline6};
`;

export const Input = styled.input`
  background: ${(props) => props.theme.colors.helperBlue3};
  border-radius: 6px;
  width: 445px;
  height: 54px;
  border: 0;
  outline: none;
  position: relative;
  font: ${(props) => props.theme.font.paragraph.paragraph3bold};
  padding: 25px 15px;
  color: ${(props) => props.theme.colors.black};
`;
