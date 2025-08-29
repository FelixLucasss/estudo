function calcular() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passos = document.getElementById('passo')
    let res = document.getElementById('res')

    //se n tiver os valores preenchidos, mostra erro
    if (ini.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) { 
    
        window.alert('[ERRO] Verifique os dados e tente novamente!')

        //caso contrario
    } else {
        res.innerHTML = 'Contando : ' //mostrar contando na div id res
        let i = Number(ini.value) //pegar o valor da variavel que está como texto, e converter para numero
        let f = Number(fim.value)
        let p = Number(passos.value)
        if (p <= 0) {
            window.alert('QUANTIDADE DE PASSO INVÁLIDO')
        }

        if (i < f) { //se inicio for MENOR que o fim

            for(let c = i; c <= f; c += p) { //para variavel c ser igual inicio, se c for MENOR que fim, adicionar passos
                res.innerHTML += ` ${c} 👉` //vai adicionar a div res que ja tem escrito contando, os valor seguido de um emoji até o final
            }

        } else { //caso contrário

            for(let c = i; c >= f; c -= p) { //para variavel c ser igual inicio, se c for MAIOR que fim, reduzir passos passos
                res.innerHTML += ` ${c} 👉` //vai adicionar oq ja tem escrito
            }
        }
        res.innerHTML += ` 🏁`
    }
}