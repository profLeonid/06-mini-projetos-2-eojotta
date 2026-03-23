function criarListaNumeros(quantidade){
    let ListaNumeros = []
    for(let i = 1; i <= quantidade; i++){
        ListaNumeros.push(i)
    }
    return ListaNumeros
}

function mostrarPares(quantidade){
    let listaPares = []
    let quantidadeReal = Number(quantidade)*2
    let cont = 0
    let i = 0
    
    while(cont < quantidadeReal){
        if(cont % 2 == 0){
        listaPares.push(cont)
        
    }
    cont ++    
    }
    return listaPares
}

function mostrarImpares(quantidade){
    let listaImpares = []
    let cont = 0
    let impar = 1
    while(cont < quantidade){
        listaImpares.push(impar)
        impar = impar + 2
    }
    return listaImpares
}

//console.log(criarListaNumeros(7))

console.log(mostrarImpares(2))