let login = document.getElementById('aba-login')
let btnEnter = document.getElementById('btn-enter')
let card = document.getElementById('card')
let close = document.getElementById('close')
let btnAddress = document.getElementById('btn-address')
let btnSobre = document.getElementById('btn-sobre')
let btnCompany = document.getElementById('btn-company')
let informAddress = document.getElementById('inform-address')
let informSobre = document.getElementById('inform-sobre')
let informCompany = document.getElementById('inform-company')

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
        btnAddress.style.background = '#262626';
        btnSobre.style.background = '#8080804c';
        btnCompany.style.background = '#8080804c';
    }else { 
       informAddress.style.display = 'block'  
       informSobre.style.display = 'none';
       informCompany.style.display = 'none';
       btnAddress.style.background = '#262626';
       btnSobre.style.background = '#8080804c';
       btnCompany.style.background = '#8080804c';
    } 
 }   


function exibirInformSobre() {
    if (informSobre.style.display == 'block') {
        informCompany.style.display = 'none'
        informSobre.style.display = 'block'
        informAddress.style.display = 'none'
        btnSobre.style.background = '#262626';
        btnAddress.style.background = '#8080804c';
        btnCompany.style.background = '#8080804c';
    }else{
        informCompany.style.display = 'none'
        informSobre.style.display = 'block'
        informAddress.style.display = 'none'
        btnSobre.style.background = '#262626';
        btnAddress.style.background = '#8080804c';
        btnCompany.style.background = '#8080804c';
    }
}

function exibirInformCompany() {
    if (informCompany.style.display == 'block') {
        informSobre.style.display = 'none'
        informCompany.style.display = 'block'
        informAddress.style.display = 'none'
        btnCompany.style.background = '#262626';
        btnSobre.style.background = '#8080804c';
        btnAddress.style.background = '#8080804c';
    }else{
        informSobre.style.display = 'none'
        informCompany.style.display = 'block'
        informAddress.style.display = 'none'
        btnCompany.style.background = '#262626';
        btnSobre.style.background = '#8080804c';
        btnAddress.style.background = '#8080804c';
    }
}

btnEnter.addEventListener('click', exibirCard, false)
close.addEventListener('click', fecharCard, false)
btnSobre.addEventListener('click', exibirInformSobre, false)
btnAddress.addEventListener('click', exibirAddress, false)
btnCompany.addEventListener('click', exibirInformCompany, false)