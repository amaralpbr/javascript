let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function exibirMensagemNoConsole(){
    console.log("O botão foi clicado");
}

function exibirAlerta(){
    alert("Eu amo JS");
}

function exibirPrompt(){
    let cidadeEscolhida = prompt("Diga o nome de uma cidade do Brasil");
    alert(`Estive em ${cidadeEscolhida} e lembrei de você`);
}

function somandoDoisNumeros(){
    let primeiroNumero = parseInt(prompt("Escolha um número"));
    let segundoNumero = parseInt(prompt("Escolha outro número"));

    let soma = primeiroNumero + segundoNumero;

    alert (`O resultado da soma dos números escolhidos é ${soma}`);
}