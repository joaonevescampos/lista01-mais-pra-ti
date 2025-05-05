// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else.

const input = require('prompt-sync')();

let age = Number(input('Digite sua idade: '));

if(age > 0 && age < 10) {
    console.log('Você é uma criança.');
} else if(age >= 10 && age < 14) {
    console.log('Você é um pré adolescente.');
} else if(age >= 14 && age < 20) {
    console.log('Você é um adolescente.');
} else if(age >= 20 && age < 50) {
    console.log('Você é um adulto.');
} else if(age >= 50 && age < 120) {
    console.log('Você é um idoso.');
} else if(age >= 120) {
    console.log('Você está morto ou é imortal.');
} else {
    console.log('Digite um número inteiro de idade válido.');
}