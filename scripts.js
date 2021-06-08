

let caixaNumero = document.querySelector('#caixaNumero')
let textoNumero = document.querySelector('#campoNumero') 
let resultado = document.querySelector('#resultado')
let numeros = []



function verificarNumero (n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function verificarLista(n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false
    }
}

function somarValores() {
    var resultado = 0
    for (i = 0; i < numeros.length; i++) {
        resultado += numeros[i]
    }
    return resultado
}

function maiorNumero() {
    var maior = 0
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i]
        }
    }
    return maior
}

function menorNumero() {
    var menor = 101
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i]
        }
    }
    return menor
}

function adicionar( ) {
    if (verificarNumero(Number(textoNumero.value)) && verificarLista(Number(textoNumero.value), numeros)) {
        numeros.push(Number(textoNumero.value))
        var item = document.createElement('option')
        item.text = `Valor ${textoNumero.value} adicionado. Total de ${numeros.length}`
        caixaNumero.appendChild(item)
        resultado.innerHTML = ""
    } else {
        alert('inválido.')
    }
    textoNumero.value = ''
    textoNumero.focus()
}

function finalizar() {
    if (numeros.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
    var soma = somarValores()
    var total = numeros.length
    var maior = maiorNumero()
    var menor = menorNumero()
    var media = soma/total
    var item1 = document.createElement('option')
    item1.text = `Ao todo, temos ${total} números cadastrados.`    
    var item2 = document.createElement('option')
    item2.text = `O maior valor informado foi o ${maior}.`
    var item3 = document.createElement('option')
    item3.text = `O menor valor informado foi o ${menor}`
    var item4 = document.createElement('option')
    item4.text = `Somando todos os valores, temos ${soma}.`
    var item5 = document.createElement('option')
    item5.text = `A média dos valores digitados é ${media}.`    
    resultado.appendChild(item1)
    resultado.appendChild(item2)
    resultado.appendChild(item3)
    resultado.appendChild(item4)
    resultado.appendChild(item5)
    }
} 






