// Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
// mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
// efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
// vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
// vendedor


// Leitura dos dados de entrada
let carrosVendidos = parseInt(prompt("Digite o número de carros vendidos: "))
let totalVendas = parseFloat(prompt("Digite o valor total de vendas: "))
let salarioFixo = parseFloat(prompt("Digite o valor do seu salário fixo: "))
let valorComissaoPorCarro = parseFloat(prompt("Digite o valor da comissão fixa por carro vendido: "))

// Cálculos das comissões
let comissaoFixaTotal = carrosVendidos * valorComissaoPorCarro
let comissaoPorcentagem = totalVendas * 0.05

// Cálculo do salário final
let salarioFinal = salarioFixo + comissaoFixaTotal + comissaoPorcentagem

// Exibição do resultado formatado em dinheiro
alert(`Salário Final do Vendedor: R$ ${salarioFinal.toFixed(2)}`)