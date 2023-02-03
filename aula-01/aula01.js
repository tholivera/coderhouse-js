alert(`Olá, vamos nos conhecer?`)

let nome = prompt("Qual seu nome?")
let sobrenome = prompt("Qual seu sobrenome?")
alert(`Olá, ${nome} ${sobrenome}!\nEstou muito feliz que esteja aqui ♥`)
alert(`Sobre a sua idade\nDigite primeiro o dia do seu nascimento, depois o mês e depois o ano.`)



let dia = parseInt(prompt("Qual dia você nasceu?\n(somente números)"))
let mes = parseInt(prompt("E o mês?\n(somente números)"))
let ano = parseInt(prompt("E o ano?\n(somente números)"))
let idade = 2023 - ano

if (mes < 10) {
    mes = "0" + mes
}

alert(`Você nasceu em ${dia + "/" + mes + "/" + ano}\nVocê tem ou vai completar ${idade} anos em 2023`);
alert(`Foi um prazer te conhecer`);

