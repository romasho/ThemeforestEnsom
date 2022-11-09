import { FC, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface IPortalProps {
  children: ReactNode;
}

export const Portal: FC<IPortalProps> = ({ children }) => {
  const el = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(el);

    return () => {
      document.body.removeChild(el);
    };
  });

  return ReactDOM.createPortal(children, el);
};
