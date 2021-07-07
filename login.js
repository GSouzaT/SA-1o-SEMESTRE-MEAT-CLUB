let userCadastro = document.getElementById("user")
let senhaCadastro = document.getElementById("pass")
let clienteCadastro = document.getElementById("nome")
let enderecoCadastro = document.getElementById("endereco")

let nomeLogin = document.getElementById("userLog")
let senhaLogin = document.getElementById("passLog")

let usuario = []
let senhas = []
let nome = []
let logradouro = []


function Cadastrar(){

    
    usuario = JSON.parse(localStorage.getItem("cadastro_usuario"));
    senhas = JSON.parse(localStorage.getItem("cadastro_senha"));
    nome = JSON.parse(localStorage.getItem("nome_do_cliente"));
    logradouro = JSON.parse(localStorage.getItem("endereco_do_cliente"));

  if (usuario == null){
    
        usuario = []
        senhas = []

        usuario.push(userCadastro.value)
        senhas.push(senhaCadastro.value)

        localStorage.setItem("cadastro_usuario", JSON.stringify(usuario))
        localStorage.setItem("cadastro_senha", JSON.stringify(senhas))
  
    }else {

        usuario.push(userCadastro.value)
        senhas.push(senhaCadastro.value)

        localStorage.setItem("cadastro_usuario", JSON.stringify(usuario))
        localStorage.setItem("cadastro_senha", JSON.stringify(senhas))

    }

    alert("Seu cadastro foi efetuado com sucesso!");
    window.location.href="login_meat.html"

}

function Logar(){

    usuario = JSON.parse(localStorage.getItem("cadastro_usuario"))
    senhas = JSON.parse(localStorage.getItem("cadastro_senha"))

    let logou = 0

    for(i = 0; i < usuario.length; i++){

        if(nomeLogin.value == usuario[i] && senhaLogin.value == senhas[i]){

	   // Flag "logou" ativa	
	   logou = 1
	
	    }

    }
   
        if (logou == 1){

          // Mostra mensagem de login efetuado
          alert("Login efetuado!")

        }else{

          // Senão, mostra mensagem de login falhou
          alert("Login falhou!")

        }   

}