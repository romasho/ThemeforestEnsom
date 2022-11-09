import styled from 'styled-components';

export const SwiperWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.container};
  width: calc(100% - 16px);
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    max-width: calc(100vw - 30px);
    width: 360px;
  }
`;
