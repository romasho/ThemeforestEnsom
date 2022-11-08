import styled from 'styled-components';

export const FormWrapper = styled.form`
  max-width: ${({ theme }) => theme.width.wideBlock};
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  gap: 20px 30px;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-top: 16px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    margin-top: 0;
  }
`;

interface InputElementProps {
  fullWidth?: boolean;
  variant?: 'textarea' | 'input';
  invalid: boolean;
}

export const InputElement = styled.input<InputElementProps>`
  border: 1px solid #9497a1;
  border-radius: 6px;
  padding: 15px 25px;
  outline: none;
  width: ${(props) => (props.fullWidth ? '100%' : '${({ theme }) => theme.width.slimBlock}')};
  font: ${({ theme }) => theme.font.paragraph.paragraph3bold};
  ${(props) => (props.variant === 'textarea' ? ' resize: none; height: 140px' : '')};

  &:hover {
    border: 1px solid #185cff;
  }

  ${({ invalid, theme }) =>
    invalid
      ? `border: 1px solid ${theme.colors.error};
  color: ${theme.colors.error};`
      : ''}
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.error};
`;

export const Label = styled.label<Partial<InputElementProps>>`
  width: ${(props) => (props.fullWidth ? '100%' : '${({ theme }) => theme.width.slimBlock}')};
`;
