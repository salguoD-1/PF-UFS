# Recursão

- Recursão é um conceito na área da programação que basicamente significa uma função que chama a sí mesma x vezes. Mas para isso, é necessário definirmos um caso base, ou seja, um caso de parada para evitar um loop em nossas chamadas de função.

* PADRÃO 1: descobrir qual o n-ésimo elemento de uma sequência infinita.

````js
// [EXEMPLO] Observe a sequência aritmética a seguir e crie um 
// programa para encontrar o valor do n-ésimo elemento: 
// {2,7,12,17,22,...}

// Função recursiva
const nEsimoElemento = (valor) => {
    if (valor == 1) return 2;
    else {
        // Chamamos a própria função e decrementamos o valor em -1 x vezes.
        return nEsimoElemento(valor - 1) + 5;
    }
};

// Retorna o elemento 22 que é o quinto elemento da sequência.
console.log(nEsimoElemento(5))
````

* [EXEMPLO: Lista 04, Q2] N-ésimo termo da sequência {0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...}
````js
// Sequência de fibonacci

const fibonacci = (n) => {
    // Caso base
    if (n == 0) return 0;
    else if (n == 1) return 1;
    else {
        // Fazemos uma dupla recursividade e somamos os resultados.
        return fibonacci(n- 1) + fibonacci(n - 2);
    }
};

// Resultado é 5.
console.log(`Fibonacci de 5 é: ${fibonacci(5)}`);
````
* PADRÃO 2: implementar uma operação que é formada por uma repetição de operações mais primitivas.
````js
// Cálculo da potência de um número natural de forma recursiva.

const potencia = (b) => (e) => {
    // Caso base
    if (e == 0) return 1;
    else {
        // Multiplicamos a base vezes o resultado da chamada recursiva n vezes.
        return b * potencia(b)(e - 1);
    }
}

// Variáveis e atribuições.
const b = 2;
const e = 10;

// Resultado = 1024.
console.log(`Base: ${b}, Expoente: ${e}, Resultado: ${potencia(b)(e)}`);
````

* [EXEMPLO] Implementar o operador de exponenciação para permitir calcular a potência inteira de um número mm qualquer: m^n

````js
const expoente = (b, e) => {
    // Caso base.
    if (e < 0) {
        return 1 / expoenteInteiro(b, e * (-1));
    } else {
        // Passamos a base e o expoente para a outra função.
        return expoenteInteiro(b, e);
    }
};

const expoenteInteiro = (b, e) => {
    // Caso base
    if (e == 0) return 1;
    else {
        // Aplicação da recursividade.
        return b * expoenteInteiro(b, e - 1)
    }
};

// Retorna 0.25
console.log(expoente(2, -2));
````

No exemplo acima note que temos duas funções e que na função expoente temos o retorno 1 / expoenteInteiro(b, e * (-1)). Esse e * (-1) é para transformarmos valores negativos em positivos, pois quando temos um expoente inteiro nós invertemos o numerador com o denonimador e ele passa a ser positivo.

* [EXEMPLO: Lista 04, Q7] Implementar o operador de divisão a fim de encontrar o resto da divisão entre dois números inteiros positivos fornecidos, n e m.

````js
const restoDivisão = (n, m) => {
    // Caso base
    if (n < m) {
        return n;
    } else {
        // Aplicação da recursividade.
        return restoDivisão(n - m, m);
    }
}

// Note que temos n - m pois uma divisão é basicamente uma subtração de valores.

// Retorna 2 que é o resto da divisão.
console.log(restoDivisão(8, 3));
````

* [EXEMPLO: Lista 04, Q8] Implementar o Máximo Divisor Comum (MDC) entre dois inteiros fornecidos, n e m. Naturalmente, você não deve utilizar operadores de divisão da linguagem.

````js
// MDC(Máximo Divisor Comum) entre dois números inteiros.

const mdcNumero = (x, y) => {
    // Casos base.
    if (x > y) {
        // Invertemos a ordem dos parâmetros.
        return mdcNumero(y, x);
    } else if (x == 0) {
        // O MDC entre 0 e qualquer número é o próprio numero.
        return y;
    } else {
        // Aplicamos a recursividade
        return mdcNumero(x, y - x);
    }
};

const resultado = `O MDC entre ${5} e ${20} é: ${mdcNumero(5, 20)}`;
console.log(resultado);
````

No exemplo acima note que invertemos a ordem dos parâmetros em x > y, isso acontece pois queremos passar o valor y = 0 para x = 0, dessa forma cai no segundo caso base e retorna o valor de y que é 5, ou seja, o MDC é 5.

# Lista 04

````js
// Q1. N-ésimo termo da sequência {3,6,12,24,48,...}.

const nEsimoTermo = (num) => {
    // Caso base.
    if (num == 1) return 3;
    else {
        // Múltiplicamos por 2 por que a razão é 2.
        return nEsimoTermo(num - 1) * 2;
    }
};

const resultado = `O ${5}-énesimo termo da sequência é: ${nEsimoTermo(5)}`;
console.log(resultado);
````

No exemplo acima temos que o caso base é n ser igual a 1, pois temos que o primeiro elemento da PG é 3. Após isso temos a recursividade onde decrementamos em uma unidade e múltiplicamos por 2 que é a razão da PG.


````js
// Q2. N-ésimo termo da sequência {0,1,1,2,3,5,8,13,21,34,55,...}.

// Esse problema é o fibonacci recursivo.
const nEsimoTermo = (num) => {
    // Casos base retorna o próprio número.
    if (num <= 1) return num;
    else {
        // Fazemos uma dupla recursividade.
        return nEsimoTermo(num - 1) + nEsimoTermo(num - 2);
    }
};

const resultado = `O ${10}-énesimo termo da sequência é: ${nEsimoTermo(10)}`;
console.log(resultado);
````

No exemplo acima o caso base é o valor(num) ser menor ou igual a 1, para isso retornamos o próprio número pois fibonacci é uma sequência de soma entre seus dois números antecessores.

````js
// Q3. Soma dos n primeiros números naturais.

const somaNaturais = (num) => {
    // Caso base.
    if (num == 0) return 0;
    else {
        // Somamos os valores.
        return somaNaturais(num - 1) + (num - 1);
    }
};

const resultado = `A soma dos ${5} primeiros naturais é: ${somaNaturais(5)}`;
// O resultado é 10.
console.log(resultado);
````

````js
// Q4. Fatorial de um número natural qualquer.

const fatorial = (num) => {
    // Caso base.
    if (num == 0 || num == 1) return 1;
    else {
        // Chamada recursiva.
        return num * fatorial(num - 1);
    }
};

const resultado = `O fatorial de ${5} é: ${fatorial(5)}`;
// Exibe 120.
console.log(resultado);
````

````js
// Q5. Potência natural do número 2: 2^n Naturalmente, você não deve 
// utilizar o operador de expoente da linguagem.

const potenciaBase2 = (e) => {
    // Caso base.
    if (e == 0) return 1;
    else {
        // Retorna a multiplicação da base(2) vezes o expoente x vezes.
        return 2 * potenciaBase2(e - 1);
    }
};

const resultado = `Base: ${2}, Expoente: ${5}, Resultado: ${potenciaBase2(5)}`;
// Exibe 32.
console.log(resultado);
````

````js
// Q6. Resto da divisão entre dois números inteiros positivos fornecidos, n e m. 
// Naturalmente, você não deve utilizar operadores de divisão da linguagem.

const restoDivisão = (n) => (m) => {
    // Caso base retorna o próprio n.
    if (n < m) return n;
    else {
        // Decrementamos o dividendo pelo divisor.
        return restoDivisão(n - m)(m);
    }
};

const resultado = `O resto da divisão entre ${25} e ${5} é: ${restoDivisão(25)(5)}`;
// Exibe 0, porque o resto da divisão 25/5 é 0.
console.log(resultado);
````

````js
// Q7. Quociente da divisão entre dois números inteiros positivos fornecidos, n e m. 
// Naturalmente, você não deve utilizar operadores de divisão da linguagem.

const quociente = (n) => (m) => {
    // Caso base.
    if (n < m) return 0;
    else {
        // Retorna a soma 1 + a quantidade de chamadas recursivas.
        return 1 + quociente(n - m)(m);
    }
};

const resultado = `O quociente da divisão ${31} por ${7} é: ${quociente(31)(7)}`;
// Exibe 4.
console.log(resultado);
````


````js
// Q8. Máximo Divisor Comum (MDC) entre dois números inteiros positivos, n e m. 
// Naturalmente, você não deve utilizar operadores de divisão da linguagem.

const mdcNumeros = (n) => (m) => {
    // Caso base inverte a ordem dos parâmetros.
    if (n < m) return mdcNumeros(m)(n);
    else if (m == 0) return n;
    else {
        // Decrementamos o valor.
        return mdcNumeros(n - m)(m);
    }
};

const resultado = `O MDC entre ${12} e ${8} é: ${mdcNumeros(12)(8)}`;
// Retorna 4.
console.log(resultado);
````