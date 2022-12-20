import utils from './exibirEscondeCard.js'
let nome = document.getElementById('input-name')
let usuario = document.getElementById('input-usuario')
let senha = document.getElementById('input-password')

let inputUser = document.getElementById('input-user')
let inputSenha = document.getElementById('input-senha')



function cadastrar() {
    if(nome && usuario && senha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

    }else{
        // utils.campo()
    }
    
}

function entrar() {
    let listarUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }
    listarUser = JSON.parse(localStorage.getItem('listaUser'))
    console.log(listarUser)

    listarUser.forEach((item) => {
        if(inputUser.value == item.userCad && inputSenha.value == item.senhaCad){

            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })

    console.log(userValid)
}

const acessar = {
    cadastrar,
    entrar,
}

export default acessar