//iniciar as variáveis que controlam os estados do jogo

let tabuleiro = ['', '', '', '', '', '', '', '', '']
let jogador = 0
let simbolos = ['o', 'x']
let fimDeJogo = false
let estadosDeVitoria = [
    [0, 1, 2],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [3, 4, 5],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let sequenciaVencedora


function movimentacao(posicao) {

    if (fimDeJogo) {
        return
    }

    if (tabuleiro[posicao] == '') {
        tabuleiro[posicao] = simbolos[jogador];

        fimDeJogo = ganhou()

        if (!fimDeJogo) {
            jogador = (jogador == 0) ? 1 : 0

        }
    }
    return fimDeJogo
}

function ganhou() {

    for (i = 0; i < estadosDeVitoria.length; i++) {
        let sequencia = estadosDeVitoria[i]

        let pos1 = sequencia[0]
        let pos2 = sequencia[1]
        let pos3 = sequencia[2]

        if (tabuleiro[pos1] == tabuleiro[pos2] &&
            tabuleiro[pos1] == tabuleiro[pos3] &&
            tabuleiro[pos1] != '') {
            sequenciaVencedora = sequencia
            return true
        }

    }
    return false
}