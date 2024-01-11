// Em JavaScript, o operador rest e o operador spread estão relacionados e são representados pelos mesmos três pontos (...). No entanto, eles são usados em contextos diferentes.

function soma (...numeros) {
  return numeros.reduce((total, numero) => total + numero, 0)
}
console.log(soma(1, 2, 3, 4, 5))