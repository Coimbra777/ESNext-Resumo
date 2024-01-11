// O loop for...of é uma estrutura de controle de fluxo em JavaScript que permite iterar sobre elementos iteráveis, como arrays, strings, conjuntos (Sets), mapas (Maps) e assim por diante. A sintaxe básica do for...of é mais simples e legível do que o tradicional for ou forEach. Aqui está um exemplo de uso com um array:

const array = [1, 2, 3, 4, 5];

for (const elemento of array) {
  console.log(elemento);
}

// imprime o valor de cada elemento no console.

// o for...of não funciona com objetos genéricos, pois estes não são iteráveis por padrão. No entanto, você pode usar o método Object.keys(), Object.values(), ou Object.entries() para iterar sobre as propriedades de um objeto.

const pessoa = {
  nome: 'João',
  idade: 30,
  cidade: 'São Paulo'
};

for (const chave of Object.keys(pessoa)) {
  console.log(chave, pessoa[chave]);
}
