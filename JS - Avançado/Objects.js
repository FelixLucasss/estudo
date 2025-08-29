const car = {
    //esses são propriedades :
    modelo :"Mustang",
    cor :"vermelho",
    ano :2023,

    //esses são métodos :
    dirigir : function(){
        console.log("Você está dirigindo o carro")
    },
    freio : function(){
        console.log("Você pisou no freio")
    }
}

//vai mostrar a propriedade :
console.log(car.modelo)
console.log(car.cor)
console.log(car.ano)

//vai mostrar o método :
car.dirigir()
car.freio()