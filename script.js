// Função recursiva que testa se uma string consiste num palíndromo.
const formaPalindromo = (str) => {
  // Caso base: se a string tiver menos de 2 caracteres, ela é um palíndromo.
  if (str.length <= 1) {
    return true;
  }
  // Caso geral: se o primeiro e o último caracteres forem iguais, chama a função novamente, passando a string sem o primeiro e o último caracteres.
  if (str[0] === str[str.length - 1]) {
    return formaPalindromo(str.slice(1, str.length - 1));
  }
  // Caso base: se o primeiro e o último caracteres não forem iguais, a string não é um palíndromo.
  return false;
}

// Nota: usamos o método toLowerCase para garantir que a string seja testada independentemente de maiúsculas e minúsculas.
const myString = "Roma é amor".toLowerCase()

console.log(formaPalindromo(myString));