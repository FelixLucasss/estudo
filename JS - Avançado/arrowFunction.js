// arrow functions utiliza =>

let hello
let x = 'Eae'
let y = 'Lucas!'

//função normal :

hello = function(x){
    //return "Olá Mundo!"
    //return x + " Mundo!"
    return x + " " + y
}
//console.log(hello(x)) //colocar o parametro dentro do ()
console.log(hello(x, y))

//utilizando arrow function para reproduzir a mesma situação

//hello = () => "Olá Mundo 2!"
//hello = x => x + " Mundo!" //utilizando apenas um parametro, não é nescessário o uso de (), porém se não houver, ou existir mais de 1 parâmetro, o () é nescessário
//console.log(hello(x))
hello = (x, y) => x + " " + y
console.log(hello(x, y))