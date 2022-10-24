import styled from 'styled-components';

type SectionProps = {
  background: 'dark' | 'light' | 'secondary';
};

export const Section = styled.section<SectionProps>`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${(props) => {
    switch (props.background) {
      case 'dark':
        return props.theme.colors.background;
      case 'light':
        return props.theme.colors.white;
      case 'secondary':
        return props.theme.colors.secondary;
    }
  }};
`;

export const SectionWithBorder = styled(Section)`
  border-bottom: 1px solid ${(props) => props.theme.colors.helperBlue2};
`;
