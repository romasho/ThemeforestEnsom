import styled from 'styled-components';

export const SwiperWrapper = styled.div`
  max-width: 1110px;
  width: calc(100% - 16px);
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: calc(100vw - 30px);
    width: 360px;
  }
`;
