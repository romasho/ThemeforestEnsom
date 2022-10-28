import styled from 'styled-components';

export const Text = styled.p`
  font: ${(props) => props.theme.font.paragraph.paragraph1};
  color: ${(props) => props.theme.colors.grey};
  max-width: 730px;
  text-align: center;
  letter-spacing: -0.015em;
`;

export const PageDescriptionWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-bottom: 0;
  padding-top: 100px;
`;

export const PageDescriptionContainer = styled.div`
  max-width: 1110px;
  width: calc(100% - 32px);
  margin: 0 auto;
  position: relative;
`;
