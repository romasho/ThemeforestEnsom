import styled from 'styled-components';

export const SocialItem = styled.li`
  height: auto;
  svg {
    transition: 0.3s;
    fill: ${({ theme }) => theme.colors.white};
    &:hover {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;

interface SocialsContainerProps {
  small: boolean | undefined;
}

export const SocialsContainer = styled.ul<SocialsContainerProps>`
  display: flex;
  max-width: 225px;
  padding: 0;
  flex-grow: 1;
  justify-content: space-between;
  list-style: none;
  margin 0;
  gap: ${(props) => (props.small ? '8px' : '15px')};;

  svg {
    width: ${(props) => (props.small ? '15px' : '25px')};
    height: ${(props) => (props.small ? '15px' : '25px')};
  }

  @media (max-width: 768px) {
    gap: 12px;
  }
`;
