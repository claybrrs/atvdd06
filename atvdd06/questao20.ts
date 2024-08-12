// 20. Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média
// dos números divisíveis por 3. O programa deve parar de ler quando o usuário digitar o número 0
// utilizando o while.

// Função para calcular a média dos números divisíveis por 3
// function mediaDivisiveisPor3() {
//     let soma = 0;
//     let count = 0;
//     let numero;

//     // Loop para ler números do usuário
//     while (true) {
//         // Lê o número do usuário
//         numero = parseInt(prompt("Digite um número (0 para parar):"), 10);

//         // Verifica se o número é 0, o que deve parar o programa
//         if (numero === 0) {
//             break;
//         }

//         // Verifica se o número é divisível por 3
//         if (numero % 3 === 0) {
//             soma += numero;
//             count++;
//         }
//     }

//     // Calcula a média se houver números divisíveis por 3
//     let media = count > 0 ? soma / count : 0;

//     // Exibe o resultado
//     alert("Média dos números divisíveis por 3: " + media);
// }

// // Chama a função para executar o programa
// mediaDivisiveisPor3();