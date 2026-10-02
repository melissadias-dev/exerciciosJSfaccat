// As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
// compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
// escreva o custo total da compra.


function maca() {
    let qtdMacas = parseInt(prompt("Quantas maçãs você vai querer? "))


    if (qtdMacas < 12) {
        alert(`As maçãs custam R$ 1,30 cada. Total compra: ${qtdMacas * 1.30}`)

    } else {
        alert(`As maçãs custam R$ 1,00 cada. Total compra: ${qtdMacas * 1}`)
    }
}