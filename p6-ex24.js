//  Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
// ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
// ultrapassar este valor, calcular e escrever o seu salário total. 


function vendedor(){
    let salarioFixo = Number(prompt("Digite o valor do salário fixo do vendedor: "))
    let totalVendas = Number(prompt("Digite o total de vendas: "))

    let salarioTotal 

    if (totalVendas <= 1500){
        salarioTotal = salarioFixo+(totalVendas*0.03)
        alert(`Total Salário: ${salarioTotal}`)
    }else{
        let primeiros1500 = 1500*0.03
        let totalComissoes = primeiros1500 + (totalVendas - 1500)*0.05
        salarioTotal = salarioFixo+totalComissoes
        alert(`Total Salário: ${salarioTotal}`)
    }
}