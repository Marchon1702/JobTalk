// Tela de Aviso

let aviso = document.getElementById('aviso')
let arrow_next = document.getElementById('next')

arrow_next.addEventListener('click', function() {
    aviso.style.display = 'none'
    menu.style.display = 'flex'
})

// Tela de Menu

let menu = document.getElementById('menu')
let instrucoes = document.getElementById('inst')
let start = document.getElementById('start')
let idioma = document.getElementById('idioma')
let ingles = false

idioma.addEventListener('click', function() {
    if(ingles == false) {
        ingles = true
        instrucoes.innerHTML = 'Instructions'
        start.innerHTML = 'Start Game'
        idioma.innerHTML = 'Portuguese: LIG/DES'
    } else {
        ingles = false
        instrucoes.innerHTML = 'Instruções'
        start.innerHTML = 'Começar'
        idioma.innerHTML = 'Inglês: ON/OFF'
    }
})

// Quadro de instruções 

let instrucoes_board = document.getElementById('quadro-de-instrucoes')
let titulo_instrucoes = document.getElementById('title-inst')
let texto_instrucoes = document.getElementById('text-inst')

instrucoes.addEventListener('click', function() {
    if (instrucoes_board.style.display == 'none') {
        instrucoes_board.style.display = 'block'
        menu.style.display = 'none'
    } else {
        instrucoes_board.style.display = 'none';
        menu.style.display = 'flex'
    }   

// Traduções para instrução

    if(ingles == true) {
        titulo_instrucoes.innerHTML = 'Instructions'
        texto_instrucoes.innerHTML = 'You are in a job interview related to the programming area, Jhonson Recruiter will evaluate you with questions and skills tests, think carefully about which answer you will choose, because each of them has a certain weight in relation to the final decision.'
    } else {
        titulo_instrucoes.innerHTML = 'Instruções';
        texto_instrucoes.innerHTML = 'Você está em uma entrevista de emprego relacionada à área de programação. O recrutador Jhonson avaliará você com perguntas e testes de habilidades. Pense cuidadosamente sobre qual resposta você escolherá, pois cada uma delas tem um peso específico em relação à decisão final.'
    }
})

let fechar = document.querySelector('.fa-window-close')

fechar.addEventListener('click', function() {
    instrucoes_board.style.display = 'none';
    menu.style.display = 'flex'
})
