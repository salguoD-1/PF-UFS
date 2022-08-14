// Funções anônimas

// Podemos definir uma função qualquer apenas no momento de seu uso, ou seja, não é necessário atribuir um nome a ela.

// [EXEMPLO: Lista 02, Q12] Escreva um programa para calcular o maior 
// e o menor valor real das raízes de uma equação de segundo grau. 

// Temos os três argumentos a b c e retornamos uma função.
const raiz = (a, b, c, f) => {
    // Realiza o cálculo do delta.
    const delta = (b ** 2) - (4 * a * c);
    // Faz uma análise do delta caso negativo.
    if (delta < 0) return undefined;

    // Armazena os valores das raízes.
    const positivo = ((-b) + delta) / (2 * a);
    const negativo = ((-b) - delta) / (2 * a);
    // Retorna uma função que foi passada como argumento.
    return f(positivo, negativo);
}

// Valores como argumento
const a = 1;
const b = -5;
const c = 6;

// Chamamos a função e realizamos a checagem das raízes.
// x e y são as raízes que são retornadas da função.
const maiorRaiz = raiz(a, b, c, (x, y) => (x >= y? x : y));
const menorRaiz = raiz(a, b, c, (x, y) => (x <= y? x : y));

// Realiza a checagem das raízes.
const textoSaida = (x, y) => x == undefined? 'Não há raízes reais!' : `As raízes da equação são: ${x} e ${y}!`;

// Chama a função textoSaida que recebe dois parâmetros(as raízes) e exibe o resultado.
// As raízes da equação são: 2 e 3!
console.log(textoSaida(menorRaiz, maiorRaiz))
