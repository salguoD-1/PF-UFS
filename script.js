const listNums = [3, 8, 20, 21, 34, 44];

// Função que retorna a soma de todos os elementos de um array
const listOfNumbers = (list) => {
  return list.length == 0 ? 0 : list[0] + listOfNumbers(list.slice(1));
};

console.log(listOfNumbers(listNums));
