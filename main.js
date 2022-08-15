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
console.log(resultado);