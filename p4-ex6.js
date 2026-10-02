//Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo. 

let base = parseInt(prompt('Digite o valor da base do retângulo: '))
let altura = parseInt(prompt('Digite a altura: '))


let area = base*altura
let perimetro = (base*2)+(altura*2)

alert(`Área: ${area}, Perímetro: ${perimetro}`)