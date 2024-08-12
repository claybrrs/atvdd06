// 17. Elabore um programa que leia uma sequência de números inteiros do usuário e determine
// quantos números pares foram digitados antes do primeiro número ímpar. O programa deve parar
// de ler quando o usuário digitar o número 0 utilizando o while.

// Função para ler a sequência de números do usuário e contar pares antes do primeiro ímpar
// function contarParesAntesDoImpar() {
//     let countPares = 0;
//     let encontrouImpar = false;
//     let numero;

//     // Loop para ler números do usuário
//     while (true) {
//         // Lê o número do usuário
//         numero = parseInt(prompt("Digite um número (0 para parar):"), 10);

//         // Verifica se o número é 0, o que deve parar o programa
//         if (numero === 0) {
//             break;
//         }

//         // Verifica se o número é ímpar
//         if (numero % 2 !== 0) {
//             encontrouImpar = true;
//         } else if (!encontrouImpar) {
//             // Conta o número de pares se ainda não encontrou um ímpar
//             countPares++;
//         }
//     }

//     // Exibe o resultado
//     alert("Número de pares digitados antes do primeiro ímpar: " + countPares);
// }

// // Chama a função para executar o programa
// contarParesAntesDoImpar();