//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if.

const input = require('prompt-sync')();
let continueLoop = true;

while(continueLoop) {
    const inputNumber = input('Digite um número inteiro: ');
    
    if(isNaN(inputNumber)) {
        console.log('Digite um número inteiro sem letras ou símbolos.');
    } else if (inputNumber%2 == 0) {
        console.log(`O número ${inputNumber} é um par.`);
    } else if (inputNumber%2 == 1) {
        console.log(`O número  ${inputNumber} é ímpar.`);
    } else {
        console.log('O número digitado deve ser um número inteiro.')
    }

    let correctAnswer = false;

    while(!correctAnswer) {
        let confirmation = input('Deseja continuar? (S/N) ');

        confirmation = confirmation.trim().toUpperCase()
    
        if(confirmation === 'S') {
            continueLoop = true;
            correctAnswer = true;
        } else if (confirmation === 'N') {
            continueLoop = false;
            correctAnswer = true
        } else {
            console.log('Digite S para "sim" ou N para "não".')
            correctAnswer = false;
        }
    }
}



