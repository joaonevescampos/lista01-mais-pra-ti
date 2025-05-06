// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

const fibonacciSequence = (num) => {
    const list = [1, 1];
    let nextNum;

    for(let i = 0; i < num - 2; i++) {
        nextNum = list[list.length - 1] + list[list.length - 2];
        list.push(nextNum)
    }

    return console.log(`Os ${num} primeiros números da sequencia de Fibonacci: ${list}`);
}

fibonacciSequence(10);
