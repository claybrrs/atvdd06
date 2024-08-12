// 19. Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
// números são divisíveis por 2, quantos são divisíveis por 3 e quantos são divisíveis por 5. O
// programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

// Função para ler a sequência de números do usuário e contar divisíveis por 2, 3 e 5
// function contarDivisiveis() {
//     let countDivisiveisPor2 = 0;
//     let countDivisiveisPor3 = 0;
//     let countDivisiveisPor5 = 0;
//     let numero;

//     // Loop para ler números do usuário
//     while (true) {
//         // Lê o número do usuário
//         numero = parseInt(prompt("Digite um número (0 para parar):"), 10);

//         // Verifica se o número é 0, o que deve parar o programa
//         if (numero === 0) {
//             break;
//         }

//         // Verifica divisibilidade e atualiza contadores
//         if (numero % 2 === 0) {
//             countDivisiveisPor2++;
//         }
//         if (numero % 3 === 0) {
//             countDivisiveisPor3++;
//         }
//         if (numero % 5 === 0) {
//             countDivisiveisPor5++;
//         }
//     }

//     // Exibe o resultado
//     alert("Número de divisíveis por 2: " + countDivisiveisPor2);
//     alert("Número de divisíveis por 3: " + countDivisiveisPor3);
//     alert("Número de divisíveis por 5: " + countDivisiveisPor5);
// }

// // Chama a função para executar o programa
// contarDivisiveis();