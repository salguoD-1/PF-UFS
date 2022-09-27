// Tem como entrada um array e retorna o tamanho da string.
const contagem = (lista) => lista.map((texto) => texto.length);

// Tem como entrada um array e retorna os elementos desse array * 3.
const triplo = (lista) => lista.map((valor) => valor * 3);

// Tem como entrada um array e retorna um array ordenado de forma crescente.
const ordena = (lista) => lista.sort((a, b) => a - b);

// Acumulador = o array de entrada
// funcaoAtual = uma das 3 funcoes que vai ser calculada.
const composicao = (...funcoes) => (lista) => funcoes.reduce((acumulador, funcaoAtual) => funcaoAtual(acumulador), lista)

const resultado = composicao(
  contagem,
  triplo,
  ordena
)

const nomes = ['Ana Beatriz', 'Bia', 'Guilherme', 'João', 'Rafael']

console.log(resultado(nomes))





