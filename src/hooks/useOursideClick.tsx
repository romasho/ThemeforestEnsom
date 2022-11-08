import { MutableRefObject, useEffect } from 'react';

export const useOnClickOutside = (
  ref: MutableRefObject<HTMLElement | null>,
  handler: (event: MouseEvent) => void,
  exclude?: MutableRefObject<HTMLElement | null>
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (exclude && (!exclude.current || exclude.current.contains(event.target as Node))) {
        handler(event);
      }
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
