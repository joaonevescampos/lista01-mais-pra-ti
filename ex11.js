// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const input = require('prompt-sync')();

const sumFunction = (list) => {
    let sum = 0;

    for(let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return console.log(`Soma: ${sum}`)
}

const buildArray = () => {
    let list = Array();
    
    for(let i = 0; i < 5; i++) {
        const num = Number(input(`Digite o ${i + 1} número: `));
        list.push(num)
    }
    return list
}

sumFunction(buildArray());
