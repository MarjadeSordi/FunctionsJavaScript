function soma () {
    let soma = 0
    for (i in arguments){ //array vazio
        soma+= arguments[i]
    }
    return soma
}

console.log(soma(1))
console.log(soma(1,5,6.6,"maria", 12))