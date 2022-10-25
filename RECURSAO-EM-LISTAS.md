# Recursão em listas

Basicamente é a mesma coisa estudada anteriormente, a diferença é que aplicamos a recursão em uma lista.

O exemplo abaixo mostra uma função recursiva que soma todos os elementos de uma lista

```js
const listNums = [3, 8, 20, 21, 34, 44];

// Função que retorna a soma de todos os elementos de um array
const listOfNumbers = (list) => {
  // Retorna 130 que é a soma de todos os elementos da lista.
  return list.length == 0 ? 0 : list[0] + listOfNumbers(list.slice(1));
};

console.log(listOfNumbers(listNums));
```

Basicamente passamos um array(lista) como parâmetro para a função e em seguida, verificamos se o tamanho da lista é igual a 0, se for, retornamos 0, caso contrário, retornamos o primeiro elemento da lista + a chamada da função passando como parâmetro a lista sem o primeiro elemento.

Note que o caso base da função recursiva é quando a lista está vazia, ou seja, quando o tamanho da lista é igual a 0.

A função slice cria uma sub-lista, nesse caso passamos 1 como argumento para a função slice, ou seja, queremos uma "lista" com todos os elementos exceto o primeiro elemento a cada chamada da função.

Por fim temos que o primeiro elemento da lista será somado com a sequência dos outros elementos da lista. Tudo isso ocorre após a chamada da função.

Outra forma de resolver esse problema é não utilizando o operador ternário, veja o exemplo abaixo:

```js
const listNums = [3, 8, 20, 21, 34, 44];
const listOfNumbers = (list) => {
  // Caso base
  if (list.length == 0) {
    return 0;
  } else {
    // Retorna a soma do primeiro elemento com os elementos seguintes
    return list[0] + listOfNumbers(list.slice(1));
  }
};
```

Dessa forma fica mais "visivel" o caso base da função.