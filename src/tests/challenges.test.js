const { challenge1, challenge2, challenge3 } = require('../challenges');

describe('Challenge functions', function () {
  test('sum of multiples of 3 and 5', function () {
    expect(challenge1(10)).toBe(23);
  });

  test('Sum the even numbers of the Fibonacci sequence', function () {
    expect(challenge2(10)).toBe(44);
  });

  test('prime factors of 13195', function () {
    expect(challenge3(13195)).toEqual([5, 7, 13, 29]);
  });
});
