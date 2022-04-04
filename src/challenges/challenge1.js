/*
Problema 1 
Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obtemos 3, 5, 6 e 9. A soma desses múltiplos é 23.

Desenvolva uma função que encontra a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.

*/

const challenge1 = (number) => {
  let sum = 0;
  
  for (let i = 1; i < number; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }

  return sum;
};

module.exports = { challenge1 };
