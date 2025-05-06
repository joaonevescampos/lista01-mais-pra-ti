// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const input = require('prompt-sync')();

let apples = Number(input('Digite a quantidade de maças que deseja comprar: '));

const calcApplesPrice = (apples) => {
    let price = 0

    if(isNaN(apples) || apples < 0) {
        return console.log('Digite um número válido positivo sem letras ou símbolos.');
    }

    apples < 12 ? price = 0.3 : price = 0.25;

    const total = apples * price;

    return console.log(`Total a pagar: R$${total.toFixed(2).replace('.', ',')}`);
}

calcApplesPrice(apples)