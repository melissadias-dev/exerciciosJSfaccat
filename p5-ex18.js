// Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
// poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). 


function calcularIdade(){
    let anoAtual = parseInt(prompt("Digite o ano atual: "))
    let anoNasc = parseInt(prompt("Digite o seu ano de nascimento: "))
    let idadeAtual = anoAtual - anoNasc

    if(idadeAtual < 16){
        alert("Você não tem idade suficiente para votar esse ano.")
    }else if(idadeAtual >= 18 && idadeAtual <= 69){
        alert("Voto obrigatório!")
    }else if(idadeAtual >= 16){
        alert("Você pode votar, mas não é obrigatório.")
    }else{
        alert("Voto facultativo.")
    }
}