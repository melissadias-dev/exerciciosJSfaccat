// Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor
// correspondente em graus Celsius (baseado na fórmula abaixo): 


let temperaturaF = parseFloat(prompt(`Digite a temepratura em graus Fahrenheit: `))

let grausCelsius = (temperaturaF-32)*(5/9)

alert(`A temperatura em graus Celsius é ${grausCelsius}°C`)