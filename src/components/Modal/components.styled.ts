import styled from 'styled-components';

export const Close = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 2rem;
  line-height: 1rem;
  padding: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    border-radius: 100%;
  }
`;

export const TranslucentBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1110;
`;

export const ModalBox = styled.div`
  position: relative;
  border-radius: 4px;
  max-width: 600px;
  width: calc(100% - 32px);
  padding: 3rem;
  background: center/cover, ${({ theme }) => theme.colors.white};
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
