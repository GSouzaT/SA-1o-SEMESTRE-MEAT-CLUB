var nomeCadastrado = document.getElementById("nomeDeCadastro")
var enderecoCadastrado = document.getElementById("enderecoDeCadastro")
var emailCadastrado = document.getElementById("emailDeCasdastro")
var senhaCadastrada = document.getElementById("senhaDeCadastro")

var emailSalvo = document.getElementById ("email_Login")
var senhaSalva = document.getElementById ("senha_Login")

var arrayNomes = []
var arrayEndereco = []
var arrayEmail = []
var arraySenhas = []

function Cadastrar () {

    pegaDoLocalStorage()

    if (arrayNomes == null){

        arrayNomes = []
        arrayEndereco = []
        arrayEmail = []
        arraySenhas = []
        
        arrayNomes.push (nomeCadastrado.value)    
        arrayEndereco.push (enderecoCadastrado.value)
        arrayEmail.push (emailCadastrado.value)
        arraySenhas.push (senhaCadastrada.value)
            
        mandaProLocalStorage()

    } else {
           
        arrayNomes.push (nomeCadastrado.value)    
        arrayEndereco.push (enderecoCadastrado.value)
        arrayEmail.push (emailCadastrado.value)
        arraySenhas.push (senhaCadastrada.value)
        
        mandaProLocalStorage()

        }
    alert ("Cadastro realizado")

    window.location.href='link pagina principal'

}

function Logar() {

    arrayEmail = JSON.parse(localStorage.getItem("emailCadastrado"))
    arraySenhas = JSON.parse(localStorage.getItem("senhaCadastrada"))

    var logar = 0

    for(i=0; i < arrayEmail.length; i++){

        // Se o nome e senha no input do login forem iguais ao nome e senha da vez no loop
        if(emailSalvo.value == arrayEmail[i] && senhaSalva.value == arraySenhas[i]){
          // Flag "logar" ativa	
	       logar = 1
        }

    if (logar == 1){
        alert ("Login efetuado")
            
        }else{
            alert ("Usuário ou Senha inválidos")
            }
        
    }

}

function pegaDoLocalStorage(){

    arrayNomes = JSON.parse(localStorage.getItem("nome", nomeCadastrado))
    arrayEndereco = JSON.parse(localStorage.getItem("endereço", enderecoCadastrado))
    arrayEmail = JSON.parse(localStorage.getItem("email", emailCadastrado))
    arraySenhas = JSON.parse(localStorage.getItem("senha", senhaCadastrada))

}

function mandaProLocalStorage(){
    
    localStorage.setItem("nome", JSON.stringify(nomeCadastrado.value))
    localStorage.setItem("endereço", JSON.stringify(enderecoCadastrado.value))
    localStorage.setItem("email", JSON.stringify(emailCadastrado.value))
    localStorage.setItem("senha", JSON.stringify(senhaCadastrada.value))

}

function JaCadastrado (){
    window.location.href = "tela-de-login-SA.html"
}

function NaoCadastrado (){
    window.location.href = "tela-de-cadastro-SA.html"
}