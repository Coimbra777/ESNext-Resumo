console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis() {
  console.log("Dentro de uma função...");
  console.log(this === exports);
  console.log(this === module.exports);

  console.log(this === global);
}

logThis();

// o this dentro de uma função aponta para o obj global

// fora da função aponta para module.exports

const arrowFunction = () => {
  console.log("Não aponta para o global ->", this === global);
  console.log("Aponta para o exports ->", this === exports);
  console.log("Aponta para o module.exports ->", this === module.exports);
};

arrowFunction();
