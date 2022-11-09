import styled from 'styled-components';

type SectionProps = {
  background: 'dark' | 'light' | 'secondary';
};

export const Section = styled.section<SectionProps>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
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

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    flex-wrap: wrap;
  }
`;

export const SectionWithBorder = styled(Section)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.helperBlue2};
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    text-align: center;
  }
`;

export const SectionColumn = styled(Section)`
  flex-direction: column;
`;
