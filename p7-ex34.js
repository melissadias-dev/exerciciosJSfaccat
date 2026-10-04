// Seja o seguinte algoritmo:
// início
// ler x
// ler y
// z  (x*y) + 5
// se z <= 0 então
// resposta  ‘A’
// senão
// se z <= 100 então
// resposta  ‘B’
// senão
// resposta  ‘C’
//  fim_se
//  fim_se
// escrever z, resposta
// fim
// Faça um teste de mesa e complete o quadro a seguir para os seguintes valores:


function testarAlgoritmo(x, y) {
    // z = (x * y) + 5
    let z = (x * y) + 5;
    let resposta;

    if (z <= 0) {
        resposta = 'A';
    } else {
        if (z <= 100) {
            resposta = 'B';
        } else {
            resposta = 'C';
        }
    }

    console.log(`X: ${x} | Y: ${y} | Z: ${z} | Resposta: ${resposta}`);
}

testarAlgoritmo(3, 2);
testarAlgoritmo(150, 3);
testarAlgoritmo(7, -1);
testarAlgoritmo(-2, 5);
testarAlgoritmo(50, 3);