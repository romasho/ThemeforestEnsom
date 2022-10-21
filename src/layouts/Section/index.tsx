import styled from 'styled-components';

type SectionProps = {
  background: 'dark' | 'light';
};

export const Section = styled.section<SectionProps>`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.background === 'light' ? props.theme.colors.white : props.theme.colors.background};
`;
