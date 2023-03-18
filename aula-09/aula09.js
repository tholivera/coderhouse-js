let quantidade = document.getElementsByClassName("quantidade");
let btnComprar = document.getElementsByClassName("btn-comprar");
let btnMais = document.getElementsByClassName("btn-mais");
let btnMenos = document.getElementsByClassName("btn-menos");
let carrinho = document.getElementById("carrinho")

for (let i = 0; i < quantidade.length; i++) {
    quantidade[i].innerHTML = 0;
    btnComprar[i].disabled = true;
    btnMenos[i].disabled = true;
}

function adicionarQuantidade(id) {
    let quantidadeAtual = parseInt(quantidade[id].innerHTML)
    quantidade[id].innerHTML = ++quantidadeAtual

    btnMenos[id].disabled = false
    btnComprar[id].disabled = false
}

function diminuirQuantidade(id) {
    let quantidadeAtual = parseInt(quantidade[id].innerHTML)
    quantidade[id].innerHTML = --quantidadeAtual

    if (quantidadeAtual <= 0) {
        btnMenos[id].disabled = true
        btnComprar[id].disabled = true
    }
}
let item = 1;
let arrayTotal = []

function comprar(id) {
    let nome = document.getElementsByTagName("h2")[id].innerText
    let precoProduto = preco(id)
    let total = precoProduto * parseInt(quantidade[id].innerHTML)
    
    carrinho.style.display = "block"

    const produto = new Produto(nome, precoProduto);

    let adicionarLinha = document.createElement("tr")

    let adicionarItem = document.createElement("td")
    adicionarItem.innerHTML = item++
    adicionarItem.className = "largura-min"

    let adicionarProduto = document.createElement("td")
    adicionarProduto.innerHTML = nome
    adicionarProduto.className = "largura-cabecalho-produto"

    let adicionarQuantidade = document.createElement("td")
    adicionarQuantidade.innerHTML = quantidade[id].innerHTML
    adicionarQuantidade.className = "largura-cabecalho"

    let adicionarPrecoUn = document.createElement("td")
    adicionarPrecoUn.innerHTML = "R$ " + precoProduto
    adicionarPrecoUn.className = "largura-cabecalho"

    let adicionarTotal = document.createElement("td")
    adicionarTotal.innerHTML = "R$ " + total
    adicionarTotal.className = "largura-cabecalho"
    arrayTotal.push(total)
    const totalPedido = arrayTotal.reduce((total, numeroAtual) => total + numeroAtual)

    let exibirTotal = document.getElementById("total-pedido")
    exibirTotal.innerHTML =  "R$ " + totalPedido
    exibirTotal.className = "total-pedido"

    let adicionarBotao = document.createElement("td")
    adicionarBotao.innerHTML = "<button id='excluir' onclick='excluir(event)'>Excluir</button>"
    adicionarBotao.className = "largura-cabecalho"

    adicionarLinha.appendChild(adicionarItem)
    adicionarLinha.appendChild(adicionarProduto)
    adicionarLinha.appendChild(adicionarQuantidade)
    adicionarLinha.appendChild(adicionarPrecoUn)
    adicionarLinha.appendChild(adicionarTotal)
    adicionarLinha.appendChild(adicionarBotao)

    let tabela = document.getElementById("lista")
    tabela.appendChild(adicionarLinha)
}

function excluir(event) {
    let excluir = event.target
    let excluirLinha = excluir.parentNode.parentNode
    excluirLinha.remove()
}

function preco(id) {
    let preco
    switch (id) {
        case 0:
            preco = 23.50
            break
        case 1:
            preco = 25
            break
        case 2:
            preco = 19.50
            break
        case 3:
            preco = 25.50
            break
    }
    return preco
}



class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

function finalizarPedido() {
    let fraseSucesso = document.getElementById("frase-sucesso")

    fraseSucesso.style.display = "block"
}