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
    nome.push(clienteCadastro.value)
    logradouro.push (enderecoCadastro.value)

    localStorage.setItem("cadastro_usuario", JSON.stringify(usuario))
    localStorage.setItem("cadastro_senha", JSON.stringify(senhas))
    localStorage.setItem("nome_do_cliente", JSON.stringify(nome))
    localStorage.setItem("endereço_do_cliente", JSON.stringify(logradouro))
  
  } else {

      usuario.push(userCadastro.value)
      senhas.push(senhaCadastro.value)
      nome.push(clienteCadastro.value)
      logradouro.push (enderecoCadastro.value)

      localStorage.setItem("cadastro_usuario", JSON.stringify(usuario))
      localStorage.setItem("cadastro_senha", JSON.stringify(senhas))
      localStorage.setItem("nome_do_cliente", JSON.stringify(nome))
      localStorage.setItem("endereço_do_cliente", JSON.stringify(logradouro)
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

function Listar (){

  // Pega valores do LocalStorage (se tiver) e armazena
  usuario = JSON.parse(localStorage.getItem("cadastro_usuario"));
  senhas = JSON.parse(localStorage.getItem("cadastro_senha"));
  nome = JSON.parse(localStorage.getItem("nome_do_cliente"));
  logradouro = JSON.parse(localStorage.getItem("endereco_do_cliente"));
  
  // cria uma varivael vazia para armazenar os dados da lista
  let lista = ""

  //realiza um loop do tam dos vetores
  for (i = 0; i < nomes.length; i++){
     //armazena na varivael lista os dados dos vetores  
      lista += nomes[i] + " - " + senhas[i] + "<br>"

  }

  //mostra a lista dentro da div centro
  document.getElementById("centro").innerHTML = lista

}

function Excluir(){

  // Pega valores do LocalStorage (se tiver) e armazena
  usuario = JSON.parse(localStorage.getItem("cadastro_usuario"));
  senhas = JSON.parse(localStorage.getItem("cadastro_senha"));
  nome = JSON.parse(localStorage.getItem("nome_do_cliente"));
  logradouro = JSON.parse(localStorage.getItem("endereco_do_cliente"));

   //realiza um loop do tam dos vetores
  for (i = 0; nomes.length; i++){

    //cria uma variavel para armazenar a posição dos dadosa serem exluidos
    let posicaoExcluir

    //compara o valor do input de exclusão com o valor de cada posição do vetor
    if (nomeExcluir.value == nomes[i]) {
      
      //armazena a posiçao (se existir um valor igual)
      posicaoExcluir = i

      //array.splice (posiçao do elemento, qnt de elementos a escluir, qnt de elementos a add)
      //utiliza a posicao para excluir os dados  
      nomes.splice (posicaoExcluir, 1)
      senhas.splice (posicaoExcluir, 1)
  
      //mostra msg de dados excluídos
      alert ("Usuário exluído")

      // Joga para o LocalStorage novamente
      localStorage.setItem("cadastro_usuario", JSON.stringify(nomes))
      localStorage.setItem("cadastro_senha", JSON.stringify(senhas))

    }
    //limpa dados do input exluir
    document.getElementById("excluir") = " "
  }
}
