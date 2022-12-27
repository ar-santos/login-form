import utils from './exibirEscondeCard.js'
let btnEnter = document.getElementById('btn-login-enter')
let btnPesquisa = document.getElementById('btn-pesquisa')
let close = document.getElementById('close')
let btnAddress = document.getElementById('btn-address')
let btnSobre = document.getElementById('btn-sobre')
let btnCompany = document.getElementById('btn-company')
let inputUser = document.getElementById('login-input-user')
let btnCadastrar = document.getElementById('btn-cadastrar')
let nome = document.getElementById('cadastro-input-name')
let usuario = document.getElementById('cadastro-input-usuario')
let senha = document.getElementById('cadastro-input-password')
let nomeLogin = document.getElementById('login-input-user')
let inputPesquisa = document.getElementById('input-pesquisa')
let senhaLogin = document.getElementById('login-input-senha')
let visualizarSenha = document.getElementById('visualizar-senha')
let exibirSenhaLogin = document.getElementById('visualizarSenhaLogin')
let btnExibirCadastro = document.getElementById('login-btn-criar')
let btnExibirLogin = document.getElementById('cadastro-btn-entrar')


import getUserData from './pegarDados.js'
import funcoesUsuarios from './cadastrarUser.js'

function cadastrarUser() {
    funcoesUsuarios.cadastrarUsuario()
    utils.valida_form()
    // acessar.entrar()
}

btnCadastrar.addEventListener('click', cadastrarUser, false)

function card() {
    inputUser.value = ''
    senhaLogin.value = ''
    utils.trocarCoresLogin()
    funcoesUsuarios.acessarUsuario()
}

btnEnter.addEventListener('click', card, false)

function exibirPesquisar() {
    getUserData()
    inputPesquisa.value = ''
}

btnPesquisa.addEventListener('click', exibirPesquisar, false)


inputUser.addEventListener('keyup', (e)=> {
    (e.key === 'Enter' ? card() : null)
})


function closeCard() {
    utils.fecharCard()
}

function informSobre() {
    utils.exibirInformSobre()
}

function informAddress() {
    utils.exibirAddress()
}

function informCompany() {
    utils.exibirInformCompany()
}


function confirmaNome() {
    utils.labelName()
}

nome.addEventListener('keyup', confirmaNome, false)

function confirmaUser() {
    utils.labelUsuario()
}

usuario.addEventListener('keyup', confirmaUser, false)

function confirmaSenha() {
    utils.confirmSenha()
}

senha.addEventListener('keyup', confirmaSenha, false)

function confirmaLoginName() {
    utils.LoginEnterName()
}

nomeLogin.addEventListener('keyup', confirmaLoginName, false)

function confirmaLoginSenha() {
    utils.confirmSenhalogin()
}

senhaLogin.addEventListener('keyup', confirmaLoginSenha, false)

function mostrarSenha() {
    utils.visualizarSenhaCadastro()
}

visualizarSenha.addEventListener('click', mostrarSenha, false)

function mostrarSenhaLogin() {
    utils.visualizarSenhaLogin()
}

exibirSenhaLogin.addEventListener('click', mostrarSenhaLogin, false)

function exibirPaginaCadastro() {
    utils.exibirCadastro()
    inputUser.value = ''
    senhaLogin.value = ''
    utils.trocarCoresLogin()
}

btnExibirCadastro.addEventListener('click', exibirPaginaCadastro, false)

function campoLogin() {
   utils.exibirCampoLogin()
   nome.value = ''
   usuario.value = ''
   senha.value = ''
}
btnExibirLogin.addEventListener('click', campoLogin, false)

close.addEventListener('click', closeCard, false)
btnSobre.addEventListener('click', informSobre, false)
btnAddress.addEventListener('click', informAddress, false)
btnCompany.addEventListener('click', informCompany, false)