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
  let maxPrime = 0;
  for (let i = 2; i <= number; i += 1) {
    if (isPrime(i) && number % i === 0 && i > maxPrime) maxPrime = i;
  }
  return maxPrime;
};
  
module.exports = { challenge3 };
