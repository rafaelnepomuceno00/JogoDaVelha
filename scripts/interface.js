document.addEventListener('DOMContentLoaded', () => {
    let quadrados = document.querySelectorAll('.quadrado')

    quadrados.forEach((quadrado) => {
        quadrado.addEventListener('click', clicado)
    })
})

function clicado(event) {

    let quadrado = event.target
    let posicao = quadrado.id

    if (movimentacao(posicao)) {

        setTimeout(() => {
            alert(" Fim de jogo! \nVencedor: jogador " + jogador + " \nCom a sequência: " + sequenciaVencedora)
        }, 20)

    }
    atualizaQuadrado(posicao)

}

function atualizaQuadrado(posicao) {
    let quadrado = document.getElementById(posicao.toString())
    let simbolo = tabuleiro[posicao]
    quadrado.innerHTML = `<div class='${simbolo}'></div>`
}

function atualizaTabuleiro() {
    let quadrados = document.querySelectorAll('.quadrado')

    quadrados.forEach((quadrado) => {
        let posicao = quadrado.id
        let simbolos = tabuleiro[posicao]

        if (simbolos != '') {
            quadrado.innerHTML = `<div class='"></div>`
        }

    })

}

function reiniciar() {
    atualizaTabuleiro()
    tabuleiro = ['', '', '', '', '', '', '', '', '']
    jogador = 0
    fimDeJogo = false
}