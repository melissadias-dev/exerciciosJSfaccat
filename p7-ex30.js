// Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem
// crescente.

let var1 = Number(prompt("Valor 1: "))
let var2 = Number(prompt("Valor 2: "))
let var3 = Number(prompt("Valor 3: "))

if (var1 > var2 && var1 > var3 && var2 > var3) {
    alert(`${var3}, ${var2}, ${var1}`)
} else if (var1 > var2 && var1 > var3 && var3 > var2) {
    alert(`${var2}, ${var3}, ${var1}`)
} else if (var2 > var1 && var2 > var3 && var1 > var3) {
    alert(`${var3}, ${var1}, ${var2}`)
} else if (var2 > var1 && var2 > var3 && var3 > var1) {
    alert(`${var1}, ${var3}, ${var2}`)
} else if (var3 > var1 && var3 > var2 && var1 > var2) {
    alert(`${var2}, ${var1}, ${var3}`)
} else {
    alert(`${var1}, ${var2}, ${var3}`)
}