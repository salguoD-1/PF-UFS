# Definição de Função como Retorno
````js
// Note que desagregamos os parâmetros.
const potencia = (base) => (expoente) => base ** expoente;
// Passamos 5 como argumento para o parâmetro base e 3 como
// argumento para o parâmetro expoente.
const respostaUm = potencia(5)(3);
console.log(`O resultado é: ${respostaUm}`);

const respostaDois = potencia(81)(1/2);
console.log(`O resultado é: ${respostaDois}`);

const respostaTres = potencia(2)(-1);
console.log(`O resultado é: ${respostaTres}`);


// [EXEMPLO] Defina funções para calcular o quadrado, o cubo e a 
// raiz quadrada de um número passado 
// como argumento reaproveitando uma definição de função genérica chamada expoente.


// Passamos primeiro o expoente que queremos.
const expoente = (expoente) => (base) => base ** expoente;
// Retorna (base) => base ** 2
const quadrado = expoente(2);
// Retorna (base) => base ** 3
const cubo = expoente(3);
// Retorna (base) => base ** 1/2
const raizQuadrada = expoente(1/2);

console.log(`\nO resultado é: ${quadrado(10)}`);
console.log(`\nO resultado é: ${cubo(3)}`);
console.log(`\nO resultado é: ${raizQuadrada(81)}`);
````

# Definição de Função como Argumento
````js
// Definição de função como argumento

// Se uma função é um valor então temos que ela
// pode ser passada como argumento para outras funções.

// Note que declaramos várias funções básicas
const subtrair = (x, y) => x - y;
const somar = (x, y) => x + y;
const multiplicar = (x, y) => x * y;
const divir = (x, y) => x / y;
const concatenar = (x, y, sep=' ') => x+sep+y;
const iniciais = (x, y) => x[0] + y[0];
// const negativo = subtrair(0, y);

// Note que temos um f ali entre parênteses, isso significa
// que estamos passando uma função como argumento para outra função.
const exec = (f, x, y) => f(x, y);

// Passando função como argumento para a função exec
// Chama a função subtrair e passa 50, 25 como argumento para x, y.
const resposta1 = exec(subtrair, 50, 25); 

const resposta2 = exec(somar, 50, 25);

const resposta3 = exec(multiplicar, 50, 25);

const resposta4 = exec(divir, 50, 25);

const resposta5 = exec(concatenar, 'Isaac', 'Newton');

const resposta6 = exec(iniciais, 'Isaac', 'Newton');

// Note que todas as funções acima receberam uma outra função como argumento.
console.log(`\nO resultado é: ${resposta1}`);
console.log(`O resultado é: ${resposta2}`);
console.log(`O resultado é: ${resposta3}`);
console.log(`O resultado é: ${resposta4}`);
console.log(`O resultado é: ${resposta5}`);
console.log(`O resultado é: ${resposta6}`);
````

No exemplo acima temos que ao chamarmos a função resposta1 ela irá chamar a funçao exec() que realiza a chamada da função passada como argumento, nesse caso subtrair() e logo em seguida passamos 50 e 25 como argumentos para os parêmtros x e y. Após isso, a função resposta1 retorna uma outra função que é a função subtrair, mas antes ela realiza a chamada da função subtrair que executa sua tarefa. Por fim, a função exec retorna o valor de sua operação.