/*
Problema 2

Cada novo termo na sequência de Fibonacci é gerado pela adição dos dois termos anteriores.
Começando com 1 e 2, os 10 primeiros termos serão:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

Desenvolva uma função que encontra a soma de todos os termos pares abaixo de quatro milhões.
*/

const sumPairsFibonacci = (number) => {
  let prev = 1;
  let current = 2;
  let next = null;
  let sum = 2;

  while (current < number) {
    next = prev + current;
    prev = current;
    current = next;

    if (next % 2 === 0) sum += next;
  }

  return sum;
};
  
module.exports = { sumPairsFibonacci };
