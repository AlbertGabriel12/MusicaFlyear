let botaoFaixa = document.getElementsByClassName('botaoComecar')[0]
let botaoDescricao = document.getElementsByClassName('botaoComecar2')[0]

//Botao Da Faixa
function aumentarBotaoFaixa(){
    botaoFaixa.style.width = 110
    botaoFaixa.style.height = 45
}

function diminuirBotaoFaixa(){
    botaoFaixa.style.width = 100
    botaoFaixa.style.height = 35
}

//Botao Da Descricao
function aumentarBotaoDescricao(){
    botaoDescricao.style.width = 110
    botaoDescricao.style.height = 45
}

function diminuirBotaoDescricao(){
    botaoDescricao.style.width = 100
    botaoDescricao.style.height = 35
}