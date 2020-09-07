import { useEffect } from 'react';
import { Direction } from 'models/types';

const useSwipe = (cb: (swipe: Direction) => void): void => {
  useEffect((): (() => void) => {
    let height: number;
    let touchStartX: number;
    let touchStartY: number;
    let touchEndX: number;
    let touchEndY: number;
    let width: number;
    let xDirection: Direction;
    let yDirection: Direction;
    let xPercentage: number;
    let yPercentage: number;

    const onTouchStart = ({ changedTouches }: TouchEvent): void => {
      touchStartX = changedTouches[0].screenX;
      touchStartY = changedTouches[0].screenY;
    };

    const onTouchEnd = ({ changedTouches }: TouchEvent): void => {
      height = window.innerHeight;
      touchEndX = changedTouches[0].screenX;
      touchEndY = changedTouches[0].screenY;
      width = window.innerWidth;
      xDirection = touchEndX > touchStartX ? Direction.Right : Direction.Left;
      yDirection = touchEndY > touchStartY ? Direction.Down : Direction.Up;
      xPercentage = Math.floor((Math.abs(touchEndX - touchStartX) / width) * 100);
      yPercentage = Math.floor((Math.abs(touchEndY - touchStartY) / height) * 100);

      if (xPercentage >= 20 || yPercentage >= 10) {
        cb(xPercentage > yPercentage ? xDirection : yDirection);
      }
    };

    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchend', onTouchEnd);

    return (): void => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [cb]);
};

export default useSwipe;
