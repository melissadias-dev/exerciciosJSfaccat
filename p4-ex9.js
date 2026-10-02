//  Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
// Calcular e escrever o valor do novo salário. 

let salarioAtual = parseFloat(prompt(`Digite o seu salário atual: `))
let percentualReajuste = parseFloat(prompt(`Digite o percentual de reajuste: `))

let salarioAjustado = salarioAtual + (salarioAtual*(percentualReajuste/100))

alert(`O novo salário é ${salarioAjustado}`)