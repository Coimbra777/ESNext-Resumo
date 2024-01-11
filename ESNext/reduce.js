// reduce, filter, e map são métodos em JavaScript que operam em arrays e são usados para transformar ou manipular dados. Aqui está uma breve explicação de cada um:

// reduce:
// O método reduce é usado para reduzir os elementos de um array a um único valor. Ele executa uma função fornecida para cada elemento do array, acumulando um resultado final. A função de redução recebe dois argumentos: um acumulador e o elemento atual do array.

// Exemplo de uso do reduce para somar todos os elementos de um array:
const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

console.log(soma); // Output: 15

// No exemplo acima, a função de redução soma cada elemento ao acumulador, começando com um valor inicial de 

