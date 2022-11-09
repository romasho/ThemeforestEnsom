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
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font: ${({ theme }) => theme.font.headline.headline7};
  letter-spacing: -0.01em;
  transition: 0.3s;

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.black};

    svg {
      fill: ${({ theme }) => theme.colors.black};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    svg {
      width: 20px !important;
      height: 20px !important;
    }
  }
`;
