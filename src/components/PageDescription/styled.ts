import styled from 'styled-components';

export const Text = styled.p`
  font: ${({ theme }) => theme.font.paragraph.paragraph1};
  color: ${({ theme }) => theme.colors.grey};
  max-width: 730px;
  text-align: center;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    font: ${({ theme }) => theme.font.paragraph.paragraph3};
    max-width: 328px;
  }
`;

export const PageDescriptionWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-bottom: 0;
  padding-top: 100px;

  @media (max-width: 768px) {
    text-align: center;
    padding-top: 70px;
  }
`;

export const PageDescriptionContainer = styled.div`
  max-width: 1110px;
  width: calc(100% - 32px);
  margin: 0 auto;
  position: relative;
`;
