//Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente. 

function ordemCrescente(){
    let v1 = Number(prompt("Digite um valor: "))
    let v2 = Number(prompt("Digite outro valor: "))

    if(v1 > v2){
        alert(`${v2}, ${v1}`)
    }else{
        alert(`${v1}, ${v2}`)
    }
}