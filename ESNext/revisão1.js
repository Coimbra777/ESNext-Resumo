// variavel com escopo de bloco
// let e const 
{
  var a = 2
  let b = 3
console.log(b)

}
console.log(a)

// template string
const produto = 'Notebook'
console.log(`${produto} é caro!`)

// destructuring
const [l, e, ...tras] = 'Bicicleta'
console.log(l, e, tras)

const {nome, idade} = {nome: 'Ana', idade: 14}
console.log(nome, idade)
