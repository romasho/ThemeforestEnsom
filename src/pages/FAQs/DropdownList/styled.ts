import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% {
      opacity: 0;
      transform: translateY(-50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #9497a1;
  border-radius: 6px;
  padding: 35px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 22px 15px;
    margin-bottom: -5px;
  }
`;

export const Animation = styled.div`
  animation: ${rotate} 0.3s forwards;
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

interface ButtonProps {
  open: boolean;
}

export const Button = styled.button<ButtonProps>`
  border: none;
  background: unset;
  cursor: pointer;

  svg {
    fill: ${(props) => (props.open ? props.theme.colors.primary : props.theme.colors.black)};
    @media (max-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;
