import styled from 'styled-components';

export const Tag = styled.span`
  width: 61px;
  height: 30px;
  border: 1px solid ${(props) => props.theme.colors.background};
  border-radius: 6px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 800;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.015em;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
`;
