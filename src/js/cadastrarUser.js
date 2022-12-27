import utils from './exibirEscondeCard.js'
let cadastro_nome = document.getElementById('cadastro-input-name')
let cadastro_usuario = document.getElementById('cadastro-input-usuario')
let cadastro_senha = document.getElementById('cadastro-input-password')

let login_inputUser = document.getElementById('login-input-user')
let login_inputSenha = document.getElementById('login-input-senha')

function cadastrarUsuario() {
    if(cadastro_usuario.value && cadastro_senha.value !=""){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: cadastro_nome.value,
                userCad: cadastro_usuario.value,
                senhaCad: cadastro_senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

    }else{
        utils.campo()
    }
    
}

function acessarUsuario() {
    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: '',
    }
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    // console.log(listaUser)

    listaUser.forEach((item) => {
        if(login_inputUser.value == item.userCad && login_inputSenha.value == item.senhaCad){

            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })

    console.log(userValid)
}

const funcoesUsuarios = {
    cadastrarUsuario,
    acessarUsuario,
}

export default funcoesUsuarios