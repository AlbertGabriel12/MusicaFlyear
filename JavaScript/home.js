//apenas corrigindo um bug da faixa vertical
let faixaVertical = document.getElementsByClassName('faixaVertical')[0]
faixaVertical.style.height = screen.height
//---------------------------------------------

/*Variavel que pega o elemento blocoDeMusica*/
let blocoDeMusicas = document.getElementsByClassName('blocoDeMusica')

let esquerda = 350
let cima = 0
let zero = 0

let proximoAudio = 0

let playerMusica = document.getElementsByTagName('audio')

//VARIAVEL QUE RECEBE A URL DO AUDIO
let urlMusica

//VARIAVEL QUE RECEBE O NOME DA MUSICA
let nomeMusica

//Variavel que recebe toda a area das musica
let areaDasMusicas = document.getElementsByClassName('areaDasMusicas')[0]

//variavel que recebe o botao de deletar a ultima musica
let botaoDeletarUltimaMusica = document.getElementById('removerUltimaMusica')

/* Essa funçao organizar todos os blocos de musica*/
function organizarBlocosMusicas(){
    cima += 250
    
    for (let x = 0; x < blocoDeMusicas.length; x++){
        //PAR
        if (x %2 == 0 && x !== 0){
            blocoDeMusicas[blocoDeMusicas.length - 1].style.top = (cima - 250)
            blocoDeMusicas[blocoDeMusicas.length - 1].style.left = zero
        }
            
        
        //IMPAR
        if(x %2 != 0 && x !== 0){
            blocoDeMusicas[blocoDeMusicas.length - 1].style.top = (cima - 250)
            blocoDeMusicas[blocoDeMusicas.length - 1].style.left = esquerda
        }

    }

    
    //SISTEMA DE REPRODUZIR A MUSICA LOGO QUANDO A OUTRA ACABA
    playerMusica[playerMusica.length -1].addEventListener('ended', function(){
        proximoAudio += 1
        playerMusica[proximoAudio].play()
    })
    
}

//SISTEMA QUE REMOVE A ULTIMA MUSICA
botaoDeletarUltimaMusica.addEventListener('click', function(){
    if (areaDasMusicas.childElementCount > 0){
        areaDasMusicas.lastChild.remove()
        cima -= 250

    }
})


/* Sim essa funçao cria os blocos de musica
e depois de criar eles, pegam ele e coloca como filho
do elemento 'areaDasMusicas'*/
function criarBlocoMusica(){
    let div = document.createElement('div')
    let divTitulo = document.createElement('div')
    let label = document.createElement('label')
    let img = document.createElement('img')
    
    let audioControler = document.createElement('audio')
    let sourcer = document.createElement('source')
    
    
    //Colocadno atributos em cada elemento
    div.setAttribute('class', 'blocoDeMusica')
    divTitulo.setAttribute('class', 'tituloDasMusicas')
    label.innerHTML = nomeMusica
    img.src = '../Img/SimboloDaCaixaDasMusicas.png'
    img.id = 'simboloCaixaMusica'
    img.width = 70
    audioControler.setAttribute('controls', '')
    sourcer.src = urlMusica
    
    
    //colocando tudo na div
    div.appendChild(divTitulo)
    divTitulo.appendChild(label)
    divTitulo.appendChild(img)
    
    div.appendChild(audioControler)
    audioControler.appendChild(sourcer)
    
    document.getElementsByClassName('areaDasMusicas')[0].appendChild(div)

    organizarBlocosMusicas()
}


//Variavel que pega o elemento input file
let inputFileAudio = document.getElementById('inputFile')

inputFileAudio.addEventListener('change', colocaUrlDoAudio)

/*Esse funçao é a principal sem ela todo o sistema quebra
enfim essa funçao pega o inputfile e de lá e vai pegar o caminho do arquivo
criptografado e vai colocar essa URL criptografada em uma variavel para depois
colocar essa informaçao no SRC do audio player*/
function colocaUrlDoAudio(){
    let reader = new FileReader()

    reader.onload = function(event){
        urlMusica = event.target.result
        mudarNomeAddMusicaPronto()
    }

    reader.readAsDataURL(inputFileAudio.files[0])
}

//Variavel que recebe o input que recebe o nome da musica
let inputNomeMusica = document.getElementById('inputNomeMusica')
let botaoAdicionarMusica = document.getElementById('adicionarMusica')

//Pegando o evento de clique do botao adicionar musica
botaoAdicionarMusica.addEventListener('click', colocarNomeNaMusica)

/*Essa funçao pega o valor digitado no campo de colocar nome da musica
e guarda em uma variavel para colocar no atributo do nome*/
function colocarNomeNaMusica(){
    nomeMusica = inputNomeMusica.value
    mudarNomeAddMusicaNormal()
    criarBlocoMusica()

    //Excluindo o texto dentro do input
    document.getElementById('inputNomeMusica').value = ''
}

//Essa funçao muda o nome do texto 'Add Musica' para 'PRONTO'
let nomeAddMusica = document.getElementById('botaoAddMusicas')
function mudarNomeAddMusicaPronto(){
    nomeAddMusica.innerHTML = 'PRONTO'
}

//Essa funçao volta ao normal o nome do texto 'Add Musica'
function mudarNomeAddMusicaNormal(){
    nomeAddMusica.innerHTML = 'Add Musica'
}