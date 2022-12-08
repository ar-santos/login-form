function criarElemento() {
    const nemElement = document.createElement('h4')
    return nemElement
}

function criarElementoName() {
    const nemElement = document.createElement('h1')
    return nemElement
}

function apagarElementoFilho(elemento) {
    let qntFilho = elemento.childElementCount
    let tipoFilho = elemento.children

    if (qntFilho > 0){
        elemento.removeChild(tipoFilho[0])
    }
}

function nameUser(data, card) {
    const name = criarElementoName()
    apagarElementoFilho(card)

    name.textContent = data.name
    card.appendChild(name)
}


function apagarElementos(elemento){

    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild)
    }
}

function addressInform(data, card) {
    const street = criarElemento()
    const suite = criarElemento()
    const city = criarElemento()
    const zipcode = criarElemento()
    const geo = criarElemento()
    const lat = criarElemento()
    const ing = criarElemento()

    apagarElementos(card)

    street.textContent = `Street: ${data.address.street}`
    suite.textContent = `Suite: ${data.address.suite}`
    city.textContent = `City: ${data.address.city}`
    zipcode.textContent = `Zipcode: ${data.address.zipcode}`
    lat.textContent = `Lat: ${data.address.geo.lat}`
    ing.textContent = `Ing: ${data.address.geo.lng}`

    card.appendChild(street)
    card.appendChild(suite)
    card.appendChild(city)
    card.appendChild(zipcode)
    card.appendChild(lat)
    card.appendChild(ing)
}

function sobreInform(data, card) {
    const id = criarElemento()
    const nome = criarElemento()
    const nomeUsuario = criarElemento()
    const email = criarElemento()
    const phone = criarElemento()
    const webSite = criarElemento()

    apagarElementos(card)

    id.textContent = `Id: ${data.id}`
    nome.textContent = `Name: ${data.name}`
    nomeUsuario.textContent = `User: ${data.username}`
    email.textContent = `Email: ${data.email}`
    phone.textContent = `Phone: ${data.phone}`
    webSite.textContent = `Website: ${data.website}`

    card.appendChild(id)
    card.appendChild(nome)
    card.appendChild(nomeUsuario)
    card.appendChild(email)
    card.appendChild(phone)
    card.appendChild(webSite)
}

function companyInform(data, card) {
    const name = criarElemento()
    const catchPhrase = criarElemento()
    const bs = criarElemento()

    apagarElementos(card)

    name.textContent = `Name: ${data.company.name}`
    catchPhrase.textContent = `CatchPhrase: ${data.company.catchPhrase}`
    bs.textContent =  `Bs: ${data.company.bs}`

    card.appendChild(name)
    card.appendChild(catchPhrase)
    card.appendChild(bs)
}

const helpers = {
    criarElemento,
    sobreInform,
    companyInform,
    addressInform,
    nameUser,
}

 export default helpers