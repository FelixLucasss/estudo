console.log('Vamos verificar se um número é par ou ímpar usando function')

function parimp(n) { //n = parâmetro
    //ação :
    if (n%2 == 0){ //se o valor divido por 2 tiver resultado final 0...
        return 'par!'
    } else {
        return 'ímpar!'
    }
}
//chamada :
let res = parimp (11) //variável res = váriavel parimp com parâmetro 11
console.log(`O número digitado é ${res}`)

console.log('Agora vamos colocar uma função dentro de uma váriavel')

var v = function(x){ //função com valor = x
    return x*2 //retornar x vezes 2
}

console.log(`O resultado é ${v(5)} `) //DENTRO da váriavel v, vai utilizar o parâmetro 5

console.log('Vamos calcular o fatorial de um número') 

//fatorial de 5! = 5x4x3x2x1
function fatorial(y) {
    var fat = 1
    for(var c = y; c>1 ; c--){ //contador começando em n, e enquanto o contador (variável c) for maior que n, o contador perde 1
        fat *= c // variável fat vezes variável c
    }
    return fat
}

console.log(`O fatorial resultado do fatorial é ${fatorial(5)}`)

console.log('Também posso chamar essa função de maneira recursiva') //uma recursão acontece quando uma função chama ela mesma

function fatorial1(z) {//RECURSIVIDADE
    if (z == 1) {
        return 1
    } else {
        return z * fatorial(z-1)
    }
}

console.log(`${fatorial1(5)}`)

console.log('Exemplo de soma em array :')

var arr = [1,2,3,4,5,6,7,8,9,10];
var soma = 0;
for(var i = 0; i < arr.length; i++) { //enquanto o i for igual a 0, e for menor que a quantidade do array, ele adiciona 1.
    soma += arr[i]; //vai somar de dentro do array, a quantidade de length definida pelo i
}

console.log(arr.length)

var cu = [3, 5, -5, -12, 37]
var pinto = 0
for(var bunda = 0; bunda < cu, cu++) {
    return pinto
}
console.log(pinto)