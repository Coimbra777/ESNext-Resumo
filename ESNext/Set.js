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