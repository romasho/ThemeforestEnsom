import styled from 'styled-components';

export const SocialItem = styled.li`
  width: 24px;
  height: 24px;

  svg {
    transition: 0.3s;
    fill: ${(props) => props.theme.colors.white};
    &:hover {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const SocialsContainer = styled.ul`
  display: flex;
  max-width: 225px;
  padding: 0;
  flex-grow: 1;
  justify-content: space-between;
  list-style: none;
  margin 0;
  gap: 15px;
`;
