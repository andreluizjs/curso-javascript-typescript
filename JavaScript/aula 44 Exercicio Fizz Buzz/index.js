// Escreva uma função que recebe um numero e retorne:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel po 3 e 5 = FizzBuzz
// Número NÃO é diviivel por 3 e 5 = Retorna o próprio Número
// Checar se o número é realmente um númeroUse a função com numero de 0 a 100

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return NaN;
    if (numero % 3 === 0 && numero % 5 === 0) return '3 e 5 FizzBuzz';
    if (numero % 3 === 0) return '3 Fizz';
    if (numero % 5 === 0) return '5 Buzz';
    return numero;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
  }
  