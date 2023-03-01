
const notaAluno = []
const ordenacao = []

notaAluno.push({aluno:"Thaís", notaPortugues: 8.9, notaMatematica: 9.5, notaGeografia: 8.8, notaHistoria: 7.5})
notaAluno.push({aluno:"Geraldo", notaPortugues: 9.90, notaMatematica: 6.2, notaGeografia: 8.5, notaHistoria: 10})
notaAluno.push({aluno:"Pedro", notaPortugues: 6.40, notaMatematica: 3.50, notaGeografia: 5.8, notaHistoria: 4.5})
notaAluno.push({aluno:"Eliana", notaPortugues: 5.50, notaMatematica: 10, notaGeografia: 7.9, notaHistoria: 8.3})

for (const mediaNota of notaAluno) {
    let aluno = mediaNota.aluno
    let media = (mediaNota.notaPortugues + mediaNota.notaMatematica + mediaNota.notaGeografia + mediaNota.notaHistoria) / notaAluno.length
    ordenacao.push({aluno: aluno, media: media})
}

ordenacao.sort(function (mediaMenor, mediaMaior) {
    return mediaMaior.media - mediaMenor.media
})

const novoArray = []
let posicao = 1

for (const ranking of ordenacao) {
    novoArray.push([(posicao++) + "° Lugar \n\nAluno: " + ranking.aluno + "\nMédia: " + ranking.media + "\n\n"])
}

console.log("RANKING DE NOTAS\n\n" + novoArray.join("\n"))