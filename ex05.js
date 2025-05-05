// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const input = require('prompt-sync')();

while(true) {
    let weight = Number(input('Digite seu peso em kg: '));
    let height = Number(input('Digite seu peso em m: '));
    
    if(isNaN(weight) || isNaN(height)) {
        console.log('Digite um número válido. Sem letras nem símbolos.')
        continue
    }

    const imc = weight/(height**2)
    
    if(imc > 0 && imc < 18) {
        console.log('Você está abaixo do peso.');
    } else if (imc >= 18 && imc < 25) {
        console.log('Você está com o peso normal.');
    } else if (imc >= 25 && imc < 30) {
        console.log('Você está com sobrepeso.');
    } else if (imc > 30) {
        console.log('Você está obeso.');
    } else {
        console.log('Valores nulos e negativos não são permitidos.')
    }

    console.log(`Seu IMC é: ${imc.toFixed(1)}`);

    let continueProgram = input('Deseja continuar? (S/ N): ').toUpperCase().trim();

    if(continueProgram == 'N') {
        break
    }
}

