let login = document.getElementById('aba-login')
let card = document.getElementById('card')
let informAddress = document.getElementById('inform-address')
let informSobre = document.getElementById('inform-sobre')
let informCompany = document.getElementById('inform-company')
let btnAddress = document.getElementById('btn-address')
let btnSobre = document.getElementById('btn-sobre')
let btnCompany = document.getElementById('btn-company')
let campoObrigatorio = document.getElementById('campo-obrigatorio')
let abaCadastrar = document.getElementById('aba-cadastrar')
let campoCadastro = document.getElementById('campo-cadastro')

function exibirCard() {
    if (login.style.display == 'block') {
        login.style.display = 'none';
        card.style.display = 'block';
    } else { 
        login.style.display = 'none'  
        card.style.display = 'block';
    } 
}

function fecharCard() {
    if (card.style.display == 'block') {
        login.style.display = 'block'
        card.style.display = 'none'
    }
}

function exibirAddress() {
    if (informAddress.style.display == 'block') {
        informAddress.style.display = 'block';
        informSobre.style.display = 'none';
        informCompany.style.display = 'none';
        btnAddress.style.background = 'linear-gradient(136deg, rgba(255, 0, 198, 1) 0%, rgba(255, 255, 0, 1) 100%)';
        btnSobre.style.background = '#8080804c';
        btnCompany.style.background = '#8080804c';
    }else { 
       informAddress.style.display = 'block'  
       informSobre.style.display = 'none';
       informCompany.style.display = 'none';
       btnAddress.style.background = 'linear-gradient(136deg, rgba(255, 0, 198, 1) 0%, rgba(255, 255, 0, 1) 100%)';
       btnSobre.style.background = '#8080804c';
       btnCompany.style.background = '#8080804c';
    } 
 }   


function exibirInformSobre() {
    if (informSobre.style.display == 'block') {
        informCompany.style.display = 'none'
        informSobre.style.display = 'block'
        informAddress.style.display = 'none'
        btnSobre.style.background = 'linear-gradient(136deg, rgba(255, 0, 198, 1) 0%, rgba(255, 255, 0, 1) 100%)';
        btnAddress.style.background = '#8080804c';
        btnCompany.style.background = '#8080804c';
    }else{
        informCompany.style.display = 'none'
        informSobre.style.display = 'block'
        informAddress.style.display = 'none'
        btnSobre.style.background = 'linear-gradient(136deg, rgba(255, 0, 198, 1) 0%, rgba(255, 255, 0, 1) 100%)';
        btnAddress.style.background = '#8080804c';
        btnCompany.style.background = '#8080804c';
    }
}

function exibirInformCompany() {
    if (informCompany.style.display == 'block') {
        informSobre.style.display = 'none'
        informCompany.style.display = 'block'
        informAddress.style.display = 'none'
        btnCompany.style.background = 'linear-gradient(136deg, rgba(255, 0, 198, 1) 0%, rgba(255, 255, 0, 1) 100%)';
        btnSobre.style.background = '#8080804c';
        btnAddress.style.background = '#8080804c';
    }else{
        informSobre.style.display = 'none'
        informCompany.style.display = 'block'
        informAddress.style.display = 'none'
        btnCompany.style.background = 'linear-gradient(136deg, rgba(255, 0, 198, 1) 0%, rgba(255, 255, 0, 1) 100%)';
        btnSobre.style.background = '#8080804c';
        btnAddress.style.background = '#8080804c';
    }
}

function campo() {
    if (campoObrigatorio.style.display == 'none') {
       campoObrigatorio.style.display = 'block';
    } else { 
       campoObrigatorio.style.display = 'block'  
    } 
}

function OcultarCampo() {
    if (campoObrigatorio.style.display == 'block') {
       campoObrigatorio.style.display = 'none';
    } else { 
       campoObrigatorio.style.display = 'none'  
    } 
 }

 
function exibirFormLogin() {
    if (login.style.display == 'block') {
        login.style.display = 'block';
        campoCadastro.style.display = 'block'
        abaCadastrar.style.display = 'none';

    } else { 
        login.style.display = 'block';
        campoCadastro.style.display = 'block'
        abaCadastrar.style.display = 'none';  
    } 
}

function exibirCampoCadastro() {
    if (campoCadastro.style.display == 'block') {
        campoCadastro.style.display = 'block'

    } else { 
        campoCadastro.style.display = 'block'
    } 
}

const utils =  {
    exibirCard,
    fecharCard,
    exibirAddress,
    exibirInformSobre,
    exibirInformCompany,
    campo,
    OcultarCampo,
    exibirFormLogin,
    exibirCampoCadastro,
 }
 
 export default utils 