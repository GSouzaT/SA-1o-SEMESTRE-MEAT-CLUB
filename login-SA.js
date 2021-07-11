let nomeCadastrado = document.getElementById("nomeDeCadastro")
let enderecoCadastrado = document.getElementById("enderecoDeCadastro")
let emailCadastrado = document.getElementById("emailDeCadastro")
let senhaCadastrada = document.getElementById("senhaDeCadastro")
let senhaConfirmada = document.getElementById("confirmPass")
let emailSalvo = document.getElementById("nomeLogin")
let senhaSalva = document.getElementById("senhaLogin")

let arrayNomes = []
let arrayEndereco = []
let arrayEmail = []
let arraySenhas = []

function Cadastrar () {

    pegaDoLocalStorage()
    
    if (arrayNomes == null){

        arrayNomes = []
        arrayEndereco = []
        arrayEmail = []
        arraySenhas = []
        
        ArrayPush()
        // arrayNomes.push(nomeCadastrado.value)
        // arrayEndereco.push(enderecoCadastrado.value)
        // arrayEmail.push(emailCadastrado.value)
        // arraySenhas.push(senhaCadastrada.value)
            
        mandaProLocalStorage()

    } else {
          
        ArrayPush()
        // arrayNomes.push(nomeCadastrado.value) 
        // arrayEndereco.push(enderecoCadastrado.value)
        // arrayEmail.push(emailCadastrado.value)
        // arraySenhas.push(senhaCadastrada.value)
        
        mandaProLocalStorage()

        }
    alert ("Cadastro realizado")

    window.location.href="./listagem_meat.html"
    
}

function Logar() {

    arrayEmail = JSON.parse(localStorage.getItem("email"))
    arraySenhas = JSON.parse(localStorage.getItem("senha"))

    let logar = 0

    for(i=0; i < arrayEmail.length ; i++){

        // Se o nome e senha no input do login forem iguais ao nome e senha da vez no loop
        if(emailSalvo.value == arrayEmail[i] && senhaSalva.value == arraySenhas[i]){
          // Flag "logar" ativa	
	       logar = 1
        }
        
    }

    if (logar == 1){
        alert ("Login efetuado")
        window.location.href="./listagem_meat.html"    

        }else{
            alert ("Usuário ou Senha inválidos")
            }

}

function pegaDoLocalStorage(){

    arrayNomes = JSON.parse(localStorage.getItem("nome"))
    arrayEndereco = JSON.parse(localStorage.getItem("endereço"))
    arrayEmail = JSON.parse(localStorage.getItem("email"))
    arraySenhas = JSON.parse(localStorage.getItem("senha"))

}

function mandaProLocalStorage(){
    
    localStorage.setItem("nome", JSON.stringify(arrayNomes))
    localStorage.setItem("endereço", JSON.stringify(arrayEndereco))
    localStorage.setItem("email", JSON.stringify(arrayEmail)) 
    localStorage.setItem("senha", JSON.stringify(arraySenhas))

}

function ArrayPush() {

    arrayNomes.push(nomeCadastrado.value) 
    arrayEndereco.push(enderecoCadastrado.value)
    arrayEmail.push(emailCadastrado.value)
    arraySenhas.push(senhaCadastrada.value)

}

function JaCadastrado (){
    window.location.href = "tela-de-login-SA.html"
}

function NaoCadastrado (){
    window.location.href = "tela-de-cadastro-SA.html"
}