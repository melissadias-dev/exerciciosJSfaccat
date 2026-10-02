//Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
// dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

let anos = parseInt(prompt('Quantos anos você tem? '))
let mes = parseInt(prompt('Quantos meses se passaram após o seu aniversário? '))
let dia = parseInt(prompt('Quantos dias se passaram após o seu aniversário? '))

let idade = (365*anos)+(30*mes) + dia

alert(`Você está vivo(a) há ${idade} dias na Terra.`)