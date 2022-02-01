/*
André Luiz tem 33 anos, pesa 74 kg 
tem 1.66 de altura e seu IMC é de 26.854405574103644
*/

const nome = 'André Luiz';
const sobrenome = 'Santos';
const idade = 33;
const peso = 74;
const alturaEmM = 1.66;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2022 - idade;

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)