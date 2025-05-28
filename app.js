let listaDeNumerosSorteados = [];
let numeroLitime = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Male', { rate: 1.2 });
}

function exibirMensagenInicial() {
    exibirTextoNaTela("h1", "vamos jogar o jogo dos números, da sorte");
    exibirTextoNaTela("p", "escolha um número de 1 a 100");
}

exibirMensagenInicial()

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "acertou!!!!!!!!!!!!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `otimo, que sorte! , com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        tentativas++;
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "o numero secreto e menor");
        } else {
            exibirTextoNaTela("p", "o numero secreto e maior");
        }
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLitime + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLitime) {
        listaDeNumerosSorteados = [];
    }

    while (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        numeroEscolhido = parseInt(Math.random() * numeroLitime + 1);
    }
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
}

function limparCampo() {
    document.querySelector("input").value = "";
}

function reiniciarJogo() {
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagenInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}