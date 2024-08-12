// 23. Elabore um programa que leia uma sequência de números inteiros do usuário e exiba o menor
// valor digitado que seja positivo e ímpar. O programa deve parar de ler quando o usuário digitar o
// número 0 utilizando o while.

// Função para encontrar o menor valor positivo e ímpar
// function menorValorPositivoImpar() {
//     let menorImpar = Infinity; // Inicia com um valor infinito para encontrar o menor
//     let numero;

//     // Loop para ler números do usuário
//     while (true) {
//         // Lê o número do usuário
//         numero = parseInt(prompt("Digite um número (0 para parar):"), 10);

//         // Verifica se o número é 0, o que deve parar o programa
//         if (numero === 0) {
//             break;
//         }

//         // Verifica se o número é positivo e ímpar
//         if (numero > 0 && numero % 2 !== 0) {
//             if (numero < menorImpar) {
//                 menorImpar = numero;
//             }
//         }
//     }

//     // Exibe o resultado, verifica se um número ímpar positivo foi encontrado
//     if (menorImpar === Infinity) {
//         alert("Nenhum número positivo e ímpar foi digitado.");
//     } else {
//         alert("Menor valor positivo e ímpar: " + menorImpar);
//     }
// }

// // Chama a função para executar o programa
// menorValorPositivoImpar();