// 18. Crie um programa que leia uma sequência de números inteiros do usuário e exiba quantos
// números pares e quantos números ímpares foram digitados. O programa deve parar de ler quando
// o usuário digitar o número 0 utilizando o while.

// Função para ler a sequência de números do usuário e contar pares e ímpares
// function contarParesEImpares() {
//     let countPares = 0;
//     let countImpares = 0;
//     let numero;

//     // Loop para ler números do usuário
//     while (true) {
//         // Lê o número do usuário
//         numero = parseInt(prompt("Digite um número (0 para parar):"), 10);

//         // Verifica se o número é 0, o que deve parar o programa
//         if (numero === 0) {
//             break;
//         }

//         // Verifica se o número é par ou ímpar
//         if (numero % 2 === 0) {
//             countPares++;
//         } else {
//             countImpares++;
//         }
//     }

//     // Exibe o resultado
//     alert("Número de pares digitados: " + countPares);
//     alert("Número de ímpares digitados: " + countImpares);
// }

// // Chama a função para executar o programa
// contarParesEImpares();