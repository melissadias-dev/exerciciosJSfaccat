//  Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
// dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
// das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
// novo com a mulher mais velha


let h1 = parseInt(prompt(`Idade do homem 1:`))
let h2 = parseInt(prompt(`Idade do homem 2:`))
let m1 = parseInt(prompt(`Idade da mulher 1:`))
let m2 = parseInt(prompt(`Idade da mulher 2:`))

let homemMaisVelho, homemMaisNovo
let mulherMaisVelha, mulherMaisNova


if (h1 > h2) {
    homemMaisVelho = h1
    homemMaisNovo = h2
} else {
    homemMaisVelho = h2
    homemMaisNovo = h1
}


if (m1 > m2) {
    mulherMaisVelha = m1
    mulherMaisNova = m2
} else {
    mulherMaisVelha = m2
    mulherMaisNova = m1
}


let soma = homemMaisVelho + mulherMaisNova
let produto = homemMaisNovo * mulherMaisVelha

alert(`Soma do homem mais velho com a mulher mais nova: ${soma}\nProduto do homem mais novo com a mulher mais velha: ${produto}`)