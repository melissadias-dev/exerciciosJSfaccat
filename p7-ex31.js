//  Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam
// ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma
// dos outros 2 lados


let a = Number(prompt("Digite o valor A: "))
let b = Number(prompt("Digite o valor B: "))
let c = Number(prompt("Digite o valor C: "))


if(a < b+c && b < a+c && c < b+a){
    alert(`É um triângulo! Os valores de cada lado são MENORES que a soma dos outros 2 lados`)
}else{
    alert(`Não é um triângulo. Os valores de cada lado são MAIORES que a soma dos outros 2 lados.`)
}