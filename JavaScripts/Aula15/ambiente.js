var num = [5, 8, 4, 9, 3] //para adicionar outra variável, basta utilizar num[indice seguinte do ultimo valor] = valor
//num.push(valor) vai automaticamente colocar o valor na última posição
//num.length vai mostrar o comprimento da variável E NÃO UTILIZA () ao lado, afinal não é um método, e sim um atributo.
//num.sort() vai colocar todos os elementos em ordem crescente

console.log(`Nosso vetor é o ${num}`)
console.log(num) // vai mostrar todos os valores e com colchetes
console.log(`Para mostrar um elemento especifico, é só utilizar o num[indicechave], como por exemplo o ${num[1]}`)
console.log('Agora vou adicionar um número ao 6 elemento utilizando num[5] = 12')
num[5] = 12
console.log(`Então agora temos esses valores [${num}]`)
console.log(`Agora vou utilizar num.push(27) para automaticamente colocar o valor na ultima casa`)
num.push(27)
console.log(`Estás sãos as novas variáveis [${num}]` )
console.log(`Agora vou mostrar o comprimento da variável utilizando num.length, que vai mostrar quantos conteúdos/valores existem no total`)
console.log(num.length)
console.log(`Vou deixar o vetor em ordem crescente utilizando num.sort()`)
console.log(`Agora a ordem do vetor é [${num.sort()}]`)
console.log('Agora para mostrar todas os conteudos dos indices sem precisar utilizar console.log(num[numero do indice]) em todas as versões')
console.log('Vou utilizar junto com for e while :')

for(var pos = 0; pos<num.length; pos++){
    console.log(num[pos])
}

console.log('Enquanto a váriavel pos, tiver o número menor que a quantidade de indice chave (num.length), ele vai continuar somando +1')
console.log('Tbm é possivel fazer utilizando outra linha de comandos com for (in) :')

for(var pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log('O jeito simples de ler esse comando é : Para cada posição dentro de num/Para cada posição de variável pos dentro da varíavel composta num')
console.log('Para pegar valores dentro do array, vamos usar num.indexOf[VALOR], e vai mostrar o INDICE CHAVE')
console.log('utilizando a variável pos e variável composta num')
var pos = num.indexOf(27) //se procurar um valor não existente, o resultado será -1 
if (pos == -1) {
    console.log ('O valor digitado não foi encontrado')
} else {
    console.log(`O valor 27 está na posição ${pos}`)
}
