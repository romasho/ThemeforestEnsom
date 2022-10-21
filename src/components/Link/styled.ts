import styled from 'styled-components';

export const Button = styled.button`
  width: 94px;
  height: 24px;
  outline: 0;
  border: 0;
  background: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font: ${(props) => props.theme.font.headline.headline7};
  letter-spacing: -0.01em;
  transition: 0.3s;

  svg {
    fill: ${(props) => props.theme.colors.primary};
    width: 20px;
    height: 20px;
  }

  &:hover {
    color: ${(props) => props.theme.colors.black};

    svg {
      fill: ${(props) => props.theme.colors.black};
    }
  }
`;
