//Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. 

function qualEoMaior() {
    let v1 = Number(prompt("Digite o valor 1: "))
    let v2 = Number(prompt("Digite o valor 2: "))

    if (v1 > v2){
        alert(`${v1} é maior que ${v2}`)
    }else{
        alert(`${v2} é maior que ${v1}`)
    }
}