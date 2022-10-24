import React, { FC, ReactNode } from 'react';

import { Portal } from '@/components/Portal';

import { Close, TranslucentBackground, ModalBox } from './components.styled';

interface IModalProps {
  isOpen: boolean;
  onCancel: () => void;
  children?: ReactNode;
}

export const Modal: FC<IModalProps> = ({ isOpen, onCancel, children }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <>
      {isOpen && (
        <Portal>
          <TranslucentBackground onClick={handleClick}>
            <ModalBox>
              <Close onClick={onCancel}>&#215;</Close>
              {children}
            </ModalBox>
          </TranslucentBackground>
        </Portal>
      )}
    </>
  );
};
