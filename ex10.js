// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. 

const input = require('prompt-sync')();

const repeteNumber = (num) => {
    for(let i = 0; i < 10; i++) {
       console.log(num)
    }
}

repeteNumber(Number(input('Digite um numero inteiro: ')))