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















[Voltar](README.md)