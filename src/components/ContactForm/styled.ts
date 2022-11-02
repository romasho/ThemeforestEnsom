import styled from 'styled-components';

export const FormWrapper = styled.form`
  max-width: 540px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  gap: 20px 30px;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-top: 16px;
`;

interface InputElementProps {
  fullWidth?: boolean;
  variant?: 'textarea' | 'input';
}

export const InputElement = styled.input<InputElementProps>`
  border: 1px solid #9497a1;
  border-radius: 6px;
  padding: 15px 25px;
  outline: none;
  width: ${(props) => (props.fullWidth ? '100%' : '255px')};
  font: ${({ theme }) => theme.font.paragraph.paragraph3bold};
  ${(props) => (props.variant === 'textarea' ? ' resize: none; height: 140px' : '')};

  &:hover {
    border: 1px solid #185cff;
  }

  $:invalid {
    border: 1px solid #c14040;
    color: #c14040;
  }
`;
