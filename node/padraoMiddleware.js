// middleware pattern (chain of responsability)

// A principal ideia por trás desse padrão é permitir que diferentes partes de um sistema possam processar uma solicitação ou manipular dados de maneira independente e flexível.

const passo1 = (contexto, next) => {
  contexto.valor1 = "mid1";
  next();
};

const passo2 = (contexto, next) => {
  contexto.valor2 = "mid2";
  next();
};

const passo3 = (contexto) => (contexto.valor3 = "mid3");

const exec = (contexto, ...middlewares) => {
  const execPasso = (indice) => {
    middlewares &&
      indice < middlewares.length &&
      middlewares[indice](contexto, () => execPasso(indice + 1));
  };
  execPasso(0);
};

const contexto = {};
exec(contexto, passo1, passo2, passo3);
console.log(contexto);

// Esse código implementa uma versão simples do padrão de projeto Chain of Responsibility (cadeia de responsabilidade) em JavaScript, onde um contexto é passado através de várias funções (middlewares) que podem manipular ou adicionar informações a esse contexto. Cada middleware tem a opção de chamar o próximo middleware na cadeia.

// Vamos analisar o código em detalhes:

// Definição dos Passos (Middlewares):

// passo1, passo2, e passo3 são funções que representam os passos (middlewares) a serem executados. Cada uma delas recebe um contexto e uma função next, que permite chamar o próximo middleware na cadeia.
// Função de Execução (exec):

// exec é uma função que aceita um contexto e um número variável de middlewares. Ela chama internamente a função execPasso, que executa os middlewares sequencialmente.
// Execução dos Middlewares (execPasso):

// execPasso é uma função interna que, dado um índice, verifica se ainda existem middlewares a serem executados e os chama com o contexto atual e uma função next que chama recursivamente execPasso com o próximo índice.
// Chamada Inicial (exec(contexto, passo1, passo2, passo3)):

// Aqui, é criado um objeto de contexto vazio. A função exec é chamada com esse contexto e os middlewares passo1, passo2, e passo3.
// Saída (console.log(contexto)):

// Após a execução dos middlewares, o conteúdo do contexto é impresso no console.
// No exemplo dado, cada middleware adiciona uma propriedade ao contexto, e a saída final será um objeto contexto contendo as propriedades valor1, valor2, e valor3, que foram adicionadas pelos middlewares.
