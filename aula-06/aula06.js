window.onload = function fazerPedido() {
    let opcao = parseInt(prompt("Olá, digite o número correspondente ao lanche que você deseja\n1 - Duplo Burguer\n2- Cheddar Triplo\n3 - X-Salada\n4 - X-Salada Turbinado\n5 - Hamburgão"))
    let quantidade = parseInt(prompt("E qual a quantidade?"))

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
    
    const enderecoEntregaCli = enderecoEntrega();
    informacoes(lanche, quantidade, enderecoEntregaCli)
}

function enderecoEntrega() {
    alert('Agora vamos precisar do seu endereço');


    const enderecoEntregaCli = {
        rua: prompt('Qual a rua da entrega?'),
        numero: prompt('E o número?'),
        bairro: prompt('Em bairro fica?'),
        cep: prompt('Me informe o cep também por favor'),
        cidade: prompt('Por ultimo, qual a cidade?'),
    };


    return enderecoEntregaCli;
}

function informacoes(lanche, quantidade, enderecoEntregaCli) {

    const pedidoCliente = new pedido(lanche, quantidade, quantidade * preco)
    const enderecoCliente = new endereco(enderecoEntregaCli)
    guardarPedido.push(pedidoCliente)
    guardarEndereco.push(enderecoCliente)

    let confirmar = prompt(`SEU PEDIDO\nLanche: ${pedidoCliente.lanche}\nQuantidade: ${pedidoCliente.quantidade}\nTotal R$ ${pedidoCliente.total}\n
    \nENDEREÇO DE ENTREGA\nRua: ${enderecoCliente.rua}\nNúmero: ${enderecoCliente.numero}\nBairro: ${enderecoCliente.bairro}\nCEP: ${enderecoCliente.cep}\nCidade: ${enderecoCliente.cidade}\n
    \nConfirmar pedido?\n1 - Sim\n2 - Não`)
    confirmarPedido(confirmar)
}

function confirmarPedido(confirmar) {
    if (confirmar == "1" || confirmar == "sim" || confirmar == "1 - sim") {
        alert("Pedido confirmado!\nSeu pedido já foi enviado para a cozinha e em breve chega na sua casa. Agradeçemos pelo pedido!")
    } else {
        alert("Ops, acho que errei ao anotar.\nRecarregue a página e tente novamente por favor!")
    }
}

function endereco(endereco) {

    this.rua = endereco.rua;
    this.numero = endereco.numero;
    this.bairro = endereco.bairro;
    this.cep = endereco.cep;
    this.cidade = endereco.cidade;
}

function pedido(lanche, quantidade, total) {
    this.lanche = lanche;
    this.quantidade = quantidade;
    this.total = total
}

const guardarPedido = []
const guardarEndereco = []

console.log(guardarPedido)
console.log(guardarEndereco)