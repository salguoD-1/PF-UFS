# Funções Puras

Dizemos que uma função é **pura** quando ela não depende de valores externos para realizar determinada tafera.

- Exemplo: Imagine uma função que calcula o raio de um círculo, onde a fórmula é dada por PI \* RAIO \* RAIO

```js
// Variável global(externa)
const PI = 3.14;

const calculaRaio = (raio) => {
  // Passamos a variável global PI para a função.
  return raio * raio * PI;
};

console.log(calculaRaio(2));
```

No exemplo acima temos que a função calculaRaio() depende de uma variável externa **PI** para realizar o seu cálculo, chamamos essa função de função impura.

Para resolver esse problema, basta colocar a variável PI como parâmetro dentro da função.

```js
// Passamos PI como parâmetro para a função e definimos seu valor como sendo 3.14
const calculaRaio = (raio, PI = 3.14) => {
  // Retorna o cálculo do raio.
  return raio * raio * PI;
};
// Exibe 12.56
console.log(calculaRaio(2));
```

Como visto acima, para resolver o problema da pureza basta passar PI como parâmetro para a função. Dessa forma, a função não sofre efeitos externos, ou seja, o que entra é computado de forma adequada e retorna o valor computado sem sofrer nenhuma mutação.

Podemos também usar variáveis locais, ou seja, dentro da função. Dessa forma a pureza é alcançada.

```js
// Passamos PI como parâmetro para a função e definimos seu valor como sendo 3.14
const calculaRaio = (raio) => {
  // Declaramos e definimos o valor de PI
  const PI = 3.14;
  // Retorna o cálculo do raio.
  return raio * raio * PI;
};
// Exibe 12.56
console.log(calculaRaio(2));
```

Note que no exemplo acima PI é uma variável local, ou seja, está dentro da função. Portanto, essa função continua sendo pura pois não depende de fatores externos.

# Cidadãs de Primeira Classe

Dizemos que uma função é uma cidadã de primeira classe **quando é possível armazenar seu valor em uma variável e o tipo de dado dessa variável ser do tipo function(função.)**

```js
// Uma variável qualquer, seu tipo de dado é string.
const primeiroNome = "Douglas";
// Uma variável qualquer, seu tipo de dado é Number.
const idade = 22;

// Uma variável qualquer, seu tipo de dado é FUNCTION(função)
const imprimeAlgo = () => {
  console.log("Olá, tudo bem?");
};
// Olá, tudo bem?
imprimeAlgo();
// Retorna function, que é o seu tipo de dado.
console.log(typeof imprimeAlgo);
```

Ou seja, uma **função é uma cidadã de primeira classe quando ela é tratada como um valor e é armazenada em uma variável como se fosse um valor qualquer.** Para um maior aprofundamento visite a documentação [Função First-class
](https://developer.mozilla.org/pt-BR/docs/Glossary/First-class_Function)

# Funções de Alta Ordem

Funções de alta ordem **são funções que aceitam outras funções como argumento e podem ou não retornar novas funções como resultado de sua execução.**

- Por exemplo, imagine que temos duas funções, somar() e multiplicar() e uma terceira função chamada executar que recebe como argumento uma outra função.

```js
function somar(a, b, c) {
  return a + b + c;
}

function multiplicar(a, b) {
  return a * b;
}

// Recebe uma função como argumento.
function executar(funcao, ...parametros) {
  // Retorna uma função
  return function (textoInicial) {
    return `${textoInicial} ${funcao(...parametros)}`;
  };
}

// Passamos a função somar como argumento
const respostaUm = executar(somar, 4, 5, 6)("O resultado da soma é: ");
// Passamos a função multiplicar como argumento.
const respostaDois = executar(
  multiplicar,
  30,
  40
)("O resultado da multiplicação é: ");

console.log(respostaUm);
console.log(respostaDois);
```

No exemplo acima temos claramente um exemplo de função de alta ordem, note que a **função executar recebe como argumento uma outra função, e ao mesmo tempo, tem como retorno uma outra função.**

# Princípio da Imutabilidade

A imutabilidade é uma propriedade que garante que os elementos não tenham seu valor alterado por qualquer ação. Por exemplo uso de expressões ou aplicações de outras funções. Essa propriedade evita que nosso código sofra alterações indesejadas.

- Por exemplo, digamos que temos dois arrays, listaUm e listaDois, poderiamos atribuir a listaUm a listaDois?

```js
const listaUm = [3, 1, 7, 9, 4, 6];
const listaDois = listaUm;

// Exibe [ 3, 1, 7, 9, 4, 6 ]
console.log(listaDois);
```

Note que no exemplo acima a variável listaDois possui os mesmos valores que a listaUm. Já no exemplo abaixo, usamos o método sort que ordenada a lista, no entanto ordenamos a lista de forma crescente.

```js
const listaUm = [3, 1, 7, 9, 4, 6];
const listaDois = listaUm.sort((a, b) => a - b);
// Exibe [ 1, 3, 4, 6, 7, 9 ]
console.log(listaDois);
// Exibe [ 1, 3, 4, 6, 7, 9 ]
console.log(listaUm);
```

Note que usamos uma função dentro de outra função, e ordenamos ela da forma a - b, isso significa dizer que queremos uma ordenação crescente(do menor valor para o maior valor). Ou seja, a listaUm também foi ordenada pois os arrays não são imutáveis.

Para garantir a imutabilidade dos arrays, podemos **congelar** seus valores usando a função Object.Freeze(nome_do_array);

```js
// Usando a função Object.freeze para congelar os valores do array.
const listaUm = Object.freeze([3, 1, 7, 9, 4, 6]);
// Tentamos ordenar a listaUm
const listaDois = listaUm.sort((a, b) => a - b);

console.log(listaDois);
console.log(listaUm);
```

O exemplo acima irá gerar um erro pois estamos tentando modificar o array listaUm, no entanto seus valores são imutáveis, ou seja, estão congelados por conta da função Object.freeze. Uma forma de resolver esse problema seria passar o arrayUm dentro de um outro array, usando o operador spread.

```js
// Usando a função Object.Freeze para congelar os valores do array.
const listaUm = Object.freeze([3, 1, 7, 9, 4, 6]);
// Armazenamos a listaUm em um novo array usando o operador spread e em seguida ordenamos.
const listaDois = [...listaUm].sort((a, b) => a - b);
// Exibe [ 1, 3, 4, 6, 7, 9 ]
console.log(listaDois);
// Exibe [ 3, 1, 7, 9, 4, 6 ]
console.log(listaUm);
```

O exemplo acima é válido e preserva a imutabilidade da listaUm. Note que usamos o operador spread dentro do array para poder armazenar todos os valores ordenados dentro do novo array. Basicamente criamos a definição de um novo array.

[Voltar](README.md);
