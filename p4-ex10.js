//O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
// distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor
// seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,
// calcular e escrever o custo final ao consumidor. 


let porcentagemDistribuidor = 28/100
let impostos = 45/100

let custoFabrica = parseFloat(prompt('Digite o custo de fábrica do carro: '))

let custoFinal = custoFabrica + (custoFabrica*porcentagemDistribuidor) + (custoFabrica*impostos)

alert(`O custo final do carro é de R$${custoFinal.toFixed(2)}, considerando os impostos e afins.`)
