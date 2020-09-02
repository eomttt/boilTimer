import { getTimeFormat } from 'utils/time';

it('Time test', () => {
  describe('Get time format under 10', () => {
    const result = getTimeFormat(3);
    expect(result).toEqual('03');
  });

  describe('Get time format over 10', () => {
    const result = getTimeFormat(30);
    expect(result).toEqual(30);
  });
});
