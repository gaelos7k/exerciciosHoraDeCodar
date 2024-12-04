/* Operadores: Crie um programa que solicite ao usuário dois números
 e exiba o resultado da soma, subtração, multiplicação e divisão desses números.*/

let n1 = Number(prompt("Insira um número"));//Não precisava converter em inteiro, mas achei melhor converter para número com Number();
let n2 = Number(prompt("Insira outro número"));

console.log(`A soma de ${n1} mais ${n2} é: ` + (n1 + n2)); //Se não houver uma conversão de string para número o operador "+" entende que é string.

console.log(`A subtração de ${n1} menos ${n2} é: ` + (n1 - n2));

console.log(`A multiplicação de ${n1} vezes ${n2} é: ` + (n1 * n2));

console.log(`A divisão de ${n1} dividido por ${n2} é: ` + (n1 / n2));