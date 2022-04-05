/*
Problema 3

Os fatores primos de 13195 são 5, 7, 13 e 29.
Desenvolva uma função que encontra o maior fator primo do número 600851475143?

*/

const filter = (arr, fil) => arr.filter((item) => item === fil || item % fil !== 0);

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

// a versão 1 prioriza processamento ao utilizar complexidade On
const challenge3v1 = (number) => {
  const limitFilter = number ** (1 / 2);
  let arr = [];
  for (let i = 2; i <= number; i += 1) arr.push(i);

  for (let i = 2; i < limitFilter; i += 1) arr = filter(arr, i);

  arr = arr.filter((item) => number % item === 0);
  return arr[arr.length - 1];
};

// a versão 2 prioriza memória ao utilizar complexidade On^2
const challenge3v2 = (number) => {
  let maxPrime = 0;
  for (let i = 2; i <= number; i += 1) {
    if (isPrime(i) && number % i === 0 && i > maxPrime) maxPrime = i;
  }
  return maxPrime;
};
  
module.exports = { challenge3v1, challenge3v2 };
