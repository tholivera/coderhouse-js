let item = 1;

function adicionarPedido(event) {
    event.preventDefault()

    let select = document.getElementById("produtos");
    let produto = select.options[select.selectedIndex].value;
    let quantidade = document.getElementById("quantidade").value;
    let total = mostrarPreco() * quantidade

    let adicionarLinha = document.createElement("tr")

    let adicionarItem = document.createElement("td")
    adicionarItem.innerHTML = item++

    let adicionarProduto = document.createElement("td")
    adicionarProduto.innerHTML = produto

    let adicionarQuantidade = document.createElement("td")
    adicionarQuantidade.innerHTML = quantidade

    let adicionarTotal = document.createElement("td")
    adicionarTotal.innerHTML = "R$ " + total

    let adicionarBotao = document.createElement("td")
    adicionarBotao.innerHTML = "<button id='excluir' onclick='excluir(event)'>Excluir</button>"

    adicionarLinha.appendChild(adicionarItem)
    adicionarLinha.appendChild(adicionarProduto)
    adicionarLinha.appendChild(adicionarQuantidade)
    adicionarLinha.appendChild(adicionarTotal)
    adicionarLinha.appendChild(adicionarBotao)

    let tabela = document.getElementById("lista")
    tabela.appendChild(adicionarLinha)
}


function mostrarPreco() {

    let select = document.getElementById("produtos");
    let id = select.options[select.selectedIndex].id;
    let consultarPreco = preco(id)

    let adicionarPreco = document.getElementById("precos")
    adicionarPreco.innerHTML = "R$ " + consultarPreco
    
    return consultarPreco
}


function preco(id) {
    let preco
    switch (id) {
        case "0":
            preco = "-"
           break
        case "1":
            preco = 23.50
           break
        case "2":
            preco = 25
            break
        case "3":
            preco = 19.50
            break
        case "4":
            preco = 25.50
            break
        case "5":
            preco = 12
            break
    }
    return preco
}

function excluir(event) {
    let excluir = event.target
    let excluirLinha = excluir.parentNode.parentNode
    excluirLinha.remove()
}