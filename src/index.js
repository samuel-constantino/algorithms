const { challenge1, challenge2, challenge3 } = require('./challenges');

console.log('\n\nDESAFIO 1:');
console.log('Soma dos múltiplos de 3 e 5, entre 1 e 999: ', challenge1(1000));

console.log('\n\nDESAFIO 2:');
console.log('Soma dos termos pares da sequência Fibonacci, entre 1 e 4 M: ', challenge2(4000000));

console.log('\n\nDESAFIO 3:');
console.log('Fatores primos de 600851475143: ', challenge3(13195));