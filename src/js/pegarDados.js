let informAddress = document.getElementById('inform-address')
let informSobre = document.getElementById('inform-sobre')
let informCompany = document.getElementById('inform-company')
let nameUser = document.getElementById('nomeUser')

import utils from './exibirEscondeCard.js'
import getUsers from './request.js'
import helpers from './helpers.js'

const getUserData = async () => {

    try {
        let resultadoDigitado = document.getElementById("input-pesquisarUser").value
        let userData = await getUsers(`https://jsonplaceholder.typicode.com/users/${resultadoDigitado}`)

        let usuario = userData

        if(usuario.id == resultadoDigitado){
            helpers.sobreInform(usuario, informSobre)
            helpers.companyInform(usuario, informCompany)
            helpers.addressInform(usuario, informAddress)
            helpers.nameUser(usuario, nameUser)

            utils.exibirCard()
            utils.OcultarCampo()
        }else{
            utils.campo()
        }

    }catch (error) {
        console.log(error)

    }
} 

export default getUserData