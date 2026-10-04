// Para A = V, B = V e C = F, qual o resultado da avaliação das seguintes expressões:
// a) (A e B) ou (A xou B)
// b) (A ou B) e (A e C)
// c) A ou C e B xou A e não B 


let A = true;
let B = true;
let C = false;

let a = (A && B) || (A !== B);
let b = (A || B) && (A && C);
let c = A || (C && B) !== (A && !B);

console.log(`a) ${a ? "Verdadeiro" : "Falso"}`);
console.log(`b) ${b ? "Verdadeiro" : "Falso"}`);
console.log(`c) ${c ? "Verdadeiro" : "Falso"}`);