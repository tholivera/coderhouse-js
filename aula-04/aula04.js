window.onload = function selecionarHamburguer() {
    let opcao = parseInt(prompt("Olá, digite o número correspondente ao lanche que você deseja\n1 - Duplo Burguer\n2- Cheddar Triplo\n3 - X-Salada\n4 - X-Salada Turbinado\n5 - Hamburgão"))
    let quantidade = parseInt(prompt("E qual a quantidade?"))
    let lanche = ""
    let preco = 0

    switch (opcao) {
        case 1:
            lanche = "Duplo Burguer"
            preco = 23.50
            break
        case 2:
            lanche = "Cheddar Triplo"
            preco = 25
            break
        case 3:
            lanche = "X-Salada"
            preco = 19.50
            break
        case 4:
            lanche = "X-Salada Turbinado"
            preco = 25.50
            break
        case 5:
            lanche = "Hamburgão"
            preco = 12
            break
    }


    let total = calcularPreco(preco, quantidade)

    confirmarPedido(lanche, quantidade, total)
}

function calcularPreco(preco, quantidade) {
    return preco * quantidade
}

function confirmarPedido(lanche, quantidade, total) {
    let confirmar = prompt(`SEU PEDIDO\nLanche: ${lanche}\nQuantidade: ${quantidade}\nTotal R$ ${total}\n\nConfirmar pedido?\n1 - Sim\n2 - Não`)
    if (confirmar == "1" || confirmar == "sim" || confirmar == "1 - sim") {
        alert("Pedido confirmado!\nSeu pedido já foi enviado para a cozinha e em breve chega na sua casa. Agradeçemos pelo pedido!")
    } else {
        alert("Ops, acho que errei ao anotar.\nRcarregue a opágina e tente novamente por favor!")
    }
}