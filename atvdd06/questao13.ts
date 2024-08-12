// 13. Faça um programa que leia um número inteiro e exiba a soma dos seus dígitos elevados ao cubo
// utilizando o while.

// function somaCubosDosDigitos(numero) {
//     let soma = 0;
//     let num = Math.abs(numero); // Usa o valor absoluto para lidar com números negativos

//     while (num > 0) {
//         // Obtém o último dígito
//         let digito = num % 10;
//         // Calcula o cubo do dígito e adiciona à soma
//         soma += Math.pow(digito, 3);
//         // Remove o último dígito do número
//         num = Math.floor(num / 10);
//     }

//     return soma;
// }

// // Função para ler a entrada do usuário e exibir o resultado
// function processarEntrada() {
//     // Obtém a entrada do usuário
//     let entrada = prompt("Digite um número inteiro:");
//     let numero = parseInt(entrada);

//     // Verifica se a entrada é um número válido
//     if (isNaN(numero)) {
//         console.log("Entrada inválida. Por favor, digite um número inteiro.");
//     } else {
//         // Calcula a soma dos dígitos elevados ao cubo e exibe o resultado
//         let resultado = somaCubosDosDigitos(numero);
//         console.log(A soma dos dígitos elevados ao cubo é: ${resultado});
//     }
// }
