// Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
// minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
// de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte


function duracaoJogo(){
    let inicio = Number(prompt("Digite a hora que o jogo começou (digite de 1 a 24): "))
    let fim = Number(prompt("Digite a hora que o jogo acabou (digite de 1 a 24): "))
    let duracao 

    if(inicio < fim){
        duracao = fim - inicio
        alert(`Duração do jogo: ${duracao}h`)
    }else if(inicio > fim){
        duracao = (24-inicio) + fim
        alert(`Duração do jogo: ${duracao}h`)
    }else{
        alert(`Duração do jogo: 24h`)
    }
}