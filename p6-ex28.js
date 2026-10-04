// Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. 


let v1 = Number(prompt("Digite o valor 1: "))
let v2 = Number(prompt("Digite o valor 2: "))
let v3 = Number(prompt("Digite o valor 3: "))

if(v1 > v2 && v1 > v3){
    alert(`${v1} é maior.`)
}else if(v2 > v1 && v2 > v3){
    alert(`${v2} é maior.`)
}else{
    alert(`${v3} é maior.`)
}