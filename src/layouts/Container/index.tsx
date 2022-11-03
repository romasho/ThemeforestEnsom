import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1110px;
  width: calc(100% - 32px);
  margin: 0 auto;
  padding: 120px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 50px;
  position: relative;

  @media (max-width: 768px) {
    max-width: 360px;
    width: calc(100% - 32px);
    padding: 50px 0px;
    gap: 20px;
  }
`;

export const HeaderContainer = styled(Container)`
  padding: 40px 0;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const FooterContainer = styled(Container)`
  padding: 50px 0;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: 40px 0 30px 0;
  }
`;

export const SubscribeContainer = styled(Container)`
  padding: 80px 0;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    padding: 50px 0;
    gap: 30px;
  }
`;

export const CenterAlignContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
`;

export const WithoutPaddingContainer = styled(Container)`
  padding: 0;
  justify-content: center;
`;
