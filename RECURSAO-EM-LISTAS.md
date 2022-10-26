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

## [EXEMPLO] Escreva um programa para calcular a soma dos valores de uma lista. Ex: \{3, 8, 20, 21, 34, 44\}{3,8,20,21,34,44}.

```js
const myList = [3, 8, 20, 21, 34, 44];

// Função que retorna a soma de todos os elementos de um array de forma recursiva
const soma = (lista) => {
  // Caso base
  if (lista.length == 0) {
    return 0;
  } else {
    // Head é basicamente a cabeça(ou seja, o primeiro elemento da lista)
    const head = lista.slice(0, 1)[0];
    // Tail é basicamente a cauda(ou seja, o resto da lista)
    const tail = lista.slice(1);
    // Retornando a soma do head com a soma do tail
    return head + soma(tail);
  }
};
// Chamando a função e passamos a lista como argumento
console.log(soma(myList));
```

No exemplo acima temos a solução do problema utilizando a recursão. Note que essa nomenclatura é mais adotada em linguagems como Haskell, uma forma de simplificar é utilizando a primeira função desse material com o operador ternário. Basicamente o que a função faz é: Primeiro analisa o tamanho da lista, ou seja, a quantidade de elementos presentes na lista, se o tamanho for igual a 0, retorna 0, caso contrário, retorna o primeiro elemento da lista + a chamada da função passando como parâmetro a lista(tail) sem o primeiro elemento.

## Uma segunda forma de resolver o exemplo acima

```js
const myList = [3, 8, 20, 21, 34, 44];
// Função que retorna a soma de todos os elementos de um array de forma recursiva utilizando o operador spread
const somaElementos = (lista) => {
  // Caso base
  if (lista.length == 0) {
    return 0;
  } else {
    // Head é basicamente a cabeça(ou seja, o primeiro elemento da lista)
    const [head, ...tail] = lista;
    // Retornando a soma do head com a soma do tail
    return head + somaElementos(tail);
  }
};
// Chamando a função e passamos a lista como argumento
console.log(somaElementos(myList));
```

No exemplo acima temos a resolução do mesmo problema utilizando o operador **spread**. Note que temos o seguinte, **const [head, ...tail] = lista**. Head basicamente é o primeiro elemento da lista e em seguida, temos uma sub-lista que contém os elementos restantes(8, 20, 21, 34, 44). A cada chamada recursiva temos que o head será o primeiro elemento da sub-lista seguinte, ou seja, começa em 3 e vai indo até o último elemento da lista. Já o tail vai criando sub-listas até que a lista esteja vazia.

## Uma terceira forma de resolver o problema acima

```js
const myList = [3, 8, 20, 21, 34, 44];
// Função que retorna true ou false caso uma lista esteja vazia.
const listaVazia = (lista) => {
  return lista.length == 0;
};

// Função recurisva que retorna a soma de uma lista
const sumNumerosRecursivo = (lista) => {
  // Chama a função listaVazia e retorna 0 caso a lista esteja vazia
  return listaVazia(lista) ? 0 : lista[0] + sumNumerosRecursivo(lista.slice(1));
};

console.log(sumNumerosRecursivo(myList));
```

No exemplo acima temos uma função que retorna true caso a lista esteja vazia e false caso a lista não esteja vazia. Em seguida, temos uma função recursiva que recebe uma lista e chama a função listaVazia passando como argumento a lista, caso a lista esteja vazia retorna 0, caso contrário retorna a soma do primeiro elemento da lista + a chamada recursiva da função que passa como argumento a lista sem o primeiro elemento. Note que usamos o método slice para ir criando sub-listas até que o tamanho da lista seja igual a 0.

## [EXEMPLO] Encontrar o último elemento de uma lista qualquer passada.

```js
const myList = [3, 8, 20, 21, 34, 44];
const retornaUltimoElemento = (lista) => {
  // Caso base
  if (lista.length == 0) {
    return `Lista vazia`;
  } else {
    // Temos um caso base e um caso geral.
    return lista.length == 1 ? lista[0] : retornaUltimoElemento(lista.slice(1));
  }
};

console.log(retornaUltimoElemento(myList));
```

No exemplo acima temos que a função retornaUltimoElemento recebe uma lista como argumento e verifica se o tamanho da lista é igual a 1, caso seja retorna o primeiro elemento da lista, caso contrário retorna a chamada recursiva da função passando como argumento a lista sem o primeiro elemento. Note que usamos novamente o método slice que vai criando sub-listas até que o tamanho da lista seja igual a 1. Note também que caso a lista esteja vazia, ou seja, sem nenhum elemento, a função retorna a mensagem **Lista vazia**.

## [EXEMPLO] Encontrar o maior elemento de uma lista.

```js
const myList = [3, 8, 20, 21, 34, 44];
// Função que retorna o maior elemento da lista de forma recursiva
const retornaMaiorElemento = (lista) => {
  // Caso base
  if (lista.length == 0) {
    return `Lista vazia`;
  } else {
    // Caso base e caso geral
    return lista.length == 1
      ? lista[0]
      : Math.max(lista[0], retornaMaiorElemento(lista.slice(1)));
  }
};

console.log(retornaMaiorElemento(myList));
```

No exemplo acima temos uma função recursiva que retorna o maior elemento de uma lista. Note que usamos o método Math.max que retorna o maior valor entre dois números. Note também que temos um caso base e um caso geral. No caso geral temos que a função retornaMaiorElemento recebe uma lista como argumento e verifica se o tamanho da lista é igual a 1, caso seja retorna o primeiro elemento da lista, caso contrário retorna o maior valor entre o primeiro elemento da lista e a chamada recursiva da função passando como argumento a lista sem o primeiro elemento. Note que usamos novamente o método slice que vai criando sub-listas até que o tamanho da lista seja igual a 1. Note também que caso a lista esteja vazia, ou seja, sem nenhum elemento, a função retorna a mensagem **Lista vazia**.

## [EXEMPLO] Inverter a ordem dos elementos de uma lista.

```js
const myList = [3, 8, 20, 21, 34, 44];
// Função recursiva que inverte a ordem dos elementos de uma lista.
const inverteLista = (lista) => {
  // Caso base
  if (lista.length == 0) {
    return [];
    // Caso geral
  } else {
    const [head, ...tail] = lista;
    return [...inverteLista(tail), head];
  }
};
console.log(`Lista original: ${myList}`);
console.log(`Lista invertida: ${inverteLista(myList)}`);
```

No exemplo acima temos uma função recursiva que recebe uma lista de elementos e retorna uma nova lista com os elementos da lista original na ordem inversa. Note que usamos o operador spread para concatenar as listas. Note também que temos um caso base e um caso geral. No caso geral temos que a função inverteLista recebe uma lista como argumento e verifica se o tamanho da lista é igual a 0, caso seja retorna uma lista vazia, caso contrário retorna a chamada recursiva da função passando como argumento a lista sem o primeiro elemento e assim continua até que a lista esteja vazia. Por fim é retornado a lista na ordem inversa. Além disso, note que usamos a nomenclatura head e tail e o operador spread.

# [EXEMPLO] Duplicar a presença de cada elemento de uma lista.

```js
const myList = [3, 8, 20, 21, 34, 44];
// Função recursiva que duplica a presença de cada elemento de uma lista.
const duplicaElementos = (lista) => {
  // Caso base
  if (lista.length == 0) {
    return [];
    // Caso geral
  } else {
    const [head, ...tail] = lista;
    return [head, head, ...duplicaElementos(tail)];
  }
};

console.log(`Lista original: ${myList}`);
console.log(`Lista com elementos duplicados: ${duplicaElementos(myList)}`);
```

Basicamente o que a função acima faz é receber uma lista e retornar uma nova lista com os elementos da lista original duplicados. Note que temos um caso base e um caso geral. No caso geral temos que a função duplicaElementos recebe uma lista como argumento e verifica se o tamanho da lista é igual a 0, caso seja retorna uma lista vazia, caso contrário retorna a chamada recursiva da função passando como argumento a lista sem o primeiro elemento e assim continua até que a lista esteja vazia. Por fim é retornado a lista com os elementos duplicados. Além disso, note que usamos a nomenclatura head e tail e o operador spread que vai adicionando os elementos duplicados na lista. A grande lógica nesse problema é que os dois head dentro do array vão ser adicionados na lista e assim vai duplicando os elementos.

## [EXEMPLO] Verificar se uma lista possui um determinado elemento.

[Voltar](README.md);
