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
        instrucoes_board.style.display = 'none'
        menu.style.display = 'flex'
    }   

// Traduções para instrução

    if(ingles == true) {
        titulo_instrucoes.innerHTML = 'Instructions'
        texto_instrucoes.innerHTML = 'You are in a job interview related to the programming area, Jhonson Recruiter will evaluate you with questions and skills tests, think carefully about which answer you will choose, because each of them has a certain weight in relation to the final decision.'
    } else {
        titulo_instrucoes.innerHTML = 'Instruções'
        texto_instrucoes.innerHTML = 'Você está em uma entrevista de emprego relacionada à área de programação. O recrutador Jhonson avaliará você com perguntas e testes de habilidades. Pense cuidadosamente sobre qual resposta você escolherá, pois cada uma delas tem um peso específico em relação à decisão final.'
    }
})

let fechar = document.querySelector('.fa-window-close')

fechar.addEventListener('click', function() {
    instrucoes_board.style.display = 'none';
    menu.style.display = 'flex'
})

// In-game 

let in_game = document.getElementById('escritorio-in-game')

start.addEventListener('click', function() {
    if(in_game.style.display == '') {
        in_game.style.display = 'flex'
        menu.style.display = 'none'
    } else {
        in_game.style.display = 'none'
        menu.style.display = 'flex'
    }
    pergunta1()
})

//Programando as perguntas e respostas

let pergunta = document.getElementById('pergunta')
let respostas = [
    document.getElementById('r1'),
    document.getElementById('r2'),
    document.getElementById('r3'), 
    document.getElementById('r4')
]

let tela_score_fase1 = document.getElementById('pontuacao-fase1')

let estrelas = [
    document.getElementById('star0'),
    document.getElementById('star1'),
    document.getElementById('star2'),
    document.getElementById('star3')
]

let nextfase = document.getElementById('next-fase')

let i = 1
let c = 0
let score = 50

function escolherpergunta(v) {   
    v.value = 1       
    arrayPerguntas[i]()
    arrayRespostas[c]()
    i++
    c++
    if(i == arrayPerguntas.length) {
        in_game.style.display = 'none'
        tela_score_fase1.style.display = 'block'
        if(ingles == false) {
            pontuacao.innerHTML = `Pontuação final: ${score}`
        } else {
            pontuacao.innerHTML = `Final Score: ${score}`
            txtfinal_fase1.innerHTML = `You have been selected for the next phase. Make sure you're prepared for the technical phase.` 
            nextfase.value = 'Next'
        }        
        if(score < 70) {
            estrelas[0].style.display = 'block'
            if(ingles == false) {
                txtfinal_fase1.innerHTML = 'Você não passou desta vez evolua suas soft skills e tente novamente!'
            } else {
                txtfinal_fase1.innerHTML = `If you didn't pass this time, improve your soft skills and try again!` 
            }
            
        } else if (score >= 70 && score < 80) {
            estrelas[1].style.display = 'block'
        } else if (score > 80 && score < 100) {
            estrelas[2].style.display = 'block'
        } else if (score == 100) {
            estrelas[3].style.display = 'block'
        }
    }
    reiniciarValue()
    mudarJhonson()
    let green = document.getElementById('green')
    green.style.width = `${score}%`
}

let r = 0

function reiniciarValue() {    
    for(let r in respostas) {
        respostas[r].value = 0
    }
}

let serio = document.getElementById('serio')
let amistoso = document.getElementById('amistoso')
let irritado = document.getElementById('irritado')

function mudarJhonson() {
    if(score < 50) {
        serio.style.display = 'none'
        irritado.style.display = 'block'
        amistoso.style.display = 'none'
    } else if (score >= 50 && score < 70) {
        serio.style.display = 'block'
        irritado.style.display = 'none'
        amistoso.style.display = 'none'
    } else {
        serio.style.display = 'none'
        irritado.style.display = 'none'
        amistoso.style.display = 'block'
    }
}

let resp1 = () => {
    if(respostas[0].value == 1) {
        score -= 3
    } else if (respostas[1].value == 1) {
        score -= 5
    } else if (respostas[2].value == 1) {
        score += 3
    } else if (respostas[3].value == 1) {
        score += 5
    } 
}

let resp2 = () => {
    if(respostas[0].value == 1) {
        score += 3
    } else if (respostas[1].value == 1) {
        score += 5
    } else if (respostas[2].value == 1) {
        score -= 3
    } else if (respostas[3].value == 1) {
        score -= 5
    }
}

let resp3 = () => {
    if(respostas[0].value == 1) {
        score += 5
    } else if (respostas[1].value == 1) {
        score += 3
    } else if (respostas[2].value == 1) {
        score -= 5
    } else if (respostas[3].value == 1) {
        score -= 3
    }
}

let resp4 = () => {
    if(respostas[0].value == 1) {
        score += 3
    } else if (respostas[1].value == 1) {
        score -= 3
    } else if (respostas[2].value == 1) {
        score += 5
    } else if (respostas[3].value == 1) {
        score -= 5
    }   
}

let resp5 = () => {
    if(respostas[0].value == 1) {
        score += 3
    } else if (respostas[1].value == 1) {
        score -= 5
    } else if (respostas[2].value == 1) {
        score += 5
    } else if (respostas[3].value == 1) {
        score -= 3
    }
}

let resp6 = () => {
    if(respostas[0].value == 1) {
        score += 5
    } else if (respostas[1].value == 1) {
        score += 3
    } else if (respostas[2].value == 1) {
        score -= 3
    } else if (respostas[3].value == 1) {
        score -= 5
    }
}

let resp7 = () => {
    if(respostas[0].value == 1) {
        score += 3
    } else if (respostas[1].value == 1) {
        score += 5
    } else if (respostas[2].value == 1) {
        score -= 5
    } else if (respostas[3].value == 1) {
        score -= 3
    }
}

let resp8 = () => {
    if(respostas[0].value == 1) {
        score -= 5
    } else if (respostas[1].value == 1) {
        score += 3
    } else if (respostas[2].value == 1) {
        score += 5
    } else if (respostas[3].value == 1) {
        score -= 3
    }
}

let resp9 = () => {
    if(respostas[0].value == 1) {
        score -= 5
    } else if (respostas[1].value == 1) {
        score -= 3
    } else if (respostas[2].value == 1) {
        score += 3
    } else if (respostas[3].value == 1) {
        score += 5
    }
}

let resp10 = () => {
    if(respostas[0].value == 1) {
        score -= 5
    } else if (respostas[1].value == 1) {
        score += 3
    } else if (respostas[2].value == 1) {
        score += 5
    } else if (respostas[3].value == 1) {
        score -= 3
    }
}

let pergunta1 = () => {
    if(ingles == false) {
        pergunta.innerHTML = 'Olá, meu nome é Jhonson recruiter, sou seu recrutador atual, você se sente preparado para esta vaga?'

        respostas[0].innerHTML = 'Na verdade só vim conhecer a empresa, gostei do seu bigode!'
        // -5
        respostas[1].innerHTML = 'Sim e em breve me tornarei o dono deste lugar!'
        // -3
        respostas[2].innerHTML = 'Não, mas estou disposto a aprender junto com a equipe.'
        // 3
        respostas[3].innerHTML = 'Sou oque você procura senhor Jhonson, estudo pra isso.'
        // 5
    } else {
        pergunta.innerHTML = 'Hello, my name is Jhonson recruiter, I am your current recruiter, do you feel you are prepared for this position?'

        respostas[0].innerHTML = `I actually just came to see the company, I liked your moustache!`

        respostas[1].innerHTML = `Yes, and soon I'll be the owner of this place!`

        respostas[2].innerHTML = `No, but I'm willing to learn together with the team`

        respostas[3].innerHTML = `I'm what you're looking for Mr. Jhonson, I study for it.`
    }        
}

let pergunta2 = () => {
    
    if(ingles == false) {
        pergunta.innerHTML = 'Você já trabalhou na área antes?'

        respostas[0].innerHTML = ' Já fiz alguns freelances e evoluí bastante com eles.'
        // 3
        respostas[1].innerHTML = ' Já sim, inclusive contribuí bastante com o projeto da empresa.'
        // 5
        respostas[2].innerHTML = 'Trabalhei sim, na padaria do meu pai.'
        // -3
        respostas[3].innerHTML = 'Claro, não estaria aqui se não tivesse experiência.'
        // -5
    } else {
        pergunta.innerHTML = 'Have you worked in the field before? '
        respostas[0].innerHTML = `I've done a few freelance jobs and I've evolved a lot with them.`

        respostas[1].innerHTML = `Yes, I even contributed a lot to the company's project.`

        respostas[2].innerHTML = `Yes, I worked in my father's bakery.`

        respostas[3].innerHTML = `Of course, I wouldn't be here if I didn't have experience.`
    }
}

let pergunta3 = () => {

    if(ingles == false) {
        pergunta.innerHTML = 'Você acha que é capaz de entregar os projetos dentro ou até mesmo antes do prazo estipulado?'

        respostas[0].innerHTML = ' Sim, eu me comprometo a isso 100%.'
        // 5
        respostas[1].innerHTML = ' Então, eu acredito que sim, mas vai depender das demandas.'
        // 3
        respostas[2].innerHTML = 'Não mesmo, acha que sou uma maquina senhor Jhonson?'
        // -5
        respostas[3].innerHTML = 'Me comprometo a tentar.'
        // -3
    } else {
        pergunta.innerHTML = 'Do you think you can deliver projects on time or even ahead of schedule?'

        respostas[0].innerHTML = `Yes, I'm committed to this 100%.`

        respostas[1].innerHTML = 'So I think so, but it will depend on the demands.'

        respostas[2].innerHTML = `Not really, do you think I'm a machine, Mr. Jhonson?`

        respostas[3].innerHTML = `I'm committed to trying.`
    }
}

let pergunta4 = () => {

    if(ingles == false) {
        pergunta.innerHTML = 'Como você se comunicaria com os contratantes dos nossos serviços sabendo que nem todos possuem conchecimento técnico sobre nosso ramo?'

        respostas[0].innerHTML = 'Sendo simpático e detalhista explicando cada ação planejada para o projeto.'
        // 3
        respostas[1].innerHTML = 'Extremamente técnico, preciso mostrar minha competência.'
        // -3
        respostas[2].innerHTML = 'Explico o projeto baseado no nível de conhecimento do cliente com a área.'
        // 5
        respostas[3].innerHTML = 'Sou programador! vocês não tem setor de marketing neste lugar?'
        // -5
    } else {
        pergunta.innerHTML = 'How would you communicate with the people who hire our services, knowing that not everyone has technical knowledge of our industry?'

        respostas[0].innerHTML = `He was friendly and detailed, explaining every action planned for the project.`

        respostas[1].innerHTML = 'Extremely technical, I need to show my competence.'

        respostas[2].innerHTML = `I explain the project based on the client's level of knowledge of the area.`

        respostas[3].innerHTML = `I'm a programmer! Don't you have a marketing department here?`
    }
}

let pergunta5 = () => {

    if(ingles == false) {
        pergunta.innerHTML = 'Se você fosse um animal,qual seria?'

        respostas[0].innerHTML = 'Um pássaro, gosto de ter liberdade e voar para onde eu quiser.'
        // 3
        respostas[1].innerHTML = 'Um leão, reinaria em qualquer lugar.'
        // -5
        respostas[2].innerHTML = 'Um cachorro, fiel e protetor.'
        // 5
        respostas[3].innerHTML = 'Uma lebre, mas não sei o porquê.'
        // -3
    } else {
        pergunta.innerHTML = 'If you were an animal, what would you be?'

        respostas[0].innerHTML = `A bird, I like having freedom and flying wherever I want.`

        respostas[1].innerHTML = `A lion would rule anywhere.`

        respostas[2].innerHTML = `A dog, faithful and protective.`

        respostas[3].innerHTML = `A hare, but I don't know why.`
    }
}

let pergunta6 = () => {

    if(ingles == false) {
        pergunta.innerHTML = 'Me fale sobre as empresas que você já trabalhou na vida, não necessariamente só de tecnologia.'

        respostas[0].innerHTML = `Foram bons lugares, construiram o profissional que sou hoje.`
        // 5
        respostas[1].innerHTML = 'Nunca trabalhei.'
        // 3
        respostas[2].innerHTML = 'Nenhuma supera a de vocês.'
        // -3
        respostas[3].innerHTML = 'Todas tinham defeitos, por isso estou aqui procurando uma nova.'
        // -5
    } else {
        pergunta.innerHTML = `Tell me about the companies you've worked for in your life, not necessarily just in technology.`

        respostas[0].innerHTML = `They were good places, they built the professional I am today.`

        respostas[1].innerHTML = `I've never worked.`

        respostas[2].innerHTML = `None can beat yours.`

        respostas[3].innerHTML = `They all had defects, so I'm here looking for a new one.`
    }
}

let pergunta7 = () => {

    if(ingles == false) {
        pergunta.innerHTML = 'Qual sua pretensão salarial?'

        respostas[0].innerHTML = `Eu me interessei pelo projeto, o salario é apenas um bônus.`
        // 3
        respostas[1].innerHTML = 'Um salário que esteja dentro da realidade da empresa e da minha também.'
        // 5
        respostas[2].innerHTML = 'Espero que sejam bem generosos, pois minha última empresa era.'
        // -5
        respostas[3].innerHTML = 'Não estou atualizado sobre o piso da salarial da área.'
        // -3
    } else {
        pergunta.innerHTML = 'What salary do you plan to receive?'

        respostas[0].innerHTML = `I'm interested in the project, the salary is just a bonus.`

        respostas[1].innerHTML = `A salary that is within the company's reality and mine too.`

        respostas[2].innerHTML = `I hope they're very generous, because my last company was.`

        respostas[3].innerHTML = `I'm not up to date on the salary floor in the area.`
    }
}

let pergunta8 = () => {

    if(ingles == false) {
        pergunta.innerHTML = 'Qual sua opinião sobre aprender novas habilidades ou tecnologias?'

        respostas[0].innerHTML = `Já sei tudo que preciso, não tenho nada a aprender.`
        // -5
        respostas[1].innerHTML = 'Não sinto necessidade mas se for obrigação eu faço.'
        // 3
        respostas[2].innerHTML = 'Aprender nunca é demais.'
        // 5
        respostas[3].innerHTML = 'Já foi dificil aprender as que eu sei Senhor Jhonson.'
        // -3
    } else {
        pergunta.innerHTML = 'What do you think about learning new skills or technologies?'

        respostas[0].innerHTML = `I already know everything I need, I have nothing to learn.`

        respostas[1].innerHTML = `I don't feel the need, but if I have to, I'll do it.`

        respostas[2].innerHTML = `You can never learn too much.`

        respostas[3].innerHTML = `It was hard enough learning the ones I know, Mr. Jhonson.`
    }
}

let pergunta9 = () => {

    if(ingles == false) {
        pergunta.innerHTML = 'Tem disponibilidade de horário?'

        respostas[0].innerHTML = `Somente de manhã, a noite eu faço Jiu Jitsu.`
        // -5
        respostas[1].innerHTML = 'Depende, só trabalho se for home office.'
        // -3
        respostas[2].innerHTML = 'Faço cursos de especialização, isso é prioridade pra mim!'
        // 3
        respostas[3].innerHTML = '100% disponivel para somar com o time.'
        // 5
    } else {
        pergunta.innerHTML = 'Do you have the time for working any moment?'

        respostas[0].innerHTML = `Only in the morning, at night I do Jiu Jitsu.`

        respostas[1].innerHTML = `It depends, I only work from home.`

        respostas[2].innerHTML = `I do specialization courses, that's a priority for me!`

        respostas[3].innerHTML = `100% available to join the team.`
    }
}

let pergunta10 = () => {

    if(ingles == false) {
        pergunta.innerHTML = 'Como você lida com pessoas em um ambiente de trabalho?'

        respostas[0].innerHTML = `Sou igual ao Batman, trabalho sozinho.`
        // -5
        respostas[1].innerHTML = 'Quanto mais gente melhor.'
        // 3
        respostas[2].innerHTML = 'Respeitando as diferenças e otimizando a produção.'
        // 5
        respostas[3].innerHTML = 'Com um bom líder, eu me dou bem.'
        // -3
    } else {
        pergunta.innerHTML = `How do you deal with people in a work environment?`

        respostas[0].innerHTML = `I'm like Batman, I work alone.`

        respostas[1].innerHTML = `The more people the better.`

        respostas[2].innerHTML = `Respecting differences and optimizing production.`

        respostas[3].innerHTML = `I get on well with a good leader.`
    }
}

function fimperguntas() {
    score = score
}

let arrayPerguntas = [
    pergunta1, pergunta2, pergunta3, 
    pergunta4, pergunta5, pergunta6, 
    pergunta7, pergunta8, pergunta9,
    pergunta10, fimperguntas
]

let arrayRespostas = [
    resp1, resp2, resp3,
    resp4, resp5, resp6,
    resp7, resp8, resp9,
    resp10
]







