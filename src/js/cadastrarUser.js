import utils from './exibirEscondeCard.js'
let cadastroNome = document.getElementById('cadastro-input-name')
let cadastroUsuario = document.getElementById('cadastro-input-usuario')
let cadastroSenha = document.getElementById('cadastro-input-senha')

let loginInputUser = document.getElementById('login-input-user')
let loginInputSenha = document.getElementById('login-input-senha')

function cadastrarUsuario() {
    if(cadastroUsuario.value && cadastroSenha.value !=""){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: cadastroNome.value,
                userCad: cadastroUsuario.value,
                senhaCad: cadastroSenha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

    }else{
        utils.exibirCampoPequisarUser()
    }
}

function acessarUsuario() {
    let listaUsuarioCadastrado = []

    let userValid = {
        nome: '',
        user: '',
        senha: '',
    }
    listaUsuarioCadastrado = JSON.parse(localStorage.getItem('listaUser'))

    listaUsuarioCadastrado.forEach((item) => {
        if(loginInputUser.value == item.userCad && loginInputSenha.value == item.senhaCad){

            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })

    if(loginInputUser.value == userValid.user && loginInputSenha.value == userValid.senha){

        utils.pesquisarUsuario()
        utils.ocultarCampoLogin()
        
    }else {
        utils.exibirCampoObrigatorioLogin()
    }
}

const funcoesUsuarios = {
    cadastrarUsuario,
    acessarUsuario,
}

export default funcoesUsuarios