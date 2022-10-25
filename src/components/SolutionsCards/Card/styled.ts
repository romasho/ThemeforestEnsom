import styled from 'styled-components';

export const CardWrapper = styled.div`
  max-width: 540px;
  box-shadow: ${(props) => props.theme.boxShadows.shadowCard3};
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 35px 20px;
`;

export const IconWrapper = styled.span`
  svg {
    width: 60px;
    height: 60px;
    fill: ${(props) => props.theme.colors.primary};
  }
`;
