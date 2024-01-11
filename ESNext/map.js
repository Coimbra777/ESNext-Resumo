// map:
// O método map cria um novo array contendo os resultados da aplicação de uma função a cada elemento do array original. Ele não altera o array original, mas cria um novo com os resultados da função aplicada a cada elemento.

// Exemplo de uso do map para duplicar cada elemento de um array:

const numeros = [1, 2, 3, 4, 5];

const numerosDobrados = numeros.map(numero => {
  return numero * 2;
});

console.log(numerosDobrados); // Output: [2, 4, 6, 8, 10]

// A função de mapeamento multiplica cada elemento por 2, criando um novo array com os resultados.

// Esses métodos são poderosos e são frequentemente usados em combinação para realizar operações mais complexas em arrays.