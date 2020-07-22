//forma literal
function fun1(){}// o bloco é obrigatorio na função tradicional

//atribuir a uma variável
const fun2 = function(){}

//armazenar em um array(mais comum declarar a função e depois colocar no array)
const array= [function(a, b){return a+b}, fun1, fun2]
console.log(array[0](2,3))

//armazenar como atributo de um objeto
const obj={}
obj.falar = function(){return "Olá"}
console.log(obj.falar())

//Passar uma função como parametro de uma função
function run (fun){
    fun()
}

run(function() {console.log("Executando....")})

//Uma funçao pode retornar outra função/uma função pode conter uma função
function soma(a,b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(1,2)(9)
const arm = soma(2,3)
arm(3)
