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
`;

export const HeaderContainer = styled(Container)`
  padding: 40px 0;
`;

export const FooterContainer = styled(Container)`
  padding: 50px 0;
  align-items: flex-start;
`;

export const SubscribeContainer = styled(Container)`
  padding: 80px 0;
  color: ${(props) => props.theme.colors.white};
`;

export const CenterAlignContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const WithoutPaddingContainer = styled(Container)`
  padding: 0;
`;
