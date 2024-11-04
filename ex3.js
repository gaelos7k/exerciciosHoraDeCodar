//Condições: Escreva um programa que pergunte ao usuário sua idade e imprima se ele é maior ou menor de idade.
let idade = parseInt(prompt("Qual sua idade?"));//mesmo sem a conversão para inteiro daria certo esse código.
if(idade>=18){
    console.log(`Você é maior de idade!`)
}else {
    console.log(`Você é menor de idade!`)//está com crase pois ru ia fazer uma concatenação inexistente, deixei invés de usar aspas.
}