// Para o enunciado a seguir foi elaborado um algoritmo em Português Estruturado que contém
// erros, identifique os erros no algoritmo apresentado abaixo:
// Enunciado: Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule
// e mostre seu peso ideal, utilizando as seguintes fórmulas:
//  - para sexo masculino: peso ideal = (72.7 * altura) - 58
//  - para sexo feminino: peso ideal = (62.1 * altura) - 44.7 

function pesoIdeal(){
    let sexo = prompt("Digite o seu gênero(m/f): ")
    let altura = parseFloat(prompt("Digite sua altura em cm: "))
    let pesoIdealMasc = (72.7*altura) - 58
    let pesoIdealFem = (62.1*altura) - 44.7


    if(sexo == "m"){
        alert(`Seu peso ideal é ${pesoIdealMasc.toFixed(0)}kg`)
    }else if(sexo == "f"){
        alert(`Seu peso ideal é ${pesoIdealFem.toFixed(0)}kg`)
    }else{
        alert("Por favor digite um valor válido.")
    }

}
