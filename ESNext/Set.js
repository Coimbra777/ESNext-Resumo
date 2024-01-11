// Set é uma estrutura de dados em JavaScript que armazena valores únicos, o que significa que não pode haver elementos duplicados no conjunto.
const times = new Set();

times.add("Flamengo");
times.add("Vasco");
times.add("Palmeiras");
times.add("Fluminense");
times.add("São Paulo");
console.log(times);
console.log(times.size);

// const fruitsArray = ["Maçã", "Banana", "Laranja", "Morango"];
// const isValidArray = (food: string) => {
//   if (fruitsArray.includes(food)) return console.log("fruit");
// };


// const fruitSet = new Set(["Maçã", "Banana", "Laranja", "Morango"])
// const isValidSet = (food: string) => {
//   if (fruitSet.has(food)) return console.log("fruit")
// }


// Quando Utilizar o Método Set?

// Cenário: Trabalhando com coleções de dados onde a exclusividade é crucial.
// Benefício do Set: Remove automaticamente duplicatas, garantindo uma coleção única e sem repetições.

const listaComDuplicatas = [1, 2, 2, 3, 4, 4, 5];
const conjuntoSemDuplicatas = new Set(listaComDuplicatas);

// Cenário: Necessidade de verificar rapidamente se um elemento está presente em uma coleção.
// Benefício do Set: O método has proporciona uma verificação de pertencimento eficiente, ideal para consultas rápidas em grandes conjuntos de dados.

const conjuntoDeCores = new Set(["Vermelho", "Verde", "Azul"]);
console.log(conjuntoDeCores.has("Verde")); // true

// Cenário: Manter uma lista de valores exclusivos.
// Benefício do Set: Oferece uma maneira direta de armazenar valores únicos, eliminando a necessidade de verificações manuais.
const conjuntoDeEmails = new Set();
conjuntoDeEmails.add("exemplo@email.com");

// Cenário: Realizar operações como união, interseção e diferença entre conjuntos.
// Benefício do Set: Simplifica tarefas complexas de conjunto de forma eficiente.
const conjuntoA = new Set([1, 2, 3]);
const conjuntoB = new Set([2, 3, 4]);
const uniao = new Set([...conjuntoA, ...conjuntoB]); // União


// ⚡️ Dica Rápida:

// Flexibilidade: Use Set quando a ordem dos elementos não é crítica e quando você se beneficia de valores únicos.
// Vamos potencializar nossos códigos com o método Set! 💡 Compartilhe suas experiências e casos de uso nos comentários. Juntos, vamos aprimorar nossas habilidades em JavaScript! 🌐🔄 #JavaScript #SetMethod #WebDevelopment #TechTips #CodingJourney