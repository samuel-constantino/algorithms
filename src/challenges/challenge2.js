/*
Problema 2

Cada novo termo na sequência de Fibonacci é gerado pela adição dos dois termos anteriores. Começando com 1 e 2, os 10 primeiros termos serão:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

Desenvolva uma função que encontra a soma de todos os termos pares abaixo de quatro milhões.
*/

const challenge2 = (number) => {
  const sequence = [1, 2];
  let next = null;
  let sum = 2;

  for (let i = 2; i < number; i += 1) {
    next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);
    if (next % 2 === 0) sum += next;
  }

  return sum;
};
  
module.exports = { challenge2 };
