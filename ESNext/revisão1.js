// variavel com escopo de bloco
// let e const 
{
  var a = 2
  let b = 3
console.log(b)

}
console.log(a)

// template string
// 
const produto = 'Notebook'
console.log(`${produto} é caro!`)

// destructuring
const [l, e, ...tras] = 'Bicicleta'
console.log(l, e, tras)

const {nome, idade} = {nome: 'Ana', idade: 14}
console.log(nome, idade)

// arrow function
// É uma função anônima que atribuída à uma variável e com sintaxe mais curta,
const soma = (a , b) => a + b
console.log(soma(2, 3))

// function default
function log(texto = 'Node'){
  console.log(texto)
}

log()
log('Mais forte')

// Operador Rest
// Recebe todos os argumentos excedentes em um array
function total(...numeros){
  let total = 0
   numeros.forEach(n => total += n)
  return total
}

console.log(total(10 ,10))


