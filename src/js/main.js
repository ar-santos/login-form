import utils from './exibirEscondeCard.js'
let btnEnter = document.getElementById('btn-enter')
let close = document.getElementById('close')
let btnAddress = document.getElementById('btn-address')
let btnSobre = document.getElementById('btn-sobre')
let btnCompany = document.getElementById('btn-company')
let inputUser = document.getElementById('input-user')
let btnCadastrar = document.getElementById('btn-cadastrar')
import getUserData from './pegarDados.js'
import acessar from './cadastrarUser.js'

function cadastrarUser() {
    acessar.cadastrar()
    utils.exibirCampoCadastro()
    // acessar.entrar()
}

btnCadastrar.addEventListener('click', cadastrarUser, false)

function card() {
    getUserData()
    inputUser.value = ''
}

btnEnter.addEventListener('click', card, false)

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

close.addEventListener('click', closeCard, false)
btnSobre.addEventListener('click', informSobre, false)
btnAddress.addEventListener('click', informAddress, false)
btnCompany.addEventListener('click', informCompany, false)