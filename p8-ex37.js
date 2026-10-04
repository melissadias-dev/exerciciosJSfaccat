// Uma fruteira está vendendo frutas com a seguinte tabela de preços:
// Até 5 Kg Acima de 5 Kg
// Morango R$ 2,50 por Kg R$ 2,20 por Kg
// Maçã R$ 1,80 por Kg R$ 1,50 por Kg
// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
// ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
// morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente


let kgMorangos = parseFloat(prompt(`Digite o kg de morangos: `))
let kgMacas = parseFloat(prompt(`Digite o kg de maçãs: `))

let precoMorangos
let precoMacas
let desconto10

if(kgMorangos <= 5){
    precoMorangos = kgMorangos * 2.50
}else{
    precoMorangos = kgMorangos * 2.20
}

if(kgMacas <= 5){
    precoMacas = kgMacas*1.80
}else{
    precoMacas = kgMacas*1.50
}

let totalCompra = precoMacas+precoMorangos

let kgFrutas = kgMorangos + kgMacas

if(kgFrutas > 8 || totalCompra > 25){
    desconto10 = totalCompra * 0.10
    totalCompra = totalCompra - desconto10
    alert(`Resumo de Compra:
        Valor Maçãs: ${precoMacas.toFixed(2)}
        Valor Morangos: ${precoMorangos.toFixed(2)}
        Total(kg) de frutas: ${kgFrutas.toFixed(2)}kg
        Desconto(10%): Sim
        Total Compra R$ ${totalCompra.toFixed(2)}
        `)
}else{
    alert(`Resumo de Compra:
        Valor Maçãs: ${precoMacas.toFixed(2)}
        Valor Morangos: ${precoMorangos.toFixed(2)}
        Total(kg) de frutas: ${kgFrutas.toFixed(2)}kg
        Desconto(10%): Não
        Total Compra R$ ${totalCompra.toFixed(2)}
        `)
}


