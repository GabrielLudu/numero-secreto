let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


exibirMensagemInicial();

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function verificarChute() {
    let chute = document.querySelector(".container__input").value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Você Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = "Você descobriu o número secreto com " + tentativas + " " + palavraTentativa + "!";
        exibirTextoNaTela(".texto__paragrafo", mensagemTentativas);
        document.getElementById("reiniciar").disabled = false;
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela(".texto__paragrafo","O número secreto é menor");
            limparCampo();
        } else {
            exibirTextoNaTela(".texto__paragrafo","O número secreto é maior");
            limparCampo();
        }
        tentativas++;
    }
    
}
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}
    function limparCampo(){
        let campo = document.querySelector(".container__input");
        campo.value = "";
}
    function reiniciarJogo(){
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
    function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela(".texto__paragrafo", "Tente adivinhar o número secreto entre 1 e " + numeroLimite);
}