// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//     10) utilizando um loop for.

const input = require('prompt-sync')();

const createMultplicationTable = (num) => {
    console.log('TABUADA')
    for(let mult = 0; mult < 10; mult++) {
        const result = (mult + 1) * num;
        console.log(`${num} x ${mult + 1} = ${result}`)
    }
}

createMultplicationTable(Number(input('Digite o número que deseja saber a tabuada: ')));