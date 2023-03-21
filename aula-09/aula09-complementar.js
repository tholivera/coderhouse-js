const piadas = []
let selecionarPiada = 0

class Piada {
    constructor(pergunta, resposta) {
        this.pergunta = pergunta;
        this.resposta = resposta;
    }
}

const piada1 = new Piada("O que o pato disse para a pata?", "Vem Quá!");
piadas.push(piada1)
const piada2 = new Piada("Porque o menino estava falando ao telefone deitado?", "Para não cair a ligação.");
piadas.push(piada2)
const piada3 = new Piada("Qual é a fórmula da água benta?", "H Deus O!");
piadas.push(piada3)
const piada4 = new Piada("O que o pintinho falou para a mãe dele?", "Oi, mãe!");
piadas.push(piada4)
const piada5 = new Piada("Qual é a cidade brasileira que não tem táxi?", "Uberlândia.");
piadas.push(piada5)
const piada6 = new Piada("O que o tijolo falou para o outro?", "Há um ciumento entre nós.");
piadas.push(piada6)
const piada7 = new Piada("Porque o jacaré tirou o filho da escola?", "Porque ele réptil de ano.");
piadas.push(piada7)
const piada8 = new Piada("Porque o Batman colocou o Bat-móvel no seguro?", "Porque ele tem medo que Robin!");
piadas.push(piada8)
const piada9 = new Piada("Quem é a vó dos trigos?", "Avéia Quacker!");
piadas.push(piada9)
const piada10 = new Piada("Qual é o alimento mais sagrado que existe?", "O amém doím.");
piadas.push(piada10)

const btnGerarPiadas = document.getElementById("btn-gerar-piada")
const btnExcluirPiadas = document.getElementById("btn-excluir-piada")

btnGerarPiadas.addEventListener("click", () => {
    btnGerarPiadas.disabled = true
    piadaSelecionada = piadas[Math.floor(Math.random() * piadas.length)]

    let adicionarPergunta = document.createElement("p")
    let adicionarResposta = document.createElement("p")

    adicionarPergunta.innerHTML = piadaSelecionada.pergunta
    adicionarPergunta.className = "pergunta"
    adicionarResposta.innerHTML = piadaSelecionada.resposta
    adicionarResposta.className = "resposta"

    let paragrafoPiadas = document.getElementById("card")
    paragrafoPiadas.appendChild(adicionarPergunta)

    setTimeout(() => {
        paragrafoPiadas.appendChild(adicionarResposta)
        btnGerarPiadas.disabled = false;
        btnExcluirPiadas.classList.remove("hide")
        btnGerarPiadas.innerHTML = "Gerar Outra Piada"
    }, 1000)
})

btnExcluirPiadas.addEventListener("click", () => {
    const paragrafos = document.querySelectorAll('p');
    const contador = paragrafos.length - 2;
    let excluir = document.getElementsByTagName("p")
    for (let i = 0; i < 2; i++) {
        excluir[i].remove();
        excluir[i++].remove();
    }

    if (contador == 0) {
        btnExcluirPiadas.classList.add("hide")
        btnGerarPiadas.innerHTML = "Gerar Piada"
    }

})

