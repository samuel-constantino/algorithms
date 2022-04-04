const { challenge1 } = require('../challenges');

describe('Challenge functions', function () {
  test('sum of multiples of 3 and 5', function () {
    expect(challenge1(10)).toBe(23);
  });
});
