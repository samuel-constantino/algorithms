/*
Problema 3

Os fatores primos de 13195 são 5, 7, 13 e 29.
Desenvolva uma função que encontra o maior fator primo do número 600851475143?

*/

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const challenge3 = (number) => {
  const primes = [];
  for (let i = 2; i <= number; i += 1) {
    if (isPrime(i) && number % i === 0) primes.push(i);
  }
  return primes;
};
  
module.exports = { challenge3 };
