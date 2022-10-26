// const listNums = [
//   3, 8, 20, 21, 34, 44, 3, 8, 20, 21, 34, 44, 3, 8, 20, 21, 34, 44, 3, 8, 20,
//   21, 34, 44, 3, 8, 20, 21, 34, 44, 3, 8, 20, 21, 34, 44, 3, 8, 20, 21, 34, 44,
//   3, 8, 20, 21, 34, 44, 3, 8, 20, 21, 34, 44,
// ];

// // Função que retorna a soma de todos os elementos de um array
// const listOfNumbers = (list) => {
//   return list.length == 0 ? 0 : list[0] + listOfNumbers(list.slice(1));
// };
// console.log(listOfNumbers(listNums));

const myList = [3, 8, 20, 21, 34, 44];

// // Função que retorna a soma de todos os elementos de um array de forma recursiva
// const soma = (lista) => {
//   // Caso base
//   if (lista.length == 0) {
//     return 0;
//   } else {
//     // Head é basicamente a cabeça(ou seja, o primeiro elemento da lista)
//     const head = lista.slice(0,1)[0];
//     // Tail é basicamente a cauda(ou seja, o resto da lista)
//     const tail = lista.slice(1);
//     // Retornando a soma do head com a soma do tail
//     return head + soma(tail);
//   }
// }
// // Chamando a função e passamos a lista como argumento
// console.log(soma(myList));

// Função que retorna a soma de todos os elementos de um array de forma recursiva utilizando o operador spread
// const somaElementos = (lista) => {
//   // Caso base
//   if (lista.length == 0) {
//     return 0;
//   } else {
//     // Head é basicamente a cabeça(ou seja, o primeiro elemento da lista)
//     const [head, ...tail] = lista;
//     // Retornando a soma do head com a soma do tail
//     return head + somaElementos(tail);
//   }
// }
// // Chamando a função e passamos a lista como argumento
// console.log(somaElementos(myList));

// Função que retorna true ou false caso uma lista esteja vazia.
const listaVazia = (lista) => {
  return lista.length == 0;
}

// Função recurisva que retorna a soma de uma lista
const sumNumerosRecursivo = (lista) => {
  // Chama a função listaVazia e retorna 0 caso a lista esteja vazia
  return listaVazia(lista) ? 0 : lista[0] + sumNumerosRecursivo(lista.slice(1));
}

console.log(sumNumerosRecursivo(myList));