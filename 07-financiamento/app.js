
function calcularDados(){
    const valorTotal = Number(document.getElementById('valor').value)
    const juros = Number(document.getElementById('juros').value)
    const nParcelas = Number(document.getElementById('nParcelas').value)
    const tbody = document.querySelector('tbody')

    const mes = listarNumeros(nParcelas)
    const parcela = criaParcelas(valorTotal, juros,nParcelas)
    const jurosMes = criarJuros(valorTotal,juros,nParcelas)
    const totalMes = criarTotalMes(valorTotal,juros,nParcelas)
    const devedor = criarSaldoDevedor(valorTotal,nParcelas)


    tbody.replaceChildren()
    let cont = 0

    while(cont<nParcelas){
        const linha = document.createElement('tr')

        const td1 = document.createElement('td')
        td1.textContent = mes[cont]

        const td2 = document.createElement('td')
        td2.textContent = parcela[cont]

        const td3 = document.createElement('td')
        td3.textContent = jurosMes [cont]

        const td4 = document.createElement('td')
        td4.textContent = totalMes [cont]

        const td5 = document.createElement('td')
        td5.textContent = devedor [cont]

        linha.appendChild(td1)
        linha.appendChild(td2)
        linha.appendChild(td3)
        linha.appendChild(td4)
        linha.appendChild(td5)

        tbody.appendChild(linha)

        cont ++

    }
}

function listarNumeros (parcelas){
    let listaNumeros = []
    let numero = 1
    let cont = 0
    
    while(cont<parcelas){
        listaNumeros.push(numero)
        numero++
        cont++
    }
    return listaNumeros
}
   
function criarJuros(valorTotal,taxaJuros,numeroParcelas){
    let listaJuros = []
    let valor = Number(valorTotal)
    let taxa = Number(taxaJuros)
    let parcelas = Number(numeroParcelas)
    let valorParcelas = valor/parcelas
    let cont = 0
    let jurosMes
    while(cont<numeroParcelas){
        jurosMes = (valor * (taxa/100))
        valor = valor - valorParcelas
        listaJuros.push(jurosMes)
        cont++
    }
    return listaJuros
}

function criarTotalMes(valorTotal,taxaJuros,numeroParcelas){
    let listaTotal = []
    let valor = Number(valorTotal)
    let taxa = Number(taxaJuros)
    let parcelas = Number(numeroParcelas)
    let valorParcelas = valor/parcelas
    let listaJuros = criarJuros(valor,taxa,parcelas)
    let total
    let cont = 0
    while(cont < numeroParcelas){
        total = Number(valorParcelas)+ Number(listaJuros[cont])
        listaTotal.push(total)
        cont ++
    }
    return listaTotal
}


function criaParcelas(valorTotal,taxaJuros,numeroParcelas){
    let listaTotal = []
    let valor = Number(valorTotal)
    let taxa = Number(taxaJuros)
    let parcelas = Number(numeroParcelas)
    let valorParcelas = valor/parcelas
    let listaJuros = criarJuros(valor,taxa,parcelas)
    let total
    let cont = 0
    while(cont < numeroParcelas){
        total = Number(valorParcelas)+ Number(listaJuros[cont])
        listaTotal.push(total)
        cont ++
    }
    return listaTotal
}

function criarSaldoDevedor(valorTotal,numeroParcelas){
    let listaDevedor = []
    let valor = Number(valorTotal)
    let parcelas = Number(numeroParcelas)
    let valorParcelas = valor/parcelas
    let devedor = valor
    let cont = 0
    while(cont<numeroParcelas){
        devedor = devedor - valorParcelas
        listaDevedor.push(devedor)
        cont ++
    }
    return listaDevedor
}
