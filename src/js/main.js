import utils from './exibirEscondeCard.js'
import getUserData from './pegarDados.js'
import funcoesUsuarios from './cadastrarUser.js'

let inputNomeCad = document.getElementById('cadastro-input-name')
let inputUsuarioCad = document.getElementById('cadastro-input-usuario')
let inpuSenhaCad = document.getElementById('cadastro-input-senha')
let btnExibirLogin = document.getElementById('cadastro-btn-entrar')
let visualizarSenha = document.getElementById('visualizar-senha')
let btnCadastrarUser = document.getElementById('btn-cadastrar')

let inputUserLogin = document.getElementById('login-input-user')
let inputSenhaLogin = document.getElementById('login-input-senha')
let btnEnterLogin = document.getElementById('btn-login-enter')
let btnExibirCadastro = document.getElementById('login-btn-criar')
let exibirSenhaLogin = document.getElementById('visualizarSenhaLogin')

let inputPesquisarUser = document.getElementById('input-pesquisarUser')
let btnPesquisaUser = document.getElementById('btn-pesquisaUser')

let close = document.getElementById('close-card')
let btnAddress = document.getElementById('btn-address')
let btnSobre = document.getElementById('btn-sobre')
let btnCompany = document.getElementById('btn-company')

function labelNomeCadastro() {
    utils.validarlabelNameCadastro()
}

inputNomeCad.addEventListener('keyup', labelNomeCadastro, false)

function labelUsuarioCadastro() {
    utils.validarLabelUsuarioCadastro()
}

inputUsuarioCad.addEventListener('keyup', labelUsuarioCadastro, false)

function labelSenhaCadastro() {
    utils.validarLabelSenhaCadastro()
}

inpuSenhaCad.addEventListener('keyup', labelSenhaCadastro, false)

function cardLogin() {
    utils.exibirCardLogin()
    inputNomeCad.value = ''
    inputUsuarioCad.value = ''
    inpuSenhaCad.value = ''
}

btnExibirLogin.addEventListener('click', cardLogin, false)

function mostrarSenha() {
    utils.visualizarSenhaCadastro()
}

visualizarSenha.addEventListener('click', mostrarSenha, false)

function cadastrarUser() {
    funcoesUsuarios.cadastrarUsuario()
    utils.validarCardCadastro()
    // acessar.entrar()
}

btnCadastrarUser.addEventListener('click', cadastrarUser, false)

inputNomeCad&&inputUsuarioCad&&inpuSenhaCad.addEventListener('keyup', (e)=> {
    (e.key === 'Enter' ? cadastrarUser() : null)
})

function acessarUsuarioCadastrado() {
    utils.trocarCoresLogin()
    funcoesUsuarios.acessarUsuario()
    inputUserLogin.value = ''
    inputSenhaLogin.value = ''
}

btnEnterLogin.addEventListener('click', acessarUsuarioCadastrado, false)

inputUserLogin&&inputSenhaLogin.addEventListener('keyup', (e)=> {
    (e.key === 'Enter' ? acessarUsuarioCadastrado() : null)
})

function exibirPaginaCadastro() {
    utils.exibirCardCadastro()
    inputUserLogin.value = ''
    inputSenhaLogin.value = ''
    utils.trocarCoresLogin()
}

btnExibirCadastro.addEventListener('click', exibirPaginaCadastro, false)

function mostrarSenhaLogin() {
    utils.visualizarSenhaLogin()
}

exibirSenhaLogin.addEventListener('click', mostrarSenhaLogin, false)

function exibirPesquisa() {
    getUserData()
    inputPesquisarUser.value = ''
}

btnPesquisaUser.addEventListener('click', exibirPesquisa, false)

inputPesquisarUser.addEventListener('keyup', (e)=> {
    (e.key === 'Enter' ? exibirPesquisa() : null)
})

function closeCard() {
    utils.fecharCard()
}

close.addEventListener('click', closeCard, false)

function informAddress() {
    utils.exibirAddress()
}

btnAddress.addEventListener('click', informAddress, false)

function informSobre() {
    utils.exibirInformSobre()
}

btnSobre.addEventListener('click', informSobre, false)

function informCompany() {
    utils.exibirInformCompany()
}

btnCompany.addEventListener('click', informCompany, false)

function labelLoginSenha() {
    utils.validarLabelSenhaLogin()
}

inputSenhaLogin.addEventListener('keyup', labelLoginSenha, false)

function labelLoginName() {
    utils.validarLabelNameLogin()
}

inputUserLogin.addEventListener('keyup', labelLoginName, false)