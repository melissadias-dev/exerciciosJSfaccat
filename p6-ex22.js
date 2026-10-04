// A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
// de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
// Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
// o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
// (considere que o mês possua 4 semanas exatas). 


function calcularSalarioTotal() {
    let horasTrabalhadas = Number(prompt("Digite o número de horas trabalhadas no mês: "))

    let salarioPorHora = Number(prompt("Digite o valor do salário POR HORA: "))

    let salarioTotal


    if (horasTrabalhadas > 160) {
        let horasExtras = horasTrabalhadas - 160

        let valorHoraExtra = salarioPorHora * 0.5

        salarioTotal = (horasTrabalhadas*salarioPorHora) + (horasExtras*valorHoraExtra)

        alert(`Total salário com horas extras: R$ ${salarioTotal}`)

    } else {
        salarioTotal = salarioPorHora * horasTrabalhadas
        alert(`Total Salário: ${salarioTotal}`)
    }
}