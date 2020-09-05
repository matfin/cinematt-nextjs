import { useEffect } from 'react';

const useKeyDown = (cb: (e: KeyboardEvent) => void): void => {
  useEffect((): (() => void) => {
    window.addEventListener('keydown', cb);

    return (): void => window.removeEventListener('keydown', cb);
  }, [cb]);
};

export default useKeyDown;
