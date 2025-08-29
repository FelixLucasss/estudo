function calcular(){
    let num = document.getElementById('num') //o resultado da escolha do numero
    let tab = document.getElementById('tab') // a select
    
    if(num.value.length == 0) { // se o num n tiver valor
        window.alert('Por favor, digite um número!')

    } else {
        let n = Number(num.value)
        let c = 1

        tab.innerHTML = `` //vai limpar oq estiver escrito em tab

        while (c <=10) {
            let item = document.createElement('option') //cria um elemento option dentro do selection
            
            // adiciona texto dentro do item option com o seguinte texto
            item.text = `${n} x ${c} = ${n*c}`
            //vai dar valor para cada linha
            item.value = `tab${c}`
            
            //adicionar um elemento filho onde adiciona o let item
            tab.appendChild(item)
            //vai adicionar 1 em c
            c++
        }
    }

}