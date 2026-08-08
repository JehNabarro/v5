// ui.js  UI consolidada: header (pilula + gaveta + idioma),
//        indicador de posicao, galeria da home e prefetch dos cards.
//
// Funde o antigo header.js do motor com a logica de galeria do design
// (support.js) e a semente do minimapa (indicador de posicao). Tudo
// escuta o MESMO estado unico via `navegacao:mudou`. Nenhuma navegacao
// propria aqui: cards, chips e menu chamam window.navegacao.navegar().

import { projetos } from './conteudo.js';

const t = (k) => window.i18n.t(k);

// Indice ativo da galeria (persiste entre re-render da home).
// Default = diagnostico (indice 3), como no design.
let ativo = Math.max(0, projetos.findIndex((p) => p.id === 'diagnostico'));

// Grupo de navegacao ativo por destino (um case marca "Projetos")
function grupoDe(id) {
   if (id === 'home') return 'home';       // marca "Inicio"
   if (id === 'sobre' || id === 'contato') return id;
   return 'projetos'; // projetos e todos os cases
}

// ------------------------------------------------------------
// HEADER: pilula de navegacao, gaveta mobile e toggle de idioma
// ------------------------------------------------------------
function alternarGaveta(forcarFechar) {
   const abrir = forcarFechar ? false : !document.body.classList.contains('gaveta-aberta');
   document.body.classList.toggle('gaveta-aberta', abrir);
   const botao = document.querySelector('.botao-menu');
   if (botao) {
      botao.setAttribute('aria-expanded', String(abrir));
      botao.setAttribute('aria-label', t(abrir ? 'header.fechar-menu' : 'header.abrir-menu'));
   }
}

function initHeader() {
   // Navegacao: qualquer elemento com data-destino (marca, pilula,
   // gaveta, cards e chips) passa pela mesma camera.
   document.addEventListener('click', (e) => {
      const alvo = e.target.closest('[data-destino]');
      if (!alvo) return;
      e.preventDefault();
      window.navegacao.navegar(alvo.getAttribute('data-destino'));
      alternarGaveta(true);
   });

   // Toggle de idioma (PT / EN)
   document.querySelectorAll('[data-idioma]').forEach((b) => {
      b.addEventListener('click', () => window.i18n.definirIdioma(b.getAttribute('data-idioma')));
   });

   // Gaveta mobile
   const botaoMenu = document.querySelector('.botao-menu');
   if (botaoMenu) botaoMenu.addEventListener('click', () => alternarGaveta());
   window.addEventListener('keydown', (e) => { if (e.key === 'Escape') alternarGaveta(true); });
   document.addEventListener('click', (e) => {
      if (!document.body.classList.contains('gaveta-aberta')) return;
      if (e.target.closest('.gaveta') || e.target.closest('.botao-menu')) return;
      alternarGaveta(true);
   });

   marcarIdioma();
   document.addEventListener('idioma:mudou', marcarIdioma);
}

function marcarIdioma() {
   document.querySelectorAll('[data-idioma]').forEach((b) => {
      b.classList.toggle('ativo', b.getAttribute('data-idioma') === window.i18n.idioma);
   });
}

// Marca a pilula E a gaveta da tela atual
function marcarNav(id) {
   const grupo = grupoDe(id);
   document.querySelectorAll('.nav-item, .gaveta-item').forEach((el) => {
      el.classList.toggle('ativo', el.getAttribute('data-destino') === grupo);
   });
}

// ------------------------------------------------------------
// INDICADOR DE POSICAO (semente do minimapa, substitui breadcrumb)
// Fixo no canto inferior esquerdo, alinhado a margem de 64px.
// ------------------------------------------------------------
function rotuloPosicao(id) {
   if (id === 'home') return t('pos.home');
   if (id === 'sobre') return t('pos.sobre');
   if (id === 'contato') return t('pos.contato');
   if (id === 'projetos') return t('pos.projetos');
   // Cases: "Projetos > <titulo do projeto>"
   return t('pos.projetos') + ' › ' + t('proj.' + id + '.titulo');
}

let idAtual = 'home';
function atualizarIndicador(id) {
   idAtual = id;
   const alvo = document.querySelector('.indicador-posicao .indicador-texto');
   if (alvo) alvo.textContent = rotuloPosicao(id);
}

// ------------------------------------------------------------
// GALERIA da home (carrossel de projetos)
// Reconstruida a cada montagem da home; o indice ativo persiste.
// ------------------------------------------------------------
const prefetched = new Set();
function prefetch(id) {
   if (prefetched.has(id)) return;
   prefetched.add(id);
   // Templates sao inline (sem rede), entao aquecemos a analise
   // clonando uma vez para um fragmento descartado. Ponto de extensao:
   // quando os cases tiverem imagens, e aqui que entra o preload real.
   const tpl = document.getElementById('tpl-' + id);
   if (tpl && tpl.content) tpl.content.cloneNode(true);
}

function initGaleria(seccao) {
   const galeria = seccao.querySelector('[data-galeria]');
   if (!galeria) return;

   const n = projetos.length;
   const idx = () => ((ativo % n) + n) % n;

   const mockup = galeria.querySelector('[data-mockup]');
   const centroMocks = galeria.querySelectorAll('[data-centro-mockup]');
   const centroMeta = galeria.querySelector('[data-centro-meta]');
   const centroTitulo = galeria.querySelector('[data-centro-titulo]');
   const centroResult = galeria.querySelector('[data-centro-result]');
   const infoTag = galeria.querySelector('[data-info-tag]');
   const prevMeta = galeria.querySelector('[data-prev-meta]');
   const prevTitulo = galeria.querySelector('[data-prev-titulo]');
   const nextMeta = galeria.querySelector('[data-next-meta]');
   const nextTitulo = galeria.querySelector('[data-next-titulo]');
   const dots = galeria.querySelector('[data-dots]');
   const btnPrev = galeria.querySelector('[data-prev]');
   const btnNext = galeria.querySelector('[data-next]');
   const btnAbrir = galeria.querySelector('[data-abrir]');
   const centro = galeria.querySelector('.galeria-centro');

   function render() {
      const i = idx();
      const p = projetos[i];
      const prev = projetos[(i - 1 + n) % n];
      const next = projetos[(i + 1) % n];

      // Variante do mockup (desktop / mobile / duo)
      if (mockup) mockup.setAttribute('data-tipo', p.mockup || 'desktop');
      // Tag de projeto pessoal: discreta, no info-card
      if (infoTag) infoTag.hidden = !p.pessoal;
      const titulo = t('proj.' + p.id + '.titulo');
      centroMocks.forEach((el) => { el.textContent = titulo; });
      if (centroMeta) centroMeta.textContent = t('proj.' + p.id + '.meta');
      if (centroTitulo) centroTitulo.textContent = t('proj.' + p.id + '.titulo');
      if (centroResult) centroResult.textContent = t('proj.' + p.id + '.result');
      if (prevMeta) prevMeta.textContent = t('proj.' + prev.id + '.meta');
      if (prevTitulo) prevTitulo.textContent = t('proj.' + prev.id + '.titulo');
      if (nextMeta) nextMeta.textContent = t('proj.' + next.id + '.meta');
      if (nextTitulo) nextTitulo.textContent = t('proj.' + next.id + '.titulo');

      if (dots) {
         dots.innerHTML = '';
         projetos.forEach((_, di) => {
            const b = document.createElement('button');
            b.type = 'button';
            b.className = 'galeria-dot' + (di === i ? ' ativo' : '');
            b.setAttribute('aria-label', t('proj.' + projetos[di].id + '.titulo'));
            b.addEventListener('click', () => { ativo = di; render(); });
            dots.appendChild(b);
         });
      }
   }

   btnPrev && btnPrev.addEventListener('click', () => { ativo = idx() - 1; render(); });
   btnNext && btnNext.addEventListener('click', () => { ativo = idx() + 1; render(); });

   // Card central = acesso direto de um clique ao case (Tarefa 6)
   const abrir = () => window.navegacao.navegar(projetos[idx()].id);
   btnAbrir && btnAbrir.addEventListener('click', abrir);
   // Prefetch no hover (desktop) e touchstart (mobile)
   const aoAproximar = () => prefetch(projetos[idx()].id);
   [btnAbrir, centro].forEach((el) => {
      if (!el) return;
      el.addEventListener('pointerenter', aoAproximar);
      el.addEventListener('touchstart', aoAproximar, { passive: true });
   });

   render();
   // Re-render ao trocar idioma enquanto a home esta montada
   seccao.addEventListener('idioma-home', render);
}

// ------------------------------------------------------------
// Inicializacao
// ------------------------------------------------------------
export function initUI() {
   initHeader();

   document.addEventListener('navegacao:mudou', (e) => {
      const { id, seccao, tipo } = e.detail;
      marcarNav(id);
      atualizarIndicador(id);
      document.body.setAttribute('data-tela', id);
      document.body.classList.toggle('tela-interna', tipo === 'interna');
      if (id === 'home' && seccao) initGaleria(seccao);
   });

   // Indicador e galeria acompanham a troca de idioma
   document.addEventListener('idioma:mudou', () => {
      atualizarIndicador(idAtual);
      const home = document.querySelector('.pagina-home');
      if (home) home.dispatchEvent(new CustomEvent('idioma-home'));
   });
}
