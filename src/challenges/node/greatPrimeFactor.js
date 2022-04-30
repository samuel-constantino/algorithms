/*
Problema 3

Os fatores primos de 13195 são 5, 7, 13 e 29.
Desenvolva uma função que encontra o maior fator primo do número 600851475143?

*/

const isPrime = (n) => {
  // Se 'n' é par, retorne se 'n' é igual a '2'.
  if (n % 2 === 0) return n === 2;

  // Precisamos verificar se 'n' é primo apenas até o limite da raiz quadrada de 'n'.
  const limit = n ** 1 / 2 || 0;
  let count = 3;

  // Se houver alguma divisão inteira entre 3 e a raiz quadrada de 'n',
  // então esse número não é primo.
  while (count <= limit) {
    if (n % count === 0) return false;
    count += 2;
  }

  return true;
};

const greatPrimeFactor = (number) => {
  let currentDividend = number;
  let currentDivider = 2;
  const primeFactors = [];
  
  while (currentDividend >= currentDivider) {
    // Se a divisão do dividendo atual pelo divisor atual é inteira
    //  e o divisor atual é primo
    // então o divisor atual é um fator primo
    if (currentDividend % currentDivider === 0 && isPrime(currentDivider)) {
      primeFactors.push(currentDivider);
      currentDividend /= currentDivider;
    } else currentDivider += 1;
  }

  const indexOfGreatPrimeFactor = primeFactors.length - 1;
  return primeFactors[indexOfGreatPrimeFactor];
};
  
module.exports = { greatPrimeFactor };

// Créditos ao super instrutor da Trybe, Rafael Medeiros Gomes,
// que ajudou a otimizar e torna o código mais limpo.
