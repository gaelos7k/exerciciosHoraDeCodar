/* Operadores: Crie um programa que solicite ao usuário dois números
 e exiba o resultado da soma, subtração, multiplicação e divisão desses números.*/

 let n1 = parseInt(prompt("Insira um número"));//nao precisava converter em inteiro
 let n2 = parseInt(prompt("Insira outro número"));

 console.log(n1+n2);//poderia concatenar cada uma com a string de cada operador, a soma de ... é ... etc...
 console.log(n1-n2);
 console.log(n1*n2);
 console.log(n1/n2);