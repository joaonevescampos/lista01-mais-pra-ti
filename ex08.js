// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const input = require('prompt-sync')();

const num1 = Number(input('Digite o primeiro número: '));
const num2 = Number(input('Digite o segundo número: '));

const ordenate = (num1, num2) => {
    if(isNaN(num1) || isNaN(num2)) {
        return console.log('Digite um número válido sem letras ou símbolos.');
    }
    
    if(num1 > num2) {
        return console.log(`Ordem crescente: ${num2}, ${num1}`);
    }
    
    return console.log(`Ordem crescente: ${num1}, ${num2}`);
}

ordenate(num1, num2)