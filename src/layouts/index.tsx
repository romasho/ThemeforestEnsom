import styled from 'styled-components';

export const SwiperWrapper = styled.div`
  max-width: 1160px;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: calc(100vw - 30px);
    width: 360px;
  }
`;
