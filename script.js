const myList = [3, 8, 20, 21, 34, 44];

// Função recursiva que verifica se um array possui um determinado elemento.
function contains(array, element) {
  if (array.length === 0) {
    return false;
  }
  if (array[0] === element) {
    return true;
  }
  return contains(array.slice(1), element);
}

console.log(contains(myList, 21));