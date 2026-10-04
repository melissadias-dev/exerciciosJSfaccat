// Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
// do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.


let time1 = prompt("Digite o nome do time 1: ")
let time2 = prompt("Digite o nome do time 2: ")
let gols1 = Number(prompt(`Número de gols do ${time1}`))
let gols2 = Number(prompt(`Número de gols do ${time2}`))

if(gols1 == gols2){
    alert("EMPATE!")
}else if(gols1 < gols2){
    alert(`${time2} ganhou!`)
}else{
    alert(`${time1} ganhou!`)
}