import { getTimeFormat } from 'utils/time';

it('Time test', () => {
  describe('Get time format', () => {
    const result = getTimeFormat(3);
    expect(result).toEqual('03');
  });
});
