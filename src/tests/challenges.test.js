const { challenge1, challenge2, challenge3v1, challenge3v2 } = require('../challenges');

describe('Challenge functions', function () {
  test('sum of multiples of 3 and 5', function () {
    expect(challenge1(10)).toBe(23);
  });

  test('Sum the even numbers of the Fibonacci sequence', function () {
    expect(challenge2(10)).toBe(10);
  });

  test('prime factors of 13195 (version 1)', function () {
    expect(challenge3v1(13195)).toEqual(29);
  });

  test('prime factors of 13195 (version 2)', function () {
    expect(challenge3v2(13195)).toEqual(29);
  });
});
