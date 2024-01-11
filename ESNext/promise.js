// No JavaScript, as Promises são uma maneira de lidar com operações assíncronas. Uma Promise representa um valor que pode estar disponível agora, no futuro, ou nunca. Ela é usada para trabalhar com código assíncrono de uma forma mais limpa e organizada, evitando o chamado "callback hell" (aninhamento excessivo de callbacks).

// Uma Promise tem três estados:

// Pending (Pendente): O estado inicial. A Promise está em execução ou aguardando a conclusão.
// Fulfilled (Realizada): A operação foi concluída com sucesso, e a Promise retorna um valor.
// Rejected (Rejeitada): A operação falhou, e a Promise retorna um motivo (razão) para a falha.
// Aqui está um exemplo básico de como criar e usar uma Promise:

// Exemplo de uma função que retorna uma Promise
function obterDadosAssincronos() {
  return new Promise((resolve, reject) => {
  
    setTimeout(() => {
      const sucesso = true; 
      if (sucesso) {
        resolve("Dados foram obtidos com sucesso!");
      } else {
        reject("Erro ao obter dados.");
      }
    }, 2000); 
  });
}

// Usando a Promise
obterDadosAssincronos()
  .then(resultado => {
    console.log(resultado); 
  })
  .catch(erro => {
    console.error(erro);
  });


//   Neste exemplo:

// obterDadosAssincronos é uma função que retorna uma Promise.
// resolve é chamado quando a operação assíncrona é bem-sucedida, e reject é chamado quando há um erro.
// O método .then é usado para lidar com o caso de sucesso, enquanto o método .catch é usado para lidar com a rejeição.
// Promises podem ser encadeadas usando múltiplos .then para criar uma sequência de operações assíncronas. Além disso, a introdução de async/await no ECMAScript 2017 simplificou ainda mais o tratamento de Promises, tornando o código mais legível e fácil de entender.