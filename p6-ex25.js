//  Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
// escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
// ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.

function conta(){
    let numConta = Number(prompt("Digite o número da conta: "))
    let saldo = Number(prompt("Digite o saldo: "))
    let debito = Number(prompt("Digite o débito em conta: "))
    let credito = Number(prompt("Digite o número de crédito: "))
    let saldoAtual = saldo - debito + credito

    if(saldoAtual >= 0){
        alert(`Saldo Positivo: R$ ${saldoAtual}`)
    }else{
        alert(`Saldo Negativo: R$ ${saldoAtual}`)
    }
}