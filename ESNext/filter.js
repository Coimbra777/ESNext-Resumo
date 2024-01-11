// filter:
// O método filter cria um novo array contendo apenas os elementos do array original que satisfazem uma condição específica. A função de filtragem deve retornar true para incluir o elemento no novo array ou false para excluí-lo.

// Exemplo de uso do filter para obter apenas números pares:
const numeros = [1, 2, 3, 4, 5];

const numerosPares = numeros.filter(numero => {
  return numero % 2 === 0;
});

console.log(numerosPares); // Output: [2, 4]