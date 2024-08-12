// 24. Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
// números são pares e quantos números são ímpares entre o primeiro e o último número digitado.
// O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

// Função para contar pares e ímpares entre o primeiro e o último número digitado
// function contarParesEImparesEntrePrimeiroEUltimo() {
//     let numeros = [];
//     let numero;
//     let primeiroNumero, ultimoNumero;

//     // Loop para ler números do usuário
//     while (true) {
//         // Lê o número do usuário
//         numero = parseInt(prompt("Digite um número (0 para parar):"), 10);

//         // Verifica se o número é 0, o que deve parar o programa
//         if (numero === 0) {
//             break;
//         }

//         // Adiciona o número à lista
//         numeros.push(numero);
//     }

//     // Verifica se há pelo menos dois números para analisar
//     if (numeros.length < 2) {
//         alert("Número insuficiente de entradas para realizar a contagem.");
//         return;
//     }

//     // Define o primeiro e o último número
//     primeiroNumero = numeros[0];
//     ultimoNumero = numeros[numeros.length - 1];

//     let countPares = 0;
//     let countImpares = 0;

//     // Contar pares e ímpares entre o primeiro e o último número
//     for (let i = 1; i < numeros.length - 1; i++) {
//         if (numeros[i] % 2 === 0) {
//             countPares++;
//         } else {
//             countImpares++;
//         }
//     }

//     // Exibe o resultado
//     alert("Número de pares entre o primeiro e o último número: " + countPares);
//     alert("Número de ímpares entre o primeiro e o último número: " + countImpares);
// }

// // Chama a função para executar o programa
// contarParesEImparesEntrePrimeiroEUltimo();