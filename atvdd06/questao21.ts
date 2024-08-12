// 21. Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
// números possuem mais de três dígitos. O programa deve parar de ler quando o usuário digitar o
// número 0 utilizando o while.

// Função para contar quantos números possuem mais de três dígitos
// function contarMaisDeTresDigitos() {
//     let countMaisDeTresDigitos = 0;
//     let numero;

//     // Loop para ler números do usuário
//     while (true) {
//         // Lê o número do usuário
//         numero = parseInt(prompt("Digite um número (0 para parar):"), 10);

//         // Verifica se o número é 0, o que deve parar o programa
//         if (numero === 0) {
//             break;
//         }

//         // Verifica se o número possui mais de três dígitos
//         if (Math.abs(numero) >= 1000) {
//             countMaisDeTresDigitos++;
//         }
//     }

//     // Exibe o resultado
//     alert("Número de números com mais de três dígitos: " + countMaisDeTresDigitos);
// }

// // Chama a função para executar o programa
// contarMaisDeTresDigitos();