// Funções Literais
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

// Funções de Expressão
const quadrado = function (x) {
  return x * x;
};

// Funções Auto-executáveis (IIFE)
(function () {
  console.log("Executando imediatamente!");
})();

//  Arrow Functions
const dobrar = (num) => num * 2;

// Arrow Functions com IIFE
(() => {
  console.log("Executando imediatamente com Arrow Function!");
})();

// Funções com Propriedades
function cumprimentar(nome) {
  return `Olá, ${nome}!`;
}

cumprimentar.contador = 0;
