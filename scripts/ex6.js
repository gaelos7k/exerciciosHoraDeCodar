//Arrays: Escreva um programa que declare um array de suas motos favoritas e imprima cada moto na lista usando um loop.

const motos = ["CG 160", "CBR 1000", "Kawasaki Ninja", "Yamaha Fazer"];

for (let i = 0; i < motos.length; i++) {      //Percorrendo o array.
    console.log(motos[i]);
}
for (let i = motos.length - 1; i >= 0; i--) { //Percorrendo o array ao contrário.
    console.log(motos[i]);
}