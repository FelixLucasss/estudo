function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.leght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // é igual criar um <img id='foto'> no html
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <10) {
                //Criança
                img.setAttribute('src', 'criancahomem.png')
            } else if (idade <20) {
                //Jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade <50) {
                //Adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'homemvelho.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <10) {
                //Criança
                img.setAttribute('src', 'criancamulher.png')
            } else if (idade <20) {
                //Jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade <50) {
                //Adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'mulhervelha.png')
            }
        } else if (fsex[2].checked) {
            gênero = 'Helicóptero de Combate'
            if (idade >= 0 && idade <10) {
                //Criança
            } else if (idade <20) {
                //Jovem
            } else if (idade <50) {
                //Adulto
            } else {
                //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é ${gênero} de ${idade} anos.`
        res.appendChild(img)
    }
}