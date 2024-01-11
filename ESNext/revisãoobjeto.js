// objetos
// notação literal
const nome = "Carla";
const pessoa = {
  nome,
  ola() {
    return "Oi gente";
  },
};

console.log(pessoa.nome, pessoa.ola());

// Class
class Animal {}
class Cachorro extends Animal {
  latir() {
    return 'latiu';
  }
}
const cachorro = new Cachorro();
console.log(cachorro.latir())
