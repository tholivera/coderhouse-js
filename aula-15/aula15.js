const menuLanches = document.getElementById("menu-lanches")
const menuBebidas = document.getElementById("menu-bebidas")
const quantidade = document.getElementsByClassName("quantidade");
const btnComprar = document.getElementsByClassName("btn-comprar");
const btnMais = document.getElementsByClassName("btn-mais");
const btnMenos = document.getElementsByClassName("btn-menos");
const carrinho = document.getElementById("carrinho")
let item = 1;
let arrayTotal = []
const btnConfirmarPedido1 = document.getElementById("btn-confirmar1")
const btnConfirmarPedido2 = document.getElementById("btn-confirmar2")
const btnConfirmarEndereco = document.getElementById("confirmar-endereco")
let enderecoPedido = document.getElementById("endereco-pedido")
let confirmarInfo = document.getElementById("confirmar-informacoes")
const btnConfirmar = document.getElementById("confirmar")
const btnAlterarEndereco = document.getElementById("alterar-endereco")
const btnAlterarPedido = document.getElementById("alterar-pedido")
const alertInfo = document.getElementById("alert-info")
const fundo = document.getElementById("fundo")
const alertCarrinho = document.getElementById("alert-informacao")
const alertSucesso = document.getElementById("alert-sucesso")
const semNum = document.getElementById("sem-numero")
const semCep = document.getElementById("sem-cep")
let inputNum = document.getElementById("numeroCasa")
let inputCep = document.getElementById("cep")
btnConfirmarEndereco.disabled = false

//função toogle
function toogleClasse(toogle) {

    if (toogle.classList.contains("hide")) {
        toogle.classList.remove("hide")
    } else {
        toogle.classList.add("hide")
    }
}

//função fechar
function fechar(fechar) {
    let alert = document.getElementById(fechar)

    alert.classList.add("hide")
    fundo.classList.add("hide")
}

//função comprar
function comprar(id) {
    let nome = document.getElementsByTagName("h4")[id].innerText
    let precoProduto = preco(id)
    let total = precoProduto * parseInt(quantidade[id].innerHTML)

    var toast = Toastify({
        text: "Produto adicionado ao carrinho!\nClique aqui para abrir.",
        duration: 3000,
        onClick: function () {
            toast.hideToast();
            fundo.classList.remove("hide")

            if (carrinho.classList.contains("hide")) {
                carrinho.classList.remove("hide")
            }

        }
    }).showToast()


    const produto = new Produto(nome, precoProduto);

    let adicionarLinha = document.createElement("tr")

    let adicionarItem = document.createElement("td")
    adicionarItem.innerHTML = item++
    adicionarItem.className = "largura-min"

    let adicionarProduto = document.createElement("td")
    adicionarProduto.innerHTML = nome
    adicionarProduto.className = "largura-cabecalho-produto add-produto"

    let adicionarQuantidade = document.createElement("td")
    adicionarQuantidade.innerHTML = quantidade[id].innerHTML
    adicionarQuantidade.className = "largura-cabecalho add-quantidade"


    let adicionarPrecoUn = document.createElement("td")
    adicionarPrecoUn.innerHTML = "R$ " + precoProduto
    adicionarPrecoUn.className = "largura-cabecalho add-preco-un"

    let adicionarTotal = document.createElement("td")
    adicionarTotal.innerHTML = "R$ " + total
    adicionarTotal.className = "largura-cabecalho add-preco-total"
    arrayTotal.push(total)
    const totalPedido = arrayTotal.reduce((total, numeroAtual) => total + numeroAtual)


    let exibirTotal = document.getElementById("total-pedido")
    exibirTotal.innerHTML = "R$ " + totalPedido
    exibirTotal.className = "total-pedido preco"

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

    localStorage.setItem("produto" + id, nome)
    localStorage.setItem("quantidade" + id, quantidade[id].innerHTML)
    localStorage.setItem("totalProduto" + id, total)
    localStorage.setItem("total", totalPedido)

}

//Quando "Lanches" for clicado, abre/fecha
menuLanches.addEventListener("click", () => {
    const cardapioLanches = document.getElementById("cardapio-lanches")
    toogleClasse(cardapioLanches)
})

//Quando "Bebibdas" for clicado, abre/fecha
menuBebidas.addEventListener("click", () => {
    const cardapioBebidas = document.getElementById("cardapio-bebidas")
    toogleClasse(cardapioBebidas)

})

//Adicionando quantidade 0 a todos os itens e desabilitando botões "comprar" e "diminuir"
for (let i = 0; i < quantidade.length; i++) {
    quantidade[i].innerHTML = 0;
    btnComprar[i].disabled = true;
    btnMenos[i].disabled = true;
}

//função para adicionar quantidade
function adicionarQuantidade(id) {
    let quantidadeAtual = parseInt(quantidade[id].innerHTML)
    quantidade[id].innerHTML = ++quantidadeAtual

    btnMenos[id].disabled = false
    btnComprar[id].disabled = false
}

//função para diminuir quantidade
function diminuirQuantidade(id) {
    let quantidadeAtual = parseInt(quantidade[id].innerHTML)
    quantidade[id].innerHTML = --quantidadeAtual

    if (quantidadeAtual <= 0) {
        btnMenos[id].disabled = true
        btnComprar[id].disabled = true
    }
}

//classe "Produto"
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

//Botão "confirmar pedido" ao ser clicado esconde o carrinho e abre formulário de endereço, necessário dois botões iguais por conta da função toogle
btnConfirmarPedido1.addEventListener("click", () => {
    const carrinhoPedido = document.getElementById("carrinho")
    toogleClasse(carrinhoPedido)

    for (let i = 0; i < quantidade.length; i++) {
        btnComprar[i].disabled = true;
        btnMais[i].disabled = true;
        btnMenos[i].disabled = true;
    }

    if (enderecoPedido.classList.contains("hide")) {
        enderecoPedido.classList.remove("hide")
    }

    adicionarPrecoTotal()
    pedidoCarrinho()

})

//Botão "confirmar pedido" ao ser clicado esconde o carrinho e abre formulário de endereço, necessário dois botões iguais por conta da função toogle
btnConfirmarPedido2.addEventListener("click", () => {
    let divPedido = document.getElementById("div-pedido")
    toogleClasse(confirmarInfo)
    toogleClasse(carrinho)

    for (let i = 0; i < quantidade.length; i++) {
        btnComprar[i].disabled = true;
        btnMais[i].disabled = true;
        btnMenos[i].disabled = true;
    }

    adicionarPrecoTotal()
    pedidoCarrinho()
    divPedido.remove()
})

//função para adicionar itens ao box de informações finais
function pedidoCarrinho() {
    let produtos = document.getElementsByClassName("add-produto");
    let quantidades = document.getElementsByClassName("add-quantidade");
    let precos = document.getElementsByClassName("add-preco-total");
    let adicionarPedido = document.createElement("div")
    adicionarPedido.setAttribute("id", "div-pedido")


    for (let i = 0; i < produtos.length; i++) {
        let adicionarInfo = document.createElement("div")
        adicionarInfo.className = "div-pedido"

        let adicionarProduto = document.createElement("p")
        adicionarProduto.innerHTML = "<strong>Produto:</strong> " + produtos[i].innerHTML
        adicionarProduto.className = "padding-bottom-5"


        let adicionarQuantidade = document.createElement("p")
        adicionarQuantidade.innerHTML = "<strong>Quantidade:</strong> " + quantidades[i].innerHTML
        adicionarQuantidade.className = "padding-bottom-5 espaco-esquerda"

        let adicionarTotalUnitario = document.createElement("p")
        adicionarTotalUnitario.innerHTML = "<strong>Total do produto:</strong> R$ " + precos[i].innerHTML
        adicionarTotalUnitario.className = "padding-bottom-5 espaco-esquerda"

        adicionarInfo.appendChild(adicionarProduto)
        adicionarInfo.appendChild(adicionarQuantidade)
        adicionarInfo.appendChild(adicionarTotalUnitario)
        adicionarPedido.appendChild(adicionarInfo)
    }

    let boxInfo = document.getElementById("confirmar-informacoes-pedido")
    boxInfo.appendChild(adicionarPedido)
}

//função para adicionar o prço total do pedido ao box de informações
function adicionarPrecoTotal() {

    let adicionarTotalPedido = document.createElement("p")
    adicionarTotalPedido.setAttribute("id", "paragrafo-total")
    adicionarTotalPedido.innerHTML = "<strong>Total Pedido: R$ " + localStorage.getItem("total") + "</strong>"
    adicionarTotalPedido.className = "padding-bottom-5"

    let boxInfo = document.getElementById("total-geral-pedido")
    boxInfo.appendChild(adicionarTotalPedido)
}

//Mostrar span para campo vazio
const mostrarSpanNum = inputNum.addEventListener("input", () => {
    let numero = inputNum.value
    if (numero == "") {
        semNum.classList.remove("hide")
        return
    } else {
        semNum.classList.add("hide")
    }
})

//Mostrar span para campo vazio
const mostrarSpanCep = inputNum.addEventListener("input", () => {
    let formulario = document.getElementById("cadastro-endereco")
    let cep = formulario.cep.value
    if (cep == "") {
        semCep.classList.remove("hide")
        return
    } else {
        semCep.classList.add("hide")
    }
})

//Botão "confirmar endereço" ao ser clicado envia para o localStorage o endereço do usuário e adiciona pelo localStorage as informações ao box de informação
btnConfirmarEndereco.addEventListener("click", (event) => {
    event.preventDefault()
    let formulario = document.getElementById("cadastro-endereco")

    let rua = formulario.rua.value
    let numero = formulario.numeroCasa.value
    let bairro = formulario.bairro.value
    let cep = formulario.cep.value
    let cidade = formulario.cidade.value

    if (cep == "") {
        semCep.classList.remove("hide")
        mostrarSpanCep
        return
    } else {
        semCep.classList.add("hide")
        mostrarSpanCep
    }

    if (numero == "") {
        semNum.classList.remove("hide")
        mostrarSpanNum
        return
    } else {
        semNum.classList.add("hide")
        mostrarSpanNum
    }


    localStorage.setItem("rua", rua)
    localStorage.setItem("numero", numero)
    localStorage.setItem("bairro", bairro)
    localStorage.setItem("cep", cep)
    localStorage.setItem("cidade", cidade)

    let adicionarInfo = document.createElement("div")
    adicionarInfo.setAttribute("id", "div-endereco")

    let adicionarRuaENum = document.createElement("div")
    adicionarRuaENum.className = "divRuaENum"

    let adicionarRua = document.createElement("p")
    adicionarRua.innerHTML = "<strong>Rua:</strong> " + localStorage.getItem("rua")

    let adicionarNumero = document.createElement("span")
    adicionarNumero.innerHTML = "<strong>Número:</strong> " + localStorage.getItem("numero")
    adicionarNumero.className = "espaco-esquerda"

    let adicionarBairro = document.createElement("p")
    adicionarBairro.innerHTML = "<strong>Bairro:</strong> " + localStorage.getItem("bairro")

    let adicionarCep = document.createElement("p")
    adicionarCep.innerHTML = "<strong>CEP:</strong> " + localStorage.getItem("cep")

    let adicionarCidade = document.createElement("p")
    adicionarCidade.innerHTML = "<strong>Cidade:</strong> " + localStorage.getItem("cidade")

    adicionarRuaENum.appendChild(adicionarRua)
    adicionarRua.appendChild(adicionarNumero)
    adicionarInfo.appendChild(adicionarRuaENum)
    adicionarInfo.appendChild(adicionarBairro)
    adicionarInfo.appendChild(adicionarCep)
    adicionarInfo.appendChild(adicionarCidade)

    let tabela = document.getElementById("confirmar-informacoes-endereco")
    tabela.appendChild(adicionarInfo)

    if (!carrinho.classList.contains("hide")) {
        carrinho.classList.add("hide")
    }

    toogleClasse(enderecoPedido)
    toogleClasse(confirmarInfo)
})

//Botão "confirmar" limpa as informações do localStorage, adiciona um alert para informação do usuário e recarrega a página
btnConfirmar.addEventListener("click", () => {
    let tempo = 11
    localStorage.clear()

    confirmarInfo.classList.add("hide")

    setInterval(function () {
        tempo--
        if (tempo <= 0) {
            location.reload()
        } else {
            document.getElementById('tempo-restante').innerHTML = tempo
        }
    }, 1000);

    Swal.fire(
        'Pedido concluído',
        "Seu pedido foi concluído com sucesso!<br>A página será recarregada automaticamente em <span id='tempo-restante'>" + tempo + "</span> segundos",
        'success'
    )

    Swal.getConfirmButton().addEventListener('click', function () {
        location.reload()
    })
})

//Botão "alterar endereço" abre o formulário de endereço e faz alteração do endereço no box de informação conforme informado pelo usuário 
btnAlterarEndereco.addEventListener("click", () => {
    let divEndereco = document.getElementById("div-endereco")

    localStorage.removeItem("numero")
    localStorage.removeItem("cidade")
    localStorage.removeItem("cep")
    localStorage.removeItem("bairro")
    localStorage.removeItem("rua")
    toogleClasse(enderecoPedido)
    toogleClasse(confirmarInfo)
    if (!carrinho.classList.contains("hide")) {
        carrinho.classList.add("hide")
    }
    divEndereco.remove()
})

//Botão "alterar pedido" abre o carrinho de compras e faz alteração do pedido no box de informação conforme informado pelo usuário 
btnAlterarPedido.addEventListener("click", () => {
    let paragrafoTotal = document.getElementById("paragrafo-total")
    toogleClasse(carrinho)
    toogleClasse(confirmarInfo)

    for (let i = 0; i < quantidade.length; i++) {

        btnMais[i].disabled = false;

        if (quantidade[i].innerHTML > 0) {
            btnComprar[i].disabled = false;
            btnMenos[i].disabled = false;
        }
    }

    if (!btnConfirmarPedido1.classList.contains("hide")) {
        btnConfirmarPedido1.classList.add("hide")
    }
    if (btnConfirmarPedido2.classList.contains("hide")) {
        btnConfirmarPedido2.classList.remove("hide")
    }

    paragrafoTotal.remove()

})

//função para excluir linha e atualizar preço total
function excluir(event) {
    let excluir = event.target
    let excluirLinha = excluir.parentNode.parentNode
    let excluirPrecoTotal = excluirLinha.getElementsByClassName("add-preco-total")[0].innerHTML
    let index = arrayTotal.indexOf(parseFloat(excluirPrecoTotal.slice(3)))
    let exibirTotal = document.getElementById("total-pedido")

    arrayTotal.splice(index, 1)
    const totalPedido = arrayTotal.reduce((total, numeroAtual) => total + numeroAtual, 0)
    localStorage.setItem("total", totalPedido)

    exibirTotal.innerHTML = "R$ " + totalPedido
    exibirTotal.className = "total-pedido preco"

    excluirLinha.remove()
}

//função para selecionar o preço do produto
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
        case 4:
            preco = 7.50
            break
        case 5:
            preco = 7.50
            break
        case 6:
            preco = 7.50
            break
        case 7:
            preco = 7.50
            break
        case 8:
            preco = 7.50
            break
        case 9:
            preco = 6.00
            break
        case 10:
            preco = 6.00
            break
        case 11:
            preco = 6.00
            break
        case 12:
            preco = 6.00
            break
        case 13:
            preco = 6.00
            break
    }
    return preco
}


inputCep.addEventListener("blur", () => {
    let cep = document.getElementById("cep").value
    let rua = document.getElementById("rua")
    let bairro = document.getElementById("bairro")
    let cidade = document.getElementById("cidade")
 
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((resp) => resp.json())
        .then((data) => {
            if (data.erro) {
                throw new Error
                
            }
            rua.value = data.logradouro;
            bairro.value = data.bairro;
            cidade.value = data.localidade;
            btnConfirmarEndereco.disabled = false
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'CEP inválido',
              })

              btnConfirmarEndereco.disabled = true
        })
})
