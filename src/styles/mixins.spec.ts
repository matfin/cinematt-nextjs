import { media } from './mixins';

describe('mixins tests', (): void => {
  it('should return the correct styles', (): void => {
    expect(media.md('background-color: red').join('')).toEqual('@media (min-width:768px) {background-color: red}');

    expect(media.md('background-color: red', 1024).join('')).toEqual(
      '@media (min-width:768px) and (max-width: 1024px) {background-color: red}',
    );
  });
});
