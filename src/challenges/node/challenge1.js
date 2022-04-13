/*
Problema 1 
Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obtemos 3, 5, 6 e 9. A soma desses múltiplos é 23.

Desenvolva uma função que encontra a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.

*/

const challenge1 = (number) => {
  const qtdMultiplesThree = Math.floor((number - 1) / 3); // quantidade de multiplos de 3 entre 1 e (n - 1)
  const qtdMultiplesFive = Math.floor((number - 1) / 5); // quantidade de multiplos de 5 entre 1 e (n - 1)
  const qtdMultiplesFifTeen = Math.floor((number - 1) / 15); // quantidade de multiplos de 15 entre 1 e (n - 1)

  const sumPaMultiplesThree = (qtdMultiplesThree * (3 + (3 * qtdMultiplesThree))) / 2; // soma da progressão aritimética dos multiplos de 3
  const sumPaMultiplesFive = (qtdMultiplesFive * (5 + (5 * qtdMultiplesFive))) / 2; // soma da progressão aritimética dos multiplos de 3
  const sumPaMultiplesFifteen = (qtdMultiplesFifTeen * (15 + (15 * qtdMultiplesFifTeen))) / 2; // soma da progressão aritimética dos multiplos de 3

  const result = sumPaMultiplesThree + sumPaMultiplesFive - sumPaMultiplesFifteen; // soma-se as somas dos multipos de 3 e 5, e remove os valores multiplos de 15, pois esses já foram somados anteriormente
  return result;
};

// referência: https://brasilescola.uol.com.br/matematica/soma-dos-termos-uma-progressao-aritmetica.htm#

module.exports = { challenge1 };
