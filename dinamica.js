/* ============================================================
   🖊️  EDITA AQUI — a vossa informação
   ============================================================ */

// Nomes e frase do topo
const NOME_1 = "Alexandre";
const NOME_2 = "Lucrécia";
document.getElementById('heroSub').textContent =
  `${NOME_1} & ${NOME_2} — de todas as estrelas, fomos parar à mesma constelação.`;

// Data em que começaram a namorar (ano, mês [0-11], dia)
const DATA_INICIO = new Date(2024, 8, 17); // exemplo: 7 de agosto de 2024

// Os vossos momentos, por ordem cronológica
const MOMENTOS = [
  { data: "2015 - 2022", titulo: "O primeiro encontro", texto: "Vi-te pela primeira vez na escolinha, sentada sozinha com uma pasta vermelha se bem me lembro com o lindo cabelo que sempre tiveste... anos passaram-se e apararentemente gostavas de mim e eu nunca notei... em 2021 ou 2022 começamos a flertar e depois pensaste que desisti enquanto te deixei conhecer outras pessoas só para não parecer possessivo..." },

  { data: "em outono de 2024", titulo: "Os primordios da nossa trilha", texto: "Começamos a namorar, ambos fizemos parte daqueles que foram um dos momentos importantes para nossa carreira estudantil e alavancagem profissional, marcamos estes dias com a presença de cada um e é evidente que foi memóravel por vários motivos." },

  { data: "em primavera de 2025", titulo: "Fases de uma caminhada", texto: "Dizem que durante uma caminhada é normal que haja dificuldades e que as mesmas quando superadas a história torna-se memóravel, aconteceu connosco os problemas foram superados, passaste a tua primeira noite em minha casa, conheceste meus pais e claro depois daí a cena tornou-se mais séria. " },

  { data: "2026", titulo: "Amadurecimento", texto: "Presumo que neste ano ambos tornaram-se mais adultos em coisas que de alguma forma infantilizamos como a responsabilidade afetiva, mas de lembrar que tudo foi um processo e hoje estamos aqui felizes um com outro planeando o futuro juntos e que esperamos que assim aconteça." },

  { data: "hoje", titulo: "Dois anos depois", texto: "E continuamos a escrever esta história, juntos." },
];

// Fotos — coloca os ficheiros dentro de assets/photos/ com estes nomes
// (ou muda os nomes aqui em baixo para os teus ficheiros)
const FOTOS = [
  { src: "assets/photos/1.jpeg", legenda: "beijinho" },
  { src: "assets/photos/2.jpeg", legenda: "dia que a minha sogra fez foto COMIGO" },
  { src: "assets/photos/3.jpeg", legenda: "vc rindo atoa" },
  { src: "assets/photos/4.jpeg", legenda: "francamente me deixei levar pela tua vibe" },
  { src: "assets/photos/5.jpeg", legenda: "dia dos meus 18v" },
  { src: "assets/photos/6.jpeg", legenda: "a te achares um pouco com plantas" },
  { src: "assets/photos/7.jpeg", legenda: "dia da tua entrega de faixas" },
  { src: "assets/photos/8.jpeg", legenda: "dia que meteste bolo no saco da zara" },
  { src: "assets/photos/9.jpeg", legenda: "n sei quem te mandou subir nas minhas costas" },
  { src: "assets/photos/11.jpeg", legenda: "grande mbila sim" },
  { src: "assets/photos/17.jpeg", legenda: "estás mto apaixonada minha nengue" },
  { src: "assets/photos/18.jpeg", legenda: "fã" },
  { src: "assets/photos/10.jpeg", legenda: "dia de princesa" },
  { src: "assets/photos/12.jpeg", legenda: "..." },
  { src: "assets/photos/13.jpeg", legenda: "experimentando o drip" },
  { src: "assets/photos/14.jpeg", legenda: "experimentando o drip" },
  { src: "assets/photos/15.jpeg", legenda: "passagem de ano 2025 - 2026" },
  { src: "assets/photos/16.jpeg", legenda: "chata que és" },
  { src: "assets/photos/19.jpeg", legenda: "bj de respeito" },
  { src: "assets/photos/20.jpeg", legenda: "boa foto sim" },
  { src: "assets/photos/21.jpeg", legenda: "primeiro banho de verdade da tua vida" },
  { src: "assets/photos/22.jpeg", legenda: "tua felicidade é a comida e depois eu" },
  { src: "assets/photos/23.jpeg", legenda: "dia de cinema" },
  { src: "assets/photos/24.jpeg", legenda: "mordeste o meu rabo, fuck" },
  { src: "assets/photos/25.jpeg", legenda: "quando fumas" },
  { src: "assets/photos/26.jpeg", legenda: "membro da conjugx" },
  { src: "assets/photos/28.jpeg", legenda: "estavas linda, minha princesa" },
  { src: "assets/photos/29.jpeg", legenda: "escravo teu que eu sou" },
  { src: "assets/photos/30.jpeg", legenda: "uma fotozinha" },
  { src: "assets/photos/31.jpeg", legenda: "pequena sereia" },
  { src: "assets/photos/32.jpeg", legenda: "um mergulho na água de cuspe e xixi" },
  { src: "assets/photos/33.jpeg", legenda: "dia super aleatório para mim e memóravel para vc" },
  { src: "assets/photos/34.jpeg", legenda: "primeiro comida e depois eu" },
  { src: "assets/photos/35.jpeg", legenda: "dormes atoa" },
  { src: "assets/photos/36.jpeg", legenda: "primeiro anel, aguarde os outros 2" },
];

// Vídeos — coloca os ficheiros dentro de assets/videos/
const VIDEOS = [
  { src: "assets/videos/video1.mp4", legenda: "Deguste de memórias saudáveis para mente." },
];

// A carta — cada string do array é um parágrafo
const CARTA = [
  "Hoje celebramos dois anos de namoro, dois anos desde que decidimos caminhar juntos e transformar dois caminhos diferentes em uma história que passou a ser nossa. Quando olho para trás, percebo que vivemos muito mais do que apenas dias, meses e datas. Vivemos momentos que guardarei para sempre: os nossos sorrisos, as conversas intermináveis, os abraços, as brincadeiras, os momentos difíceis e, principalmente, a forma como fomos aprendendo a conhecer, compreender e amar um ao outro.Nem tudo foi perfeito. Tivemos diferenças, dificuldades e momentos em que talvez não soubéssemos exatamente como lidar com aquilo que sentíamos. Mas, mesmo assim, continuámos. E é isso que torna a nossa história tão especial para mim: não escolhemos apenas ficar juntos nos dias bons; aprendemos também a permanecer quando as coisas ficaram difíceis.",

  "Ao longo destes dois anos, conheci partes de ti que fizeram crescer ainda mais o meu amor. Aprendi que amar alguém não é apenas dizer “eu te amo”, mas também saber ouvir, compreender, respeitar, perdoar, cuidar e escolher essa pessoa novamente todos os dias. Quero agradecer-te por cada momento que partilhaste comigo. Obrigado pelos sorrisos que colocaste no meu rosto, pelo carinho, pela companhia e por todas as memórias que construímos juntos. Se pudesse voltar ao dia em que tudo começou, eu escolheria viver esta história contigo novamente. E se hoje temos dois anos de história, espero que este seja apenas o começo de muitos outros capítulos. Quero continuar a construir contigo, conhecer novos lugares, viver novas experiências, tirar muitas fotografias, criar novas memórias e, daqui a muitos anos, olhar para trás e dizer:",

  "Nós conseguimos. Continuámos a escolher um ao outro.”Meu amor, talvez eu nem sempre consiga encontrar as palavras certas para explicar tudo o que sinto, mas existe algo que quero que nunca esqueças: Eu amo-te. ❤️ Amo a pessoa que és, amo quem somos quando estamos juntos e amo a história que estamos a construir. Feliz 2.º aniversário de namoro, meu amor. Que venham muitos outros anos, muitos sonhos realizados, muitos abraços, muitos sorrisos e muitos momentos que ainda nem imaginamos. Dois anos já passaram… e eu ainda quero viver uma vida inteira contigo. ", 

  "Alexandre Malale.❤️",
  

];

/* ============================================================
   A partir daqui é só o motor do site — não precisas de mexer.
   ============================================================ */

// --- Céu estrelado ---
(function stars(){
  const sky = document.getElementById('sky');
  const n = window.innerWidth < 600 ? 70 : 140;
  for(let i=0;i<n;i++){
    const s = document.createElement('div');
    s.className = 'star';
    const size = (Math.random()*2 + 1).toFixed(1);
    s.style.width = size+'px';
    s.style.height = size+'px';
    s.style.top = (Math.random()*100)+'vh';
    s.style.left = (Math.random()*100)+'vw';
    s.style.animationDuration = (Math.random()*3+2).toFixed(1)+'s';
    s.style.animationDelay = (Math.random()*4).toFixed(1)+'s';
    sky.appendChild(s);
  }
})();

// --- Contador ---
function atualizarContador(){
  const agora = new Date();
  let diff = Math.max(0, agora - DATA_INICIO) / 1000; // segundos

  const anos = Math.floor(diff / (365.25*24*3600));
  diff -= anos * 365.25*24*3600;
  const meses = Math.floor(diff / (30.44*24*3600));
  diff -= meses * 30.44*24*3600;
  const dias = Math.floor(diff / (24*3600));
  diff -= dias * 24*3600;
  const horas = Math.floor(diff / 3600);
  diff -= horas * 3600;
  const min = Math.floor(diff / 60);
  const seg = Math.floor(diff - min*60);

  document.getElementById('cAnos').textContent = anos;
  document.getElementById('cMeses').textContent = meses;
  document.getElementById('cDias').textContent = dias;
  document.getElementById('cHoras').textContent = String(horas).padStart(2,'0');
  document.getElementById('cMin').textContent = String(min).padStart(2,'0');
  document.getElementById('cSeg').textContent = String(seg).padStart(2,'0');
}
atualizarContador();
setInterval(atualizarContador, 1000);

// --- Timeline ---
const momentosEl = document.getElementById('momentos');
MOMENTOS.forEach(m => {
  const div = document.createElement('div');
  div.className = 'momento';
  div.innerHTML = `
    <span class="dot"></span>
    <p class="data">${m.data}</p>
    <h3>${m.titulo}</h3>
    <p>${m.texto}</p>
  `;
  momentosEl.appendChild(div);
});

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.3 });
document.querySelectorAll('.momento').forEach(el => observer.observe(el));

// Linha dourada que "desenha" a constelação ao rolar
const timelineSection = document.querySelector('.timeline');
const progressLine = document.getElementById('progressLine');
function atualizarLinha(){
  const rect = timelineSection.getBoundingClientRect();
  const alturaTotal = rect.height;
  const visivel = Math.min(Math.max(window.innerHeight*0.85 - rect.top, 0), alturaTotal);
  progressLine.style.height = visivel + 'px';
}
window.addEventListener('scroll', atualizarLinha);
window.addEventListener('resize', atualizarLinha);
atualizarLinha();

// --- Galeria ---
const PLACEHOLDER_IMG = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
    <rect width="100%" height="100%" fill="#d8cfc0"/>
    <text x="50%" y="48%" font-family="Georgia, serif" font-size="20" fill="#8a7f6a" text-anchor="middle">coloca a tua foto</text>
    <text x="50%" y="58%" font-family="Georgia, serif" font-size="14" fill="#a89d87" text-anchor="middle">assets/photos/</text>
  </svg>
`);

const galeriaGrid = document.getElementById('galeriaGrid');
FOTOS.forEach(f => {
  const div = document.createElement('div');
  div.className = 'polaroid';
  div.tabIndex = 0;
  div.innerHTML = `<img src="${f.src}" alt="${f.legenda || 'foto do casal'}" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG}';">
    ${f.legenda ? `<div class="cap">${f.legenda}</div>` : ''}`;
  const abrir = () => openLightbox(div.querySelector('img').src);
  div.addEventListener('click', abrir);
  div.addEventListener('keydown', e => { if(e.key === 'Enter') abrir(); });
  galeriaGrid.appendChild(div);
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
function openLightbox(src){ lightboxImg.src = src; lightbox.classList.add('open'); }
function closeLightbox(){ lightbox.classList.remove('open'); }
lightbox.addEventListener('click', e => { if(e.target === lightbox) closeLightbox(); });
document.querySelector('#lightbox .close').addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeLightbox(); });

// --- Vídeos ---
const videosGrid = document.getElementById('videosGrid');
VIDEOS.forEach(v => {
  const div = document.createElement('div');
  div.className = 'video-card';
  div.innerHTML = `
    <video controls preload="metadata" src="${v.src}"></video>
    ${v.legenda ? `<div class="cap">${v.legenda}</div>` : ''}
  `;
  videosGrid.appendChild(div);
});

// --- Carta ---
const cartaTexto = document.getElementById('cartaTexto');
cartaTexto.innerHTML = CARTA.map(p => `<p>${p}</p>`).join('') +
  `<p class="assinatura">${NOME_1} ♥ ${NOME_2}</p>`;

const btnAbrir = document.getElementById('abrirCarta');
btnAbrir.addEventListener('click', () => {
  const aberta = cartaTexto.classList.toggle('aberta');
  btnAbrir.textContent = aberta ? 'Fechar a carta' : 'Abrir a carta';
});

// --- Rodapé ---
document.getElementById('footerData').textContent =
  `${NOME_1} & ${NOME_2} · desde ${DATA_INICIO.toLocaleDateString('pt-PT', { day:'numeric', month:'long', year:'numeric' })}`;