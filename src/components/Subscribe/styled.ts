import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  max-width: 445px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  border: none;
  height: 54px;
  width: 125px;
  font: ${({ theme }) => theme.font.headline.headline6};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 100%;
    position: static;
  }
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.colors.helperBlue3};
  border-radius: 6px;
  max-width: 445px;
  width: 100%;
  height: 54px;
  border: 0;
  outline: none;
  position: relative;
  font: ${({ theme }) => theme.font.paragraph.paragraph3bold};
  padding: 25px 15px;
  color: ${({ theme }) => theme.colors.black};

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.helperBlue2};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    background: transparent;
    border: 1px solid #607d94;
    color: ${({ theme }) => theme.colors.white};
  }
`;
