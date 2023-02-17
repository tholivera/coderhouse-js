const date = new Date();

let cadastros = [{
    "nome": "",
    "sobrenome": "",
    "cpf": "",
    "desconto": 0
}]

verificarClientePlus()

function verificarClientePlus() {
    alert("Vamos verificar se você tem desconto conosco?\nCaso você seja cadastrado, vamos te mostrar seu percentual de desconto!")
    let ehClientePlus = prompt(`Você é Cliente plus? Digite apenas o número\n1 - sim\n 2 - não`)

    ehClientePlus.toLowerCase()

    switch (ehClientePlus) {
        case "1" || "sim" || "1 - sim":
            clientePlusSim(cadastros)
            break
        case "2" || "não" || "nao" || "2 - nao" || "2 - não":
            clientePlusNao()
            break
        default:
            ehClientePlus = prompt("Não consegui entender :(\nPor favor, digite apenas o número\n1 - sim\n 2 - não")
            if (ehClientePlus == "1" || ehClientePlus == "sim" || ehClientePlus == "1 - sim") {
                clientePlusSim(cadastros)
            } else if (ehClientePlus == "2" || ehClientePlus == "nao" || ehClientePlus == "2 - nao" || ehClientePlus == "não" || ehClientePlus == "2 - não") {
                clientePlusNao()
            } else {
                sair()
            }
            break
    }

}


function clientePlusSim(cadastros) {

    let buscarCpf = prompt("Por favor, me informe seu cpf (apenas os números)")
    let encontrarCadastro = cadastros.find(encontrarCadastro => encontrarCadastro.cpf == buscarCpf)

    if (encontrarCadastro == undefined) {
        let novoCadastro = prompt("Cadastro não encontrado!\nDeseja se cadastrar?\nDigite apenas o número\n1 - sim\n 2 - não")

        opcao(novoCadastro)
        
    } else {
        alert(`Olá, ${encontrarCadastro.nome + encontrarCadastro.sobrenome}!\nSeu desconto é de ${encontrarCadastro.desconto * 100}%\nBoas compras!`)
    }

}

function clientePlusNao() {
    let oferecerAdesao = prompt("Você sabia que Cliente Plus tem descontos exclusivos de acordo com sua idade que pode chegar a 50%?\nVamos fazer um cadastro? É rapidinho\nDigite apenas o número\n1 - sim\n 2- não")

    opcao(oferecerAdesao)
}

function cadastrarCliente() {

    const nome = prompt("Digite seu primeiro nome") + " "
    const sobrenome = prompt("Digite seu sobrenome")
    const cpf = prompt("Digite seu cpf")
    const dia = parseInt(prompt("Qual dia você nasceu?\n(somente números)"))
    const mes = parseInt(prompt("E o mês?\n(somente números)"))
    const ano = parseInt(prompt("E o ano?\n(somente números)"))
    let idade = -1
    let desconto = 0
    const hoje = date.getDate();
    const mesAtual = date.getMonth() + 1;
    const anoAtual = date.getFullYear();

    for (let i = ano; i < anoAtual; i++) {
        idade++
    }

    if (hoje >= dia && mesAtual >= mes) {
        idade++
    }

    if (idade < 18) {
        alert(`Você tem ${idade} ano. Para ser Cliente Plus é necessário ter 18 ou mais`)
        alert("Cadastro não realizado por idade insuficiente. Obrigada pela tentiva ♥")
    } else {
        if (idade < 30) {
            desconto = 0.15
        } else if (idade >= 30 || idade <= 60) {
            desconto = 0.30
        } else {
            desconto = 0.50
        }

        cadastros = [{
            "nome": nome,
            "sobrenome": sobrenome,
            "cpf": cpf,
            "desconto": desconto
        }]

        cadastros.push(nome, sobrenome, cpf, desconto)
        alert("Cadastro realizado com sucesso!")
        clientePlusSim(cadastros)
    }

}

function sair() {
    alert("Que pena, você não vai conseguir desconto :(\nBoas compras ♥")
    return false
}

function opcao(opcaoDigitada) {

    opcaoDigitada.toLowerCase()

    switch (opcaoDigitada) {
        case "1" || "sim" || "1 - sim":
            cadastrarCliente()
            break
        case "2" || "não" || "nao" || "2 - nao" || "2 - não":
            sair()
            break
        default:
            opcaoDigitada = prompt("Não consegui entender :(\nPor favor, digite apenas o número\n1 - sim\n 2 - não")
            if (opcaoDigitada == "1" || opcaoDigitada == "sim" || opcaoDigitada == "1 - sim") {
                cadastrarCliente()
            } else if (opcaoDigitada == "2" || opcaoDigitada == "nao" || opcaoDigitada == "2 - nao" || opcaoDigitada == "não" || opcaoDigitada == "2 - não") {
                clientePlusNao()
            } else {
                sair()
            }
            break
    }
}