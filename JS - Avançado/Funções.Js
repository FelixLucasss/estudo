//função com chamada e parâmetro

iniciarPrograma()

function iniciarPrograma() {
    let userName = 'Lucas'
    let idade = 21

    felizAniversario(userName, idade)
}

function felizAniversario(userName, idade){
    console.log("Parábens pra você")
    console.log("Nessa data querida")
    console.log("Muitos anos de vida")
    console.log(`Parabéns para você ${userName}, por estar fazendo ${idade} anos de vida!`)
}

//função aninhada

let user = 'Lucas'
let userInbox = 0

login()

function login() {
    displayUserName()
    displayUserInbox()
    //para que mostre essas funções, é preciso primeiro mostrar a função login

    function displayUserName(){
        console.log(`Bem-vindo ${user}`)
    }
    function displayUserInbox(){
        console.log(`Você tem ${userInbox} mensagens.`)
    }
}