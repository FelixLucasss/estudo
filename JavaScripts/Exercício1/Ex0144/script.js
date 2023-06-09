let num = document.getElementById('num')
let lista = document.getElementById('analisa')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) { //se o numéro for maior ou igual a 1, ou menor e igual a 100
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { //se o valor digitado for encontrado no array
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { //Se É um número válido, e NÃO está como valor no array da lista

        let n = Number(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        lista.appendChild(item)
        valores.push(n)

    } else {

        window.alert('[ERRO]Valor inválido ou já digitado!!')

    }
    num.value = ''
    num.focus()
}

function analise() {
    if(valores.length == 0) {
        window.alert('Adicione Valores antes de analisar os números!')
    } else {
        let total = valores.length
        let maior = valores[0] //é o primeiro valor
        let menor = valores[0]
        let soma = 0
        let med = 0
        for(let pos in valores) { //pra cada posição em valores :
            soma += valores[pos]
            if (valores[pos] > maior) //se o valores na posição pos for maior que let maior
                maior = valores[pos]
            if (valores[pos] < menor) //se o valores na posição pos for menor que let menor
                menor = valores[pos]
        }
        med = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Temos <strong>${total}</strong> números cadastrados no total.</p>`
        res.innerHTML += `<p>O maior valor da lista é <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>O menor valor da lista é <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>A soma de todos os valores é <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A menor média dos valores é <strong>${med}</strong>.</p>`
    }
}