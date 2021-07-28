const paraExcluir = document.getElementById("excluir");
const nomeUsuario = document.getElementById("userPesquisado");
const emailUsuario = document.getElementById("emailPesquisado");
const senhaUsuario = document.getElementById("senhaPesquisada");

const keyUsuario = "usuario";
const usuariosCadastrados = ObtemUsuariosCadastrados();

// front-end

// function Cadastrar(nome, cpf, endereco, cep, email, senha) {
//     let usuario = {
//         nome: nome,
//         cpf: cpf,
//         endereco: endereco,
//         cep: cep,
//         email: email,
//         senha: senha
//     }
//     usuariosCadastrados.push(usuario)
//     return usuario;
// }

function Excluir(username) {
    
    let posicaoExcluir = 0;

    for (let i = 0; i < usuariosCadastrados.length; i++) {
        const usuario = usuariosCadastrados[i]
        if(paraExcluir.value == usuariosCadastrados[i]){
            posicaoExcluir = i;

            usuariosCadastrados.splice(posicaoExcluir, 1);

            SalvarUsuarios()

            alert('Usuario excluido!')
        }
    }
    
    paraExcluir.value=""
}

function ObtemUsuariosCadastrados(){
    let usuario = JSON.parse(localStorage.getItem(keyUsuario))
    if(usuario == null){
        return new Array()
    }
    return usuario
}

function SalvarUsuarios() {
    localStorage.setItem(keyUsuario, JSON.stringify(usuariosCadastrados))
}