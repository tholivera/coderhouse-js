alert("Oi! Vamos somar?")

let primeiroNum = parseInt(prompt("Digite um número"))
let segundoNum = parseInt(prompt("Digite um número diferente do anterior"))

if (primeiroNum == segundoNum) {
    alert("Ops... os números precisam ser diferentes")
    while(segundoNum == primeiroNum) {
        segundoNum = parseInt(prompt("Digite um número diferente"))
    }
    
} 

let soma = primeiroNum + segundoNum

if (primeiroNum < 10) {
    alert("O primeiro número digitado é menor que 10")
} else if (primeiroNum >= 10 && primeiroNum <= 50 ) {
    alert("O primeiro número digitado está entre 10 e 50")
} else if (primeiroNum > 50 ){
    alert("O primeiro número digitado é maior que 50")
} else {
    alert("Você não digitou o primeiro número, por isso não vou conseguir somar :(")
}

if (segundoNum < 10) {
    alert("O segundo número digitado é menor que 10")
} else if (segundoNum >= 10 && segundoNum <= 50 ) {
    alert("O segundo número digitado está entre 10 e 50")
} else if (segundoNum > 50 ){
    alert("O primeiro número digitado é maior que 50")
}else {
    alert("Você não digitou o segundo número, por isso não vou conseguir somar :(")
}

if (soma >= 0) {
    alert(`A soma de ${primeiroNum + " + " + segundoNum} é igual a ${soma}\nAgradeço a colaboração`)
}
