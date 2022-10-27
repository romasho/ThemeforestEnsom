import styled from 'styled-components';

export const Aside = styled.aside`
  width: 255px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 45px;
  left: 0;
`;
type LinkProps = {
  active: boolean;
};

export const Link = styled.a<LinkProps>`
  text-decoration: none;
  font: ${(props) => props.theme.font.headline.headline7};
  padding: 18px 30px;
  color: ${(props) => props.theme.colors.black};
  border-left: 5px solid ${(props) => props.theme.colors.helperBlue3};
  ${(props) => (props.active ? `border-left: 5px solid ${props.theme.colors.primary};` : '')}
`;
