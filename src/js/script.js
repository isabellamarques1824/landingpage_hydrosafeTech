

// menu hamburguer

const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });


  const sections = document.querySelectorAll('section');
const menuLinks = document.querySelectorAll('nav#menu a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // Ajuste margem topo
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  menuLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});





// slideshow

document.addEventListener('DOMContentLoaded', () => {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let timer;

  function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';
  }

  function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
  }

  function startTimer() {
    timer = setInterval(() => {
      nextSlide();
    }, 5000);
  }

  function resetTimer() {
    clearInterval(timer);
    startTimer();
  }

  // Inicializa
  showSlide(slideIndex);
  startTimer();

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetTimer();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetTimer();
  });
});

//quiz 

const quizData = [
  {
    question: "O que é uma enchente?",
    options: [
      "Falta de água potável",
      "Acúmulo excessivo de água em áreas normalmente secas",
      "Queda de energia em grandes cidades",
      "Tempestade de areia"
    ],
    answer: "Acúmulo excessivo de água em áreas normalmente secas"
  },
  {
    question: "Qual das opções NÃO é uma causa comum de enchentes?",
    options: [
      "Chuvas intensas",
      "Desmatamento",
      "Entupimento de bueiros",
      "Uso de energia solar"
    ],
    answer: "Uso de energia solar"
  },
  {
    question: "Como o desmatamento contribui para as enchentes?",
    options: [
      "Diminui a poluição",
      "Aumenta a umidade do ar",
      "Reduz a infiltração de água no solo",
      "Fortalece os rios"
    ],
    answer: "Reduz a infiltração de água no solo"
  },
  {
    question: "O que fazer em caso de enchente?",
    options: [
      "Ficar em casa no porão",
      "Atravessar a rua alagada a pé",
      "Buscar abrigo em locais altos e seguros",
      "Ligar aparelhos eletrônicos perto da água"
    ],
    answer: "Buscar abrigo em locais altos e seguros"
  },
  {
    question: "Qual desses é um método de prevenção contra enchentes?",
    options: [
      "Jogar lixo nas ruas",
      "Construir em áreas de risco",
      "Manter bueiros limpos",
      "Cortar árvores urbanas"
    ],
    answer: "Manter bueiros limpos"
  },
  {
    question: "Por que áreas urbanas são mais afetadas por enchentes?",
    options: [
      "Têm menos rios",
      "Têm mais árvores",
      "Impermeabilização do solo",
      "Mais pessoas nadam nos rios"
    ],
    answer: "Impermeabilização do solo"
  },
  {
    question: "O que são bacias de retenção?",
    options: [
      "Espaços para armazenar água da chuva",
      "Locais para coleta de lixo reciclável",
      "Áreas de lazer",
      "Depósitos de produtos químicos"
    ],
    answer: "Espaços para armazenar água da chuva"
  },
  {
    question: "Qual desses é um risco causado por enchentes?",
    options: [
      "Aumento da biodiversidade",
      "Contaminação da água",
      "Melhoria no transporte público",
      "Desenvolvimento econômico"
    ],
    answer: "Contaminação da água"
  },
  {
    question: "Tecnologias como sensores e monitoramento climático ajudam a:",
    options: [
      "Aumentar a intensidade das chuvas",
      "Prever e reduzir impactos de enchentes",
      "Construir mais casas em áreas de risco",
      "Destruir bueiros"
    ],
    answer: "Prever e reduzir impactos de enchentes"
  },
  {
    question: "Qual o papel da HydroSafe Tech?",
    options: [
      "Causar enchentes controladas",
      "Criar conteúdo para redes sociais",
      "Desenvolver soluções contra enchentes",
      "Produzir jogos e quizzes"
    ],
    answer: "Desenvolver soluções contra enchentes"
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const q = quizData[current];
  questionEl.textContent = `Pergunta ${current + 1}: ${q.question}`;
  answersEl.innerHTML = "";
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    answersEl.appendChild(btn);
  });
  nextBtn.classList.add("hidden");
}

function checkAnswer(selected) {
  const correct = quizData[current].answer;
  if (selected === correct) {
    score++;
  }
  Array.from(answersEl.children).forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) btn.style.background = "#4caf50";
    else btn.style.background = "#f44336";
  });
  nextBtn.classList.remove("hidden");
}

nextBtn.onclick = () => {
  current++;
  if (current < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
};

function showResults() {
  questionEl.textContent = `Você acertou ${score} de ${quizData.length} perguntas! 💧`;
  answersEl.innerHTML = "";
  nextBtn.classList.add("hidden");
}

loadQuestion();

// contato 

document.getElementById('form-contato').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const status = document.getElementById('mensagem-status');

  if (!nome || !email || !mensagem) {
    status.textContent = 'Preencha todos os campos.';
    status.style.color = 'red';
    return;
  }

  status.textContent = 'Mensagem enviada!';
  status.style.color = 'green';
  this.reset();
});


// mudar tema 

function setTheme(theme) {
    if(theme === 'padrao') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }
