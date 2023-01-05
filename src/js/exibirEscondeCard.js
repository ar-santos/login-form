let cardCadastrar = document.getElementById('card-cadastrar')
let inputNameCadastro = document.getElementById('cadastro-input-name')
let labelNomeCadastro = document.getElementById('name-label-cadastro')
let inputUsuarioCadastro = document.getElementById('cadastro-input-usuario')
let labelUserCadastro = document.getElementById('user-label-cadastro')
let inputSenhaCadastro = document.getElementById('cadastro-input-senha')
let labelSenhaCadastro = document.getElementById('senha-label-cadastro')
let userCadastrando = document.getElementById('h1-userCadastrando')
let validacaoCampos = document.getElementById('validacao-campos')

let login = document.getElementById('card-login')
let inputNomeLogin = document.getElementById('login-input-user')
let labelNomeLogin = document.getElementById('login-label-nome')
let spanNome = document.getElementById('login-span-person')
let inputSenhaLogin = document.getElementById('login-input-senha')
let labelSenhaLogin = document.getElementById('login-label-senha')
let campoObrigatorioLogin = document.getElementById('campo-obrigatorio-login')
let campoObrigatorioLoginInput = document.getElementById('campo-obrigatorio-login-input')
let spanSenha = document.getElementById('login-span-lock')

let localizarUser = document.getElementById('localizar-user')
let campoObrigatorio = document.getElementById('campo-obrigatorio')

let cardInform = document.getElementById('card-inform')
let informAddress = document.getElementById('inform-address')
let informSobre = document.getElementById('inform-sobre')
let informCompany = document.getElementById('inform-company')
let btnAddress = document.getElementById('btn-address')
let btnSobre = document.getElementById('btn-sobre')
let btnCompany = document.getElementById('btn-company')

function exibirCardCadastro() {
    if (cardCadastrar.style.display == 'none') {
        login.style.display = 'none';
        campoObrigatorioLogin.style.display = 'none';
        cardCadastrar.style.display = 'block';
        userCadastrando.style.display = 'none';
        inputNameCadastro.style.borderBottomColor = 'white';
        labelNomeCadastro.style.color = 'white';
        inputSenhaCadastro.style.borderBottomColor = 'white';
        labelSenhaCadastro.style.color = 'white';
        inputUsuarioCadastro.style.borderBottomColor = 'white';
        labelUserCadastro.style.color = 'white';
    } else { 
        login.style.display = 'none'  
        campoObrigatorioLogin.style.display = 'none';
        cardCadastrar.style.display = 'block';
        userCadastrando.style.display = 'none';
        inputNameCadastro.style.borderBottomColor = 'white';
        labelNomeCadastro.style.color = 'white';
        inputSenhaCadastro.style.borderBottomColor = 'white';
        labelSenhaCadastro.style.color = 'white';
        inputUsuarioCadastro.style.borderBottomColor = 'white';
        labelUserCadastro.style.color = 'white';
    } 
}

function exibirCampoCadastro() {
    if (userCadastrando.style.display == 'block') {
        userCadastrando.style.display = 'block'
        inputNameCadastro.style.borderBottomColor = 'white';
        labelNomeCadastro.style.color = 'white';
        inputSenhaCadastro.style.borderBottomColor = 'white';
        labelSenhaCadastro.style.color = 'white';
        inputUsuarioCadastro.style.borderBottomColor = 'white';
        labelUserCadastro.style.color = 'white';
        labelNomeCadastro.innerHTML = 'Nome';
        labelUserCadastro.innerHTML = 'Usuário'
        labelSenhaCadastro.innerHTML = 'Senha'

    } else { 
        userCadastrando.style.display = 'block'
        inputNameCadastro.style.borderBottomColor = 'white';
        labelNomeCadastro.style.color = 'white';
        inputSenhaCadastro.style.borderBottomColor = 'white';
        labelSenhaCadastro.style.color = 'white';
        inputUsuarioCadastro.style.borderBottomColor = 'white';
        labelUserCadastro.style.color = 'white';
        labelNomeCadastro.innerHTML = 'Nome';
        labelUserCadastro.innerHTML = 'Usuário'
        labelSenhaCadastro.innerHTML = 'Senha'
    } 
}

function validarCardCadastro (){
    if(inputNameCadastro.value.length < 3){
    validacaoCampos.style.display = 'block';
    inputNameCadastro.focus();
    return false
 }else if(inputUsuarioCadastro.value.length < 5){
    validacaoCampos.style.display = 'block';
    inputUsuarioCadastro.focus();
    return false
 }else if(inputSenhaCadastro.value.length < 8){
    validacaoCampos.style.display = 'block';
    inputSenhaCadastro.focus();
    return false
 }else{
    validacaoCampos.style.display = 'none';

     exibirCampoCadastro()

     setTimeout(()=> {
        exibirFormLogin()
    },3000)

    inputNameCadastro.value = ''
    inputUsuarioCadastro.value = ''
    inputSenhaCadastro.value = ''
 }
}

function validarlabelNameCadastro() {
    if (inputNameCadastro.value.length <= 2) {
        labelNomeCadastro.style.color = 'red';
        labelNomeCadastro.innerHTML = 'Nome *Insira no minimo 3 caracteres'
        inputNameCadastro.style.borderBottomColor = 'red';
    } else { 
        labelNomeCadastro.style.color = 'green';
        labelNomeCadastro.innerHTML = 'Nome'
        inputNameCadastro.style.borderBottomColor = 'green';
    } 
}

function validarLabelUsuarioCadastro() {
    if (inputUsuarioCadastro.value.length <= 4) {
        labelUserCadastro.style.color = 'red';
        labelUserCadastro.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
        inputUsuarioCadastro.style.borderBottomColor = 'red';
    } else { 
        labelUserCadastro.style.color = 'green';
        labelUserCadastro.innerHTML = 'Usuário'
        inputUsuarioCadastro.style.borderBottomColor = 'green';
    } 
}

function validarLabelSenhaCadastro() {
    if (inputSenhaCadastro.value.length <= 7) {
        labelSenhaCadastro.style.color = 'red';
        labelSenhaCadastro.innerHTML = 'Senha *Insira no minimo 8 caracteres'
        inputSenhaCadastro.style.borderBottomColor = 'red';
    } else { 
        labelSenhaCadastro.style.color = 'green';
        labelSenhaCadastro.innerHTML = 'Senha'
        inputSenhaCadastro.style.borderBottomColor = 'green';
    } 
}

function visualizarSenhaCadastro() {
    if(inputSenhaCadastro.getAttribute('type') == 'password'){
        inputSenhaCadastro.setAttribute('type', 'text')
    }else{
        inputSenhaCadastro.setAttribute('type', 'password')
    }
}

function exibirCardLogin() {
    if (login.style.display == 'none') {
        login.style.display = 'block'
        cardCadastrar.style.display = 'none';
        inputNameCadastro.style.borderBottomColor = 'white';
        labelNomeCadastro.style.color = 'white';
        inputSenhaCadastro.style.borderBottomColor = 'white';
        labelSenhaCadastro.style.color = 'white';
        inputUsuarioCadastro.style.borderBottomColor = 'white';
        labelUserCadastro.style.color = 'white';
        labelNomeCadastro.innerHTML = 'Nome';
        labelUserCadastro.innerHTML = 'Usuário'
        labelSenhaCadastro.innerHTML = 'Senha'

    } else { 
        login.style.display = 'block'
        cardCadastrar.style.display = 'none';
        inputNameCadastro.style.borderBottomColor = 'white';
        labelNomeCadastro.style.color = 'white';
        inputSenhaCadastro.style.borderBottomColor = 'white';
        labelSenhaCadastro.style.color = 'white';
        inputUsuarioCadastro.style.borderBottomColor = 'white';
        labelUserCadastro.style.color = 'white';
        labelNomeCadastro.innerHTML = 'Nome';
        labelUserCadastro.innerHTML = 'Usuário'
        labelSenhaCadastro.innerHTML = 'Senha'
    } 
}

function exibirFormLogin() {
    if (cardCadastrar.style.display == 'block') {
        login.style.display = 'block';
        cardCadastrar.style.display = 'none';
        labelNomeCadastro.innerHTML = 'Nome';
        labelSenhaLogin.innerHTML = 'Senha';

    } else { 
        login.style.display = 'block';
        cardCadastrar.style.display = 'none';  
        labelNomeCadastro.innerHTML = 'Nome';
        labelSenhaLogin.innerHTML = 'Senha';

    } 
}


function trocarCoresLogin() {
    if(userCadastrando.style.display == 'block'){
        inputNomeLogin.style.borderBottomColor = 'white';
        labelNomeLogin.style.color = 'white';
        spanNome.style.color = 'white';
        labelSenhaLogin.style.color = 'white';
        inputSenhaLogin.style.borderBottomColor = 'white';
        spanSenha.style.color = 'white';
        labelNomeLogin.innerHTML = 'Usuário';
        labelSenhaLogin.innerHTML = 'Senha'
    }else{
        inputNomeLogin.style.borderBottomColor = 'white';
        labelNomeLogin.style.color = 'white';
        spanNome.style.color = 'white';
        labelSenhaLogin.style.color = 'white';
        inputSenhaLogin.style.borderBottomColor = 'white';
        spanSenha.style.color = 'white';
        labelNomeLogin.innerHTML = 'Usuário';
        labelSenhaLogin.innerHTML = 'Senha'
    }
}

function validarLabelNameLogin() {
    if (inputNomeLogin.value.length <= 2) {
        labelNomeLogin.style.color = 'red';
        labelNomeLogin.innerHTML = 'Usuário *Insira no minimo 3 caracteres'
        inputNomeLogin.style.borderBottomColor = 'red';
        spanNome.style.color = 'red';

    } else { 
        labelNomeLogin.style.color = 'green';
        labelNomeLogin.innerHTML = 'Usuário';
        inputNomeLogin.style.borderBottomColor = 'green';
        spanNome.style.color = 'green';
    } 
}

function validarLabelSenhaLogin() {
    if (inputSenhaLogin.value.length <= 7) {
        labelSenhaLogin.style.color = 'red';
        labelSenhaLogin.innerHTML = 'Senha *Insira no minimo 8 caracteres'
        inputSenhaLogin.style.borderBottomColor = 'red';
        spanSenha.style.color = 'red';
    } else { 
        labelSenhaLogin.style.color = 'green';
        labelSenhaLogin.innerHTML = 'Senha'
        inputSenhaLogin.style.borderBottomColor = 'green';
        spanSenha.style.color = 'green';
    } 
}

function visualizarSenhaLogin() {
    if(inputSenhaLogin.getAttribute('type') == 'password'){
        inputSenhaLogin.setAttribute('type', 'text')
    }else{
        inputSenhaLogin.setAttribute('type', 'password')
    }
}

function exibirCard() {
    if (localizarUser.style.display == 'block') {
        localizarUser.style.display = 'none';
        cardInform.style.display = 'block';
    } else { 
        localizarUser.style.display = 'none'  
        cardInform.style.display = 'block';
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

function fecharCard() {
    if (cardInform.style.display == 'block') {
        localizarUser.style.display = 'block'
        cardInform.style.display = 'none'
        inputNomeLogin.style.borderBottomColor = 'white';
        labelNomeLogin.style.color = 'white';
        spanNome.style.color = 'white';
        labelSenhaLogin.style.color = 'white';
        inputSenhaLogin.style.borderBottomColor = 'white';
        spanSenha.style.color = 'white';
    }
}

function pesquisarUsuario() {
    if (localizarUser.style.display == 'none' && inputNomeLogin.value !="" && inputSenhaLogin.value !="") {
        localizarUser.style.display = 'block';
        login.style.display = 'none'
        campoObrigatorioLoginInput.style.display = 'none'
     } else { 
        localizarUser.style.display = 'none'
        login.style.display = 'block'
        campoObrigatorioLoginInput.style.display = 'block'
        labelNomeLogin.style.color = 'red';
        inputNomeLogin.style.borderBottomColor = 'red';
        spanNome.style.color = 'red';
        inputSenhaLogin.style.borderBottomColor = 'red';
        spanSenha.style.color = 'red';
        labelSenhaLogin.style.color = 'red';
        inputNomeLogin.focus()
     } 
}

function exibirCampoPequisarUser() {
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

function exibirCampoObrigatorioLogin() {
    if (campoObrigatorioLogin.style.display == 'none') {
        campoObrigatorioLogin.style.display = 'block';
        campoObrigatorioLoginInput.style.display = 'none'
        labelNomeLogin.style.color = 'red';
        inputNomeLogin.style.borderBottomColor = 'red';
        spanNome.style.color = 'red';
        inputSenhaLogin.style.borderBottomColor = 'red';
        spanSenha.style.color = 'red';
        labelSenhaLogin.style.color = 'red';
        inputNomeLogin.focus()
    } else { 
        campoObrigatorioLogin.style.display = 'block'  
        campoObrigatorioLoginInput.style.display = 'none'
        labelNomeLogin.style.color = 'red';
        inputNomeLogin.style.borderBottomColor = 'red';
        spanNome.style.color = 'red';
        inputSenhaLogin.style.borderBottomColor = 'red';
        spanSenha.style.color = 'red';
        labelSenhaLogin.style.color = 'red';
        inputNomeLogin.focus()
    } 
}

function ocultarCampoLogin() {
    if (campoObrigatorioLogin.style.display == 'block') {
        campoObrigatorioLogin.style.display = 'none';
    } else { 
        campoObrigatorioLogin.style.display = 'none'  
    } 
}

const utils =  {
    exibirCardCadastro,
    validarCardCadastro,
    validarlabelNameCadastro,
    validarLabelUsuarioCadastro,
    validarLabelSenhaCadastro,
    visualizarSenhaCadastro,
    exibirCardLogin,
    trocarCoresLogin,
    validarLabelNameLogin,
    validarLabelSenhaLogin,
    visualizarSenhaLogin,
    exibirCampoObrigatorioLogin,
    ocultarCampoLogin,
    pesquisarUsuario,
    exibirCard,
    exibirAddress,
    exibirInformSobre,
    exibirInformCompany,
    fecharCard,
    exibirCampoPequisarUser,
    OcultarCampo,
 }
 
 export default utils 