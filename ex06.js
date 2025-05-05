// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:

// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B

// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const input = require('prompt-sync')();

let side1 = Number(input('Digite o primeiro lado do triângulo: '));
let side2 = Number(input('Digite o segundo lado do triângulo: '));
let side3 = Number(input('Digite o terceiro lado do triângulo: '));

const triangleClassification = () => {
    if(isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        return console.log('Digite um número válido. Evite letras e símbolos.');
    }
    
    if((side1 > (side2 + side3)) || (side2 > (side1 + side3)) || (side3 > (side1 + side2))) {
        return console.log('Estes dados fornecidos não formam um triângulo.')
    }

    if(side1 == side2 && side1 == side3 && side2 == side3) {
        return console.log('Este é um triângulo equilátero.');
    } else if(side1 != side2 && side1 != side3 && side2 != side3) {
        return console.log('Este é um triângulo escaleno.');
    } else {
        return console.log('Este é um triângulo isósceles.');
    }
}

triangleClassification()


