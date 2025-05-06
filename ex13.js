// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const input = require('prompt-sync')();

const buildArray = () => {
    const list = [];
    let loop = true
    while(loop) {
        list.push(Number(input('Digite o número decimal para tirar a média. Digite "0" se quiser parar: ')))
        list.forEach((num) => num === 0 ? loop = false : loop = true);
    }
    return list
}

const averageFunction = (list) => {
    const sum = list.reduce((acumulator, value) => acumulator + value);
    const average = sum/(list.length - 1)
    return console.log(`Média = ${average.toFixed(2)}`)
}

averageFunction(buildArray());
