//  Ler dois valores e imprimir uma das três mensagens a seguir:
// ‘Números iguais’, caso os números sejam iguais
// ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ‘Segundo maior’, caso o segundo seja maior que o primeiro. 

let var1 = Number(prompt("Valor 1: "))
let var2 = Number(prompt("Valor 2: "))

if (var1 == var2) {
    alert("Números iguais.")
} else if (var1 > var2) {
    alert("O primeiro é maior.")
} else {
    alert("O segundo é maior.")
}