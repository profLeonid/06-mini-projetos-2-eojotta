function calcularDados(){
    const quantidade = Number(document.getElementById('quantidade').value)
    const tbody = document.querySelector('tbody')

    const contagem = criarListaNumeros(quantidade)
    const soma = calcularSomar(quantidade)
    const subtracao = calcularSubtracao (quantidade)
    const divisao = calcularDivisao(quantidade)
    const multiplicacao = calcularMultiplicacao (quantidade)

    cont = 0
    while(cont<10){
        const linha = document.createElement('tr')
        
        const td1 = document.createElement('td')
        td1.textContent = contagem[cont]

        const td2 = document.createElement('td')
        td2.textContent = soma[cont]

        const td3 = document.createElement('td')
        td3.textContent = subtracao[cont]

        const td4 = document.createElement('td')
        td4.textContent = multiplicacao[cont]

        const td5 = document.createElement('td')
        td5.textContent = divisao[cont]

        linha.appendChild(td1)
        linha.appendChild(td2)
        linha.appendChild(td3)
        linha.appendChild(td4)
        linha.appendChild(td5)

        tbody.appendChild(linha)

        cont ++
    }
    }


function criarListaNumeros(quantidade){
    let ListaNumeros = []
    let cont = 0
    let numero = 1
    while(cont<10){
        ListaNumeros.push(numero)
        numero ++
        cont ++
    }
    return ListaNumeros
}



function calcularSomar(quantidade){
    let listaSoma = []
    let cont = 0
    while(cont<10){
        quantidade = quantidade + 1
        listaSoma.push(quantidade)
        cont ++
    }
    return listaSoma
}

function calcularSubtracao(quantidade){
    let listaSubtracao = []
    let cont = 0
    while(cont <10){
        quantidade = quantidade -1
        listaSubtracao.push(quantidade)
        cont ++
    }
    return listaSubtracao
}

function calcularMultiplicacao(quantidade){
    let listaMultiplicacao = []
    let resultado
    let multiplicador = 1
    let cont = 0
    while(cont < 10 ){
        resultado = quantidade * multiplicador
        listaMultiplicacao.push(resultado)
        multiplicador++
        cont++

    }
    return listaMultiplicacao
}

function calcularDivisao(quantidade){
    let listaDivisao = []
    let resultado
    let divisor = 1
    let cont = 0
    while(cont<10){
        resultado = quantidade/divisor
        listaDivisao.push(resultado.toFixed(2))
        divisor ++
        cont ++
    }
    return listaDivisao
}


//console.log(criarListaNumeros(4))
//console.log(calcularSomar(4))
//console.log(calcularSubtracao(4))
//console.log(calcularMultiplicacao(3))
//console.log(calcularDivisao(7))