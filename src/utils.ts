export const isTouchDevice = (): boolean => typeof window !== 'undefined' && 'ontouchstart' in window;
