import { sum } from 'utils/sum';

it('sum test', () => {
  describe('Get time format under 10', () => {
    const result = sum(3, 4);
    expect(result).toEqual(7);
  });

  describe('Get time format over 10', () => {
    const result = sum(4, 5);
    expect(result).toEqual(9);
  });
});
