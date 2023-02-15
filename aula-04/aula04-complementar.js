const date = new Date();
let tentiva = 0

alert("Vamos verificar se você tem desconto conosco?\nCaso você seja cadastrado, vamos te mostrar seu percentual de desconto!")

verificarClientePlus()

function verificarClientePlus() {

    let ehClientePlus = prompt(`Você é Cliente plus? Digite apenas o número\n1 - sim\n 2 - não`)
    tentiva++
    ehClientePlus.toLowerCase()

    switch (ehClientePlus) {
        case "1" || "sim" || "1 - sim" && tentiva == 1:
            primeiraTentativa()
            break
        case "1" || "sim" || "1 - sim":
            clientePlusSim()
            break
        case "2" || "não" || "nao" || "2 - nao" || "2 - não":
            clientePlusNao()
            break
        default:
            ehClientePlus = prompt("Não consegui entender :(\nPor favor, digite apenas o número\n1 - sim\n 2 - não")
            if (ehClientePlus == "1" || ehClientePlus == "sim" || ehClientePlus == "1 - sim") {
                clientePlusSim()
            } else if (ehClientePlus == "2" || ehClientePlus == "nao" || ehClientePlus == "2 - nao" || ehClientePlus == "não" || ehClientePlus == "2 - não") {
                clientePlusNao
            } else {
                alert("Que pena, você não vai conseguir desconto :(\nBoas compras ♥")
            }
            break
    }

}

function primeiraTentativa() {
    let primeiroAcesso = prompt("Percebi que é seu primeiro acesso. Vamos fazer seu cadastro?\nDigite apenas o número\n1 - sim\n 2 - não")
   
    switch (primeiroAcesso) {
        case "1" || "sim" || "1 - sim":
            cadastrarCliente()
            break
        case "2" || "não" || "nao" || "2 - nao" || "2 - não":
            alert("Que pena, você não vai conseguir desconto")
            break
        default:
            primeiroAcesso = prompt("Não consegui entender :(\nPor favor, digite apenas o número\n1 - sim\n 2 - não")
            if (primeiroAcesso == "1" || primeiroAcesso == "sim" || primeiroAcesso == "1 - sim") {
                cadastrarCliente()
            } else if (primeiroAcesso == "2" || primeiroAcesso == "nao" || primeiroAcesso == "2 - nao" || primeiroAcesso == "não" || primeiroAcesso == "2 - não") {
                clientePlusNao
            } else {
                alert("Que pena, você não vai conseguir desconto :(\nBoas compras ♥")
            }
            break
    }

}

function clientePlusSim(cadastros) {

    let buscarCpf = prompt("Por favor, me informe seu cpf (apenas os números)")

    let encontrarCadastro = cadastros.find(encontrarCadastro => encontrarCadastro.cpf == buscarCpf)
    console.log(encontrarCadastro)

    if (encontrarCadastro == undefined) {
        let novoCadastro = prompt("Cadastro não encontrado!\nDeseja se cadastrar?\nDigite apenas o número\n1 - sim\n 2 - não")

        novoCadastro.toLowerCase()

        switch (novoCadastro) {
            case "1" || "sim" || "1 - sim":
                cadastrarCliente()
                break
            case "2" || "não" || "nao" || "2 - nao" || "2 - não":
                alert("Que pena, você não vai conseguir desconto")
                break
            default:
                novoCadastro = prompt("Não consegui entender :(\nPor favor, digite apenas o número\n1 - sim\n 2 - não")
                if (novoCadastro == "1" || novoCadastro == "sim" || novoCadastro == "1 - sim") {
                    cadastrarCliente()
                } else if (novoCadastro == "2" || novoCadastro == "nao" || novoCadastro == "2 - nao" || novoCadastro == "não" || novoCadastro == "2 - não") {
                    clientePlusNao
                } else {
                    alert("Que pena, você não vai conseguir desconto :(\nBoas compras ♥")
                }
                break
        }
    } else {
        alert(`Olá, ${encontrarCadastro.nome + encontrarCadastro.sobrenome}!\nSeu desconto é de ${encontrarCadastro.desconto * 100}%\nBoas compras!`)
    }

}

function clientePlusNao() {
    let oferecerAdesao = prompt("Você sabia que Cliente Plus tem descontos exclusivos de acordo com sua idade que pode chegar a 50%?\nVamos fazer um cadastro? É rapidinho\nDigite apenas o número\n1 - sim\n 2- não")

    oferecerAdesao.toLowerCase()

    switch (oferecerAdesao) {
        case "1" || "sim" || "1 - sim":
            cadastrarCliente()
            break
        case "2" || "não" || "nao" || "2 - nao" || "2 - não":
            alert("Que pena, você não vai conseguir desconto")
            break
        default:
            oferecerAdesao = prompt("Não consegui entender :(\nPor favor, digite apenas o número\n1 - sim\n 2- não")
            if (oferecerAdesao == "1" || oferecerAdesao == "sim" || oferecerAdesao == "1 - sim") {
                cadastrarCliente()
            } else if (oferecerAdesao == "2" || oferecerAdesao == "nao" || oferecerAdesao == "2 - nao" || oferecerAdesao == "não" || oferecerAdesao == "2 - não") {
                clientePlusNao
            } else {
                alert("Que pena, você não vai conseguir desconto :(\nBoas compras ♥")
            }
            break
    }
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
        alert(`Você tem ${idade} anos. Para ser Cliente Plus é necessário ter 18 ou mais`)
        alert("Cadastro não realizado por idade insuficiente. Obrigada pela tentiva ♥")
    } else {
        if (idade < 30) {
            desconto = 0.15
        } else if (idade >= 30 || idade <= 60) {
            desconto = 0.30
        } else {
            desconto = 0.50
        }
    }

    let cadastros = [{
        "nome": nome,
        "sobrenome": sobrenome,
        "cpf": cpf,
        "desconto": desconto
    }]

    cadastros.push(nome, sobrenome, cpf, desconto)

    alert("Cadastro realizado com sucesso!")
    clientePlusSim(cadastros)
}