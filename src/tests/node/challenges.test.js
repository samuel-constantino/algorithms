const { sumMultiples, sumPairsFibonacci, greatPrimeFactor } = require('../../challenges/node');

describe('Challenge functions', function () {
  test('sum of multiples of 3 and 5', function () {
    expect(sumMultiples(10)).toBe(23);
  });

  test('Sum the even numbers of the Fibonacci sequence', function () {
    expect(sumPairsFibonacci(10)).toBe(10);
  });

  test('prime factors of 13195', function () {
    expect(greatPrimeFactor(13195)).toEqual(29);
  });
});
