let login = document.getElementById('aba-login')
let btnEnter = document.getElementById('btn-enter')
let card = document.getElementById('card')
let close = document.getElementById('close')

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

btnEnter.addEventListener('click', exibirCard, false)
close.addEventListener('click', fecharCard, false)