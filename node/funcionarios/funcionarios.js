const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const chineses = (funcionario) => funcionario.pais === "China";

const mulheres = (funcionario) => funcionario.genero === "F";

const menorSalario = (funcionario, funcionarioAtual) => {
  return funcionario.salario < funcionarioAtual.salario
    ? funcionario
    : funcionarioAtual;
};

axios.get(url).then((response) => {
  const funcionarios = response.data;
  // console.log(funcionarios);

  const funcionaria = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario);

  console.log(funcionaria);
});

// axios.get(url).then((response) => {
//   const funcionarios = response.data.filter(
//     (funcionario) => funcionario.pais === "China"
//   );

//   const funcionarioMenorSalario = funcionarios.reduce(
//     (minSalario, funcionario) => {
//       return funcionario.salario < minSalario.salario
//         ? funcionario
//         : minSalario;
//     },
//     funcionarios[0]
//   );

//   console.log(funcionarioMenorSalario);
// });
