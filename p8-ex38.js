// Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja
// diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a
// mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se
// esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a
// senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.

let codigo = 1234

let usuario = parseInt(prompt("Digite o número de usuário: "))

if(usuario == codigo){
    alert(`Olá, ${codigo}!`)
    let senha = parseInt(prompt(`Para continuar, digite a senha: `))

    if(senha == 9999){
        alert(`Acesso permitido!`)
    }else{
        do{
            alert("senha incorreta.")
            senha = parseInt(prompt(`Digite a senha novamente: `))
            
        }while(senha != 9999)

        alert(`Acesso permitido!`) 
    }
}