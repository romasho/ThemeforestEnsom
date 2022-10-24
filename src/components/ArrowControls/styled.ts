import styled from 'styled-components';

export const ArrowContainer = styled.div`
  width: 235px;
  display: flex;
  justify-content: space-between;
`;

export const ArrowButton = styled.button`
  width: 110px;
  height: 60px;
  border: none;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.background};
  cursor: pointer;
  transition: 0.3s;

  svg {
    width: 30px;
    height: 30px;
    fill: ${(props) => props.theme.colors.secondary};
  }

  &:disabled {
    svg {
      fill: ${(props) => props.theme.colors.helperBlue3};
    }
  }
`;
