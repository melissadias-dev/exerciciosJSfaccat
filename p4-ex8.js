//Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
// brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
// de eleitores. 

let eleitores = parseInt(prompt('Número de eleitores: '))
let votosBrancos = parseInt(prompt('Número de votos brancos: '))
let votosValidos = parseInt(prompt('Número de votos válidos: '))
let votosNulos = parseInt(prompt('Número de votos nulos: '))

let percentualVotosBrancos = (votosBrancos/eleitores)*100
let percentualVotosNulos = (votosNulos/eleitores)*100
let percentualVotosValidos = (votosValidos/eleitores)*100

alert(`Total Eleitores: ${eleitores}`)
alert(`Percentual de votos brancos: ${percentualVotosBrancos}%`)
alert(`Percentual de votos nulos: ${percentualVotosNulos}%`)
alert(`Percentual de votos válidos: ${percentualVotosValidos}%`)