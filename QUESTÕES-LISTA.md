# Questões da lista 07 - PF

## Questão 01

```js
/**
 * Criar uma função que busca o índice de um determinado item
 * em uma lista ORDENADA. Se o item estiver presente, ele deve
 * retornar o índice, caso contrário, deve retornar -1.
 * #recursividade
 * #lista
 */

const buscaBinaria = (lista, elem, inicio = 0, fim = lista.length - 1) => {
  // Caso base
  if (inicio > fim) return -1;
  // Encontra o meio da lista
  const meio = Math.floor((inicio + fim) / 2);
  // Se o elemento for menor o elemento do meio da lista, decrementa uma unidade do elemento do meio.
  if (elem < lista[meio]) return buscaBinaria(lista, elem, inicio, meio - 1);
  // Se o elemento for maior que o elemento do meio da lista, incrementa uma unidade do elemento do meio.
  if (elem > lista[meio]) return buscaBinaria(lista, elem, meio + 1, fim);
  // Retorna o índice do meio da lista
  return meio;
};

// Retorna 4 que é o índice do elemento 5 na lista.
console.log(buscaBinaria([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
```

O que o algoritmo acima faz é basicamente receber uma lista, um elemento e setamos dois valores no parâmetro por padrão, inicio = 0 que é o primeiro índice da lista e fim como sendo o último índice da lista. Depois disso, verificamos se o inicio é maior que o fim, se for, significa que o elemento não está na lista, então retornamos -1. Caso contrário, encontramos o meio da lista, que é o índice do meio da lista. Depois disso, verificamos se o elemento é menor que o elemento do meio da lista, se for, significa que o elemento está na primeira metade da lista, então chamamos a função novamente passando o elemento, o inicio e o meio - 1. Caso contrário, verificamos se o elemento é maior que o elemento do meio da lista, se for, significa que o elemento está na segunda metade da lista, então chamamos a função novamente passando o elemento, o meio + 1 e o fim. Caso contrário, significa que o elemento é igual ao elemento do meio da lista, então retornamos o meio da lista.

## Questão 02

```js
/**
 * Criar uma função que encontre o maior valor
 * numa lista de inteiros usando a recursividade.
 * Considere que a lista possui pelo menos um elemento.
 */

const maiorElemento = (lista) => {
  // Caso base
  if (lista.length === 0) {
    return `Lista vazia`;
  } else {
    // Caso geral
    return lista.length === 1
      ? lista[0]
      : Math.max(lista[0], maiorElemento(lista.slice(1)));
  }
};

// Retorna 99999
console.log(maiorElemento([1, 2, 3, 4, 5, 6, 7, 8, 9, 99999]));
```

No exemplo acima temos que a função recebe uma lista e analisa se a lista está vazia, se estiver, retorna **Lista vazia**, caso contrário, verifica se a lista possui apenas um elemento, se tiver, retorna o primeiro elemento da lista, caso contrário, retorna o maior elemento entre o primeiro elemento da lista e o maior elemento da lista sem o primeiro elemento. A função slice vai criando sub-listas a partir do primeiro elemento da lista, até que a lista fique vazia.

## Questão 03

```js
/**
 * Criar uma função que pega uma lista e devolve a soma de
 * todos os itens. Atenção: o item de uma lista pode ser outra lista.
 */

const somaElementos = (lista) => {
  // Caso base
  if (lista.length === 0) {
    return 0;
  } else {
    // Caso geral
    return lista.length === 1
      ? lista[0]
      : lista[0] + somaElementos(lista.slice(1));
  }
};

// Retorna 64
console.log(
  somaElementos(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, [1, 2, 3], [3], [5, [2, 3]]].flat(Infinity)
  )
);
```

No exemplo acima temos que a função recebe uma lista e analisa se a lista está vazia, se estiver, retorna 0, caso contrário, verifica se a lista possui apenas um elemento, se tiver, retorna o primeiro elemento da lista, caso contrário, retorna a soma do primeiro elemento da lista e a soma dos elementos da lista sem o primeiro elemento. O método [flat](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) com argumento Infinity transforma listas de listas(não importa o aninhamento) em apenas uma lista. O método slice vai criando sub-listas a partir do primeiro elemento da lista, até que a lista fique vazia.

## Questão 04

```js
/*
 * Função para retornar o número de vogais numa string.
 * Considere que todas as letras estão minúsculas.
 */

const totalVogais = (str) => {
  // Caso base
  if (str.length === 0) {
    return 0;
  } else {
    // Caso geral
    return /[aeiou]/.test(str[0])
      ? 1 + totalVogais(str.slice(1))
      : totalVogais(str.slice(1));
  }
};

// Retorna 5 que são 5 vogais.
console.log(totalVogais('aeioubcdfgh'));
```

Na função recursiva acima temos que a função recebe como argumento uma string e em seguida, no caso base é analisando se a string está vazia, caso esteja retorna 0. Caso contrário é analisado se o primeiro caractere da string é uma vogal, se for, retorna 1 + a função passando a string sem o primeiro caractere, caso contrário, retorna a função passando a string sem o primeiro caractere. O método slice vai criando sub-strings a partir do primeiro caractere da string, até que a string fique vazia. Note que usamos regex para analisar se o caractere na posição 0 é uma vogal. O método test() é um método que faz parte do regex que retorna true ou false. Ou seja, no codigo **/[aeiou]/.test(str[0])** temos que o regex **/[aeiou]/** vai analisar se o caractere na posição 0 da string é uma vogal, se for, retorna true, caso contrário, retorna false.

## Questão 05

```js
/*
 * Criar uma função que transforma frases terminadas com múltiplos pontos
 * de interrogação ? ou pontos de exclamação ! numa frase que termina apenas
 * com um, sem alterar a pontuação no meio das frases.
 * Ex: semgritaria("O que é isso?????") ---> "O que é isso?"
 */

const removeDuplaPontuacao = (str) => {
  // Se a string não tiver mais de 1 caractere, retorna a string
  if (str.length === 0) {
    return str;
  }
  // Se o primeiro caractere for igual ao segundo, retorna a string sem o primeiro caractere
  if (str[0] === str[1] && (str[0] === '!' || str[0] === '?')) {
    return removeDuplaPontuacao(str.slice(1));
  }
  // Se o primeiro caractere for diferente do segundo, retorna o primeiro caractere concatenado com a string sem o primeiro caractere
  return str[0] + removeDuplaPontuacao(str.slice(1));
};

// Exibe Olá!? Tudo bem? Meu nome é Douglas!
console.log(removeDuplaPontuacao('Olá!!!? Tudo bem??? Meu nome é Douglas!!!!'));
```

Na função recursiva acima temos que a função recebe como argumento uma string e em seguida, no caso base é analisando se a string está vazia, caso esteja retorna a string. Caso contrário é analisado se o primeiro caractere da string é igual ao segundo caractere da string e se o primeiro caractere é um ponto de exclamação ou ponto de interrogação, se for, retorna a função passando a string sem o primeiro caractere, caso contrário, retorna o primeiro caractere concatenado com a função passando a string sem o primeiro caractere. O método slice vai criando sub-strings a partir do primeiro caractere da string, até que a string fique vazia.

[Voltar](README.md);
