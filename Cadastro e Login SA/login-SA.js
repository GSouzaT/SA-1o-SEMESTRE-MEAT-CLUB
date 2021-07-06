
var nomeCadastrado = document.getElementById("nomeDeCadastro")
var endCadastrado = document.getElementById("endDeCadastro")
var emailCadastrado = document.getElementById("emailDeCasdastro")
var senhaCadastrada = document.getElementById("senhaDeCadastro")

var emailSalvo = document.getElementById ("email_Login")
var senhaSalva = document.getElementById ("senha_Login")

var arrayNomes = []
var arrayEnd = []
var arrayEmail = []
var arraySenhas = []

function Cadastrar () {

   arrayNomes = JSON.parse(localStorage.getItem("nome", nomeCadastrado))
   arrayEnd = JSON.parse(localStorage.getItem("endereço", endCadastrado))
   arrayEmail = JSON.parse(localStorage.getItem("email", emailCadastrado))
   arraySenhas = JSON.parse(localStorage.getItem("senha", senhaCadastrada))

    if (arrayNomes == null){

        arrayNomes = []
        arrayEnd = []
        arrayEmail = []
        arraySenhas = []
        
            arrayNomes.push (nomeCadastrado.value)    
            arrayEnd.push (endCadastrado.value)
            arrayEmail.push (emailCadastrado.value)
            arraySenhas.push (senhaCadastrada.value)
            
            localStorage.setItem("nome", JSON.stringify(nomeCadastrado.value))
            localStorage.setItem("endereço", JSON.stringify(endCadastrado.value))
            localStorage.setItem("email", JSON.stringify(emailCadastrado.value))
            localStorage.setItem("senha", JSON.stringify(senhaCadastrada.value))
    } else {
           
        arrayNomes.push (nomeCadastrado.value)    
        arrayEnd.push (endCadastrado.value)
        arrayEmail.push (emailCadastrado.value)
        arraySenhas.push (senhaCadastrada.value)
        
        localStorage.setItem("nome", JSON.stringify(nomeCadastrado.value))
        localStorage.setItem("endereço", JSON.stringify(endCadastrado.value))
        localStorage.setItem("email", JSON.stringify(emailCadastrado.value))
        localStorage.setItem("senha", JSON.stringify(senhaCadastrada.value))
        }
    alert ("Cadastro realizado")

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

function Pular (){
    window.location.href = "tela-de-login-SA-versao2.html"
}