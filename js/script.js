document.getElementById('formDuvidas').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const formMessage = document.getElementById('formMessage');

  if (!nome || !email || !mensagem) {
    formMessage.textContent = "⚠️ Por favor, preencha todos os campos.";
    formMessage.style.color = 'orange';
    return;
  }

  // Simula envio (pode integrar API/Backend)
  formMessage.textContent = "✅ Obrigado, sua dúvida foi enviada com sucesso!";
  formMessage.style.color = 'lightgreen';

  this.reset();
});

const carouselInner = document.querySelector('#ajudaCarousel .carousel-inner');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const cardWidth = carouselInner.querySelector('.carousel-item').offsetWidth + 24; // 24 é gap + padding aproximado
let scrollPosition = 0;

prevBtn.addEventListener('click', () => {
  scrollPosition -= cardWidth;
  if (scrollPosition < 0) scrollPosition = 0;
  carouselInner.scrollTo({ left: scrollPosition, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  scrollPosition += cardWidth;
  const maxScroll = carouselInner.scrollWidth - carouselInner.clientWidth;
  if (scrollPosition > maxScroll) scrollPosition = maxScroll;
  carouselInner.scrollTo({ left: scrollPosition, behavior: 'smooth' });
});

