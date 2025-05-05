// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const input = require('prompt-sync')();

let noteValue = Number(input('Digite sua nota (0 a 10): ')); 

if(0 > noteValue > 4) {
    console.log('Você está reprovado.');
} else if(4 > noteValue > 6) {
    console.log('Você está de recuperação.');
} else if(6 > noteValue > 10) {
    console.log('Você foi aprovado! Parabéns!');
} else {
    console.log('Digite um nota válida entre 0 e 10.');
}
