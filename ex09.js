// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

const regressiveCounting = () => {
    let time = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    for(let i = 0; i < time.length; i++) {
        setTimeout(
            () => {
                console.log(time[i])
            },
            1000 * (i + 1)
        )
    }
}

regressiveCounting()