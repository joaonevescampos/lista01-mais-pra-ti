// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const input = require('prompt-sync')();

const pokemonSelected = Number(input('Escolha uma opção do menu para escolha do seu pokémon inicial: 1: bulbassauro 2: squartle 3: charmander: '));

switch (pokemonSelected) {
    case 1:
    console.log(`Parabéns, o seu pokémon escolhido foi o bulbassauro.`);
        break;
    case 2:
        console.log(`Parabéns, o seu pokémon escolhido foi o squartle.`);
            break;
    case 3:
        console.log(`Parabéns, o seu pokémon escolhido foi o charmander.`);
            break;
    default:
        console.log(`Digite um valor válido (1, 2 ou 3).`);
        break;
}