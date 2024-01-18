let titulo = document.querySelector('h1');
titulo.innerHTML='Hora do Desafio';

let tituloPagina = document.querySelector('title');
tituloPagina.innerHTML = "JS Game II, Praicando";

function verificarChute(){
    console.log('O botão foi clicado');
};

function alertar(){
    alert('Eu amo Js')
};

function cidade(){
    let cidade = prompt("Qual sua Cidade : ")
    alert(`Eu estive em ${cidade} e lembrei de você`)
};

function somar(){
    let somar1 = prompt("Digite primeiro valor: ");
    let somar1Number = Number(somar1)
    let somar2 = prompt("Digite segundo valor: ");
    let somar2Number = Number(somar2)
    let resultado = somar1Number + somar2Number ;
    alert(`O resultado é: ${resultado}`)
};