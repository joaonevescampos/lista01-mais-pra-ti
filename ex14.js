// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const input = require('prompt-sync')();

const calcFatorial = (num) => {
    let fatorial = 1;
    for(let i = 0; i < num; i++) {
        fatorial *= (num - i);
    }
    return console.log(fatorial)
}

calcFatorial(Number(input('Digite o numero inteiro que deseja saber o fatorial: ')));