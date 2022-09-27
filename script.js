const operacaoCurrying = (a) => (b) => (c) => a * (b - c);
// Passamos os valores de a e b.
const dobro = operacaoCurrying(-2)(0);
// Temos a seguinte expressão: -2 * (0 - 10) = 20.
console.log(dobro(10));
