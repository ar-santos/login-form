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
// let inputCadastros = document.getElementById('input-cadastros')

let nome = document.getElementById('input-name')
let labelNome = document.getElementById('name-label')

let usuario = document.getElementById('input-usuario')
let labelUser = document.getElementById('user-label')

let senha = document.getElementById('input-password')
let labelSenha = document.getElementById('senha-label')

let nomeLogin = document.getElementById('input-user')
let labelNomeLogin = document.getElementById('user-input')
let spanNome = document.getElementById('person')

let senhaLogin = document.getElementById('input-senha')
let labelSenhaLogin = document.getElementById('senha-input')
let spanSenha = document.getElementById('lock')


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
        nomeLogin.style.borderBottomColor = 'white';
        labelNomeLogin.style.color = 'white';
        spanNome.style.color = 'white';
        labelSenhaLogin.style.color = 'white';
        senhaLogin.style.borderBottomColor = 'white';
        spanSenha.style.color = 'white';
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

function exibirCadastro() {
    if (abaCadastrar.style.display == 'none') {
        login.style.display = 'none';
        abaCadastrar.style.display = 'block';
        campoCadastro.style.display = 'none';
        nome.style.borderBottomColor = 'white';
        labelNome.style.color = 'white';
        senha.style.borderBottomColor = 'white';
        labelSenha.style.color = 'white';
        usuario.style.borderBottomColor = 'white';
        labelUser.style.color = 'white';
    } else { 
        login.style.display = 'none'  
        abaCadastrar.style.display = 'block';
        campoCadastro.style.display = 'none';
        nome.style.borderBottomColor = 'white';
        labelNome.style.color = 'white';
        senha.style.borderBottomColor = 'white';
        labelSenha.style.color = 'white';
        usuario.style.borderBottomColor = 'white';
        labelUser.style.color = 'white';
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
        labelNome.innerHTML = 'Nome';
        labelSenhaLogin.innerHTML = 'Senha';

    } else { 
        login.style.display = 'block';
        campoCadastro.style.display = 'block'
        abaCadastrar.style.display = 'none';  
        labelNome.innerHTML = 'Nome';
        labelSenhaLogin.innerHTML = 'Senha';
    } 
}

function exibirCampoCadastro() {
    if (campoCadastro.style.display == 'block') {
        campoCadastro.style.display = 'block'
        nome.style.borderBottomColor = 'white';
        labelNome.style.color = 'white';
        senha.style.borderBottomColor = 'white';
        labelSenha.style.color = 'white';
        usuario.style.borderBottomColor = 'white';
        labelUser.style.color = 'white';
        labelNome.innerHTML = 'Nome';
        labelUser.innerHTML = 'Usuário'
        labelSenha.innerHTML = 'Senha'

    } else { 
        campoCadastro.style.display = 'block'
        nome.style.borderBottomColor = 'white';
        labelNome.style.color = 'white';
        senha.style.borderBottomColor = 'white';
        labelSenha.style.color = 'white';
        usuario.style.borderBottomColor = 'white';
        labelUser.style.color = 'white';
        labelNome.innerHTML = 'Nome';
        labelUser.innerHTML = 'Usuário'
        labelSenha.innerHTML = 'Senha'
    } 
}

function exibirCampoLogin() {
    if (login.style.display == 'none') {
        login.style.display = 'block'
        abaCadastrar.style.display = 'none';
        nome.style.borderBottomColor = 'white';
        labelNome.style.color = 'white';
        senha.style.borderBottomColor = 'white';
        labelSenha.style.color = 'white';
        usuario.style.borderBottomColor = 'white';
        labelUser.style.color = 'white';
        labelNome.innerHTML = 'Nome';
        labelUser.innerHTML = 'Usuário'
        labelSenha.innerHTML = 'Senha'

    } else { 
        login.style.display = 'block'
        abaCadastrar.style.display = 'none';
        nome.style.borderBottomColor = 'white';
        labelNome.style.color = 'white';
        senha.style.borderBottomColor = 'white';
        labelSenha.style.color = 'white';
        usuario.style.borderBottomColor = 'white';
        labelUser.style.color = 'white';
        labelNome.innerHTML = 'Nome';
        labelUser.innerHTML = 'Usuário'
        labelSenha.innerHTML = 'Senha'
    } 
}

function labelName() {
    if (nome.value.length <= 2) {
        labelNome.style.color = 'red';
        labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
        nome.style.borderBottomColor = 'red';
    } else { 
        labelNome.style.color = 'green';
        labelNome.innerHTML = 'Nome'
        nome.style.borderBottomColor = 'green';
    } 
}

function labelUsuario() {
    if (usuario.value.length <= 4) {
        labelUser.style.color = 'red';
        labelUser.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
        usuario.style.borderBottomColor = 'red';
    } else { 
        labelUser.style.color = 'green';
        labelUser.innerHTML = 'Usuário'
        usuario.style.borderBottomColor = 'green';
    } 
}

function confirmSenha() {
    if (senha.value.length <= 7) {
        labelSenha.style.color = 'red';
        labelSenha.innerHTML = 'Senha *Insira no minimo 8 caracteres'
        senha.style.borderBottomColor = 'red';
    } else { 
        labelSenha.style.color = 'green';
        labelSenha.innerHTML = 'Senha'
        senha.style.borderBottomColor = 'green';
    } 
}

function LoginEnterName() {
    if (nomeLogin.value.length <= 2) {
        labelNomeLogin.style.color = 'red';
        labelNomeLogin.innerHTML = 'Usuário *Insira no minimo 3 caracteres'
        nomeLogin.style.borderBottomColor = 'red';
        spanNome.style.color = 'red';

    } else { 
        labelNomeLogin.style.color = 'green';
        labelNomeLogin.innerHTML = 'Usuário';
        nomeLogin.style.borderBottomColor = 'green';
        spanNome.style.color = 'green';
    } 
}

function confirmSenhalogin() {
    if (senhaLogin.value.length <= 7) {
        labelSenhaLogin.style.color = 'red';
        labelSenhaLogin.innerHTML = 'Senha *Insira no minimo 8 caracteres'
        senhaLogin.style.borderBottomColor = 'red';
        spanSenha.style.color = 'red';
    } else { 
        labelSenhaLogin.style.color = 'green';
        labelSenhaLogin.innerHTML = 'Senha'
        senhaLogin.style.borderBottomColor = 'green';
        spanSenha.style.color = 'green';
    } 
}

function visualizarSenhaCadastro() {
    if(senha.getAttribute('type') == 'password'){
        senha.setAttribute('type', 'text')
    }else{
        senha.setAttribute('type', 'password')
    }
}

function visualizarSenhaLogin() {
    if(senhaLogin.getAttribute('type') == 'password'){
        senhaLogin.setAttribute('type', 'text')
    }else{
        senhaLogin.setAttribute('type', 'password')
    }
}

function trocarCoresLogin() {
    if(campoCadastro.style.display == 'block'){
        nomeLogin.style.borderBottomColor = 'white';
        labelNomeLogin.style.color = 'white';
        spanNome.style.color = 'white';
        labelSenhaLogin.style.color = 'white';
        senhaLogin.style.borderBottomColor = 'white';
        spanSenha.style.color = 'white';
        labelNomeLogin.innerHTML = 'Usuário';
        labelSenhaLogin.innerHTML = 'Senha'
    }else{
        nomeLogin.style.borderBottomColor = 'white';
        labelNomeLogin.style.color = 'white';
        spanNome.style.color = 'white';
        labelSenhaLogin.style.color = 'white';
        senhaLogin.style.borderBottomColor = 'white';
        spanSenha.style.color = 'white';
        labelNomeLogin.innerHTML = 'Usuário';
        labelSenhaLogin.innerHTML = 'Senha'
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
    labelName,
    labelUsuario,
    confirmSenha,
    LoginEnterName,
    confirmSenhalogin,
    visualizarSenhaCadastro,
    visualizarSenhaLogin,
    exibirCadastro,
    trocarCoresLogin,
    exibirCampoLogin,
 }
 
 export default utils 