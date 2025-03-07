let listaDeNumerosSorteados = [];
let numeroAleatorio = gerarNumeroAleatorio();
let tenativas = 1;

function exibirTextoNaTela(tag, Text){
    let campo = document.querySelector(tag);
    campo.innerHTML = Text;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo da vida');
    exibirTextoNaTela('p', 'Digite um numero de 1 a 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute==numeroAleatorio){
        exibirTextoNaTela('h1', 'Acertou');
        exibirTextoNaTela('p','Voce descobriu o numero secreto com ');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(chute > numeroAleatorio){
            exibirTextoNaTela('h1', 'O numero é menor');
            exibirTextoNaTela('p','Tente outra vez');
        }else{
            exibirTextoNaTela('h1', 'O numero é maior');
            exibirTextoNaTela('p','Tente outra vez');  
        }
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *10 + 1);
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
}