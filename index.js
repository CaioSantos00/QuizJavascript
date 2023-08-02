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
        pergunta: 'É importante economizar dinheiro.',
        resposta: true
    },
    {
        pergunta: 'Gastar todo o dinheiro que você ganha é uma boa ideia.',
        resposta: false
    },
    {
        pergunta: 'É melhor guardar o dinheiro em casa do que em um banco.',
        resposta: false
    },
    {
        pergunta: ' É importante comparar preços antes de comprar algo. ',
        resposta: true
    },
    {
        pergunta: 'É bom emprestar dinheiro para amigos sempre que eles pedem.',
        resposta: false
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
        mostraSolucao.innerText = 'Você acertou!!'
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