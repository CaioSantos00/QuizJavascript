let mostraPergunta = document.getElementById('mostraPergunta')
let mostraSolucao = document.getElementById('mostraSolucao')
let divProxima = document.getElementById('divProxima')
let btnPro = document.getElementById('btnProximo')
let divButtons = document.getElementById('divButtons')
let divInfo = document.getElementById('divInfo')
let msg = document.getElementById('msg')
let contador = 0
let arrayPergunta = [
    {
        pergunta: ' O Monte Everest é a montanha mais alta do mundo.',
        resposta: true
    },
    {
        pergunta: 'O rio Amazonas é o rio mais longo do mundo.',
        resposta: true
    },
    {
        pergunta: 'A Grande Muralha da China pode ser vista do espaço.',
        resposta: false
    },
    {
        pergunta: 'O deserto do Saara é o maior deserto do mundo.',
        resposta: true
    },
    {
        pergunta: 'A Estátua da Liberdade foi um presente da França para os Estados Unidos.',
        resposta: true
    },
]

mostraPergunta.innerText = arrayPergunta[contador].pergunta
function reiniciar() {
    divInfo.style.display = 'none'
    mostraPergunta.style.display = 'block'
    divButtons.style.display = 'grid'
    contador = 0;
    mostraPergunta.innerText = arrayPergunta[contador].pergunta;
}
function verificaResposta(resp) {
    if (arrayPergunta[contador].resposta === resp) {
        mostraSolucao.innerText = 'Você acertou'
        btnPro.style.display = 'block'
        btnPro.innerText = 'Próxima'
        btnPro.onclick = function proximaQuest() {
            if (arrayPergunta[++contador]) {
            mostraPergunta.innerText = arrayPergunta[contador].pergunta
            mostraSolucao.innerText = ''
            btnPro.style.display = 'none'                
            } else {
                mostraPergunta.style.display = 'none'
                mostraSolucao.innerText = ''
                btnPro.style.display = 'none'
                divButtons.style.display = 'none'
                msg.innerText = 'Você Finalizou'
                divInfo.style.display = 'block'
            }
        }
    } else { 
        mostraPergunta.style.display = 'none'
                mostraSolucao.innerText = ''
                btnPro.style.display = 'none'
                divButtons.style.display = 'none'
                msg.innerText = 'Você errou'
                divInfo.style.display = 'block'
        console.log('ERROU')
    }
}