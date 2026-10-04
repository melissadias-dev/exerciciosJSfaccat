// Um posto está vendendo combustíveis com a seguinte tabela de descontos:
// até 20 litros, desconto de 3% por litro Álcool
// acima de 20 litros, desconto de 5% por litro
// até 20 litros, desconto de 4% por litro Gasolina
// acima de 20 litros, desconto de 6% por litro
// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da
// seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se
// que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. 


let opcaoEscolhida = prompt("Digite a opção desejada: A para álcool ou G para gasolina: ")

if (opcaoEscolhida == "A") {
    let A = "Álcool"
    let descontoA

    let litrosAlcool = Number(prompt(`Quantos litros de ${A} você deseja?`))

    let TotalAlcool = 2.90 * litrosAlcool

    if (litrosAlcool <= 20) {
        descontoA = litrosAlcool * 0.03
        TotalAlcool = TotalAlcool - descontoA
        alert(`Total com desconto 3%: ${TotalAlcool}`)
    } else if (litrosAlcool > 20) {
        descontoA = litrosAlcool * 0.05
        TotalAlcool = TotalAlcool - descontoA
        alert(`Total com desconto 5%: ${TotalAlcool}`)
    } else {
        alert(`Você não quer nenhum litro? Que pena! :( )`)
    }
} else if (opcaoEscolhida == "G") {
    let G = "Gasolina"
    let descontoG

    let litrosGasolina = Number(prompt(`Quantos litros de ${G} você deseja?`)) 

    let TotalGasolina = 3.30 * litrosGasolina

    if(litrosGasolina <= 20){
        descontoG = litrosGasolina * 0.04
        TotalGasolina = TotalGasolina - descontoG
        alert(`Total com desconto 4%: ${TotalGasolina}`)
    } else if (litrosGasolina > 20) {
        descontoG = litrosGasolina * 0.06
        TotalGasolina = TotalGasolina - descontoG
        alert(`Total com desconto 6%: ${TotalGasolina}`)
    } else {
        alert(`Você não quer nenhum litro? Que pena! :( )`)
    }


}





