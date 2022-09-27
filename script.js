// Programa que seleciona os nomes que começam com a letra A
const nomes = ["Felipe", "Ana", "Bia", "Adele", "Gui", "Adam", "Rafa", "Maria"];

const filtroLetra = (letra) => (texto) => texto[0] === letra;

const primeiraLetra = filtroLetra("A");
// Exibe: [ 'Ana', 'Adele', 'Adam' ]
console.log(nomes.filter(primeiraLetra));
