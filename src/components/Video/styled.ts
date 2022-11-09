import styled from 'styled-components';

export const Video = styled.video`
  position: absolute;
  z-index: 20;
  max-width: ${({ theme }) => theme.width.container};
  width: calc(100% - 50%);
  min-width: ${({ theme }) => theme.width.containerMobile};
  height: auto;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
