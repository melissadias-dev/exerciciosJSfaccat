// Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
// Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média
// final é: 


let n1 = parseFloat(prompt("Digite a nota 1: "))
let n2 = parseFloat(prompt("Digite a nota 2: "))
let n3 = parseFloat(prompt("Digite a nota 3: "))

media = n1*2+n2*3+n3*5/10

alert(`A média ponderada do(a) aluno(a) é: ${media}`)