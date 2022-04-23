const {
    sumMultiples,
    sumPairsFibonacci,
    greatPrimeFactor,
} = require('./challenges/node');

console.log('\n\nDESAFIO 1:');
console.log('Soma dos múltiplos de 3 e 5, entre 1 e 999: ', sumMultiples(1000));

console.log('\n\nDESAFIO 2:');
console.log('Soma dos termos pares da sequência Fibonacci, entre 1 e 4 M: ', sumPairsFibonacci(10));

console.log('\n\nDESAFIO 3:');
console.log('soma dos fatores primos de 600851475143: ', greatPrimeFactor(600851475143));
