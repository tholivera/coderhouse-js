let opcao
let frase = ["É em meio a dificuldade que se encontra a oportunidade",
    "O êxito é ir de frustração a frustração sem perder a animação",
    "Mesmo que algo pareça difícil, nunca desista antes de tentar",
    "Você é o único que entende as suas dificuldades, por isso motive se a prosseguir",
    "Não é uma vida ruim, é apenas um dia ruim, lembre-se disso",
    "A maior prova de que você pode fazer o impossível, é superar circunstâncias difíceis",
    "Que os dias bons se tornem rotina, e os ruins se tornem raros",
    "É genial celebrar a vitória, contudo é mais significativo aprender com as lições da derrota",
    "Qualquer dificuldade pode ser ultrapassada, já que para todo problema há uma solução",
    "Já pensou que você já superou muitas dificuldades até aqui?"]
let tabuada = []

do {
    opcao = prompt("Escolha uma opção: "
        + "\n1 - Mostrar uma frase motivadora"
        + "\n2 - Mostrar o resultado de uma tabuada até o 10"
        + "\n0 - Sair")

    if (opcao == 1) {
        for (let x = 1; x < 2; x++) {
            alert(frase[Math.floor(Math.random() * frase.length)])
        }
        opcao = 0
    } else if (opcao == 2) {
        let numTabuada = parseInt(prompt("Digite o número da tabuada que você deseja"))
        if (isNaN(numTabuada)) {
            alert("Você não digitou um número")
            opcao = 0
        } else {
            for (let x = 1; x < 11; x++) {
                let addArray = [(`${numTabuada + "x" + x + "=" + numTabuada * x}`)]
                tabuada.push(addArray)
            }
            alert(tabuada.join('\n'))
        }
        opcao = 0
    }
} while (opcao != 0) {
    alert("Agradeçemos a sua participação")
}
