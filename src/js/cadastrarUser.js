import utils from './exibirEscondeCard.js'
let nome = document.getElementById('input-name')
let usuario = document.getElementById('input-usuario')
let senha = document.getElementById('input-senha')

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

        setTimeout(()=> {
            utils.exibirFormLogin()
        },3000)

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

    listarUser.forEach((item) => {
        if(usuario.value == item.userCad && senha.value == item.senhaCad){

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