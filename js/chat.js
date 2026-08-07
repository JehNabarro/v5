// chat.js  Chat Jessy como HUD preso a tela (nunca dentro do fluxo)
//
// Contrato desta fase:
// - O chat vive SEMPRE no <body> (position:fixed), acima do mundo que
//   se move. Nao e reparentado (nada de GSAP Flip, que causa saltos de
//   layout); a troca home <-> interna e um gsap.to direto de opacidade
//   e escala entre duas posicoes conhecidas resolvidas por CSS.
// - Nao tem navegacao propria: intencoes (chips e digitacao livre)
//   resolvem um no do roteiro e chamam window.navegacao.navegar().
// - Respostas ainda placeholder (fase futura cobre as intencoes reais).

import { chat as roteiro, palavrasChave } from './conteudo.js';

let raiz = null;
const reduz = window.matchMedia('(prefers-reduced-motion: reduce)');

function no(id) {
   const dic = roteiro[window.i18n.idioma] || roteiro.pt;
   return dic[id] || roteiro.pt[id];
}

// Resolve uma intencao: navega se o no tiver destino
function acionar(id) {
   const dados = no(id) || no('desconhecido');
   if (dados && dados.destino) window.navegacao.navegar(dados.destino);
}

function construir() {
   raiz.className = 'chat chat--home glass';
   raiz.innerHTML = `
      <div class="chat-intro">
         <span class="chat-avatar" data-i18n="chat.avatar">JN</span>
         <span class="chat-intro-texto" data-i18n="chat.intro"></span>
      </div>
      <form class="chat-form">
         <input class="chat-input" type="text" autocomplete="off"
            data-i18n-attr="placeholder:chat.placeholder; aria-label:chat.placeholder" />
         <button class="chat-enviar" type="submit" data-i18n-attr="aria-label:chat.enviar">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M12 6l6 6-6 6" fill="none"
               stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
         </button>
      </form>
      <div class="chat-chips">
         <button type="button" class="chat-chip" data-no="projetos" data-i18n="chat.chip-projetos"></button>
         <button type="button" class="chat-chip" data-no="sobre" data-i18n="chat.chip-sobre"></button>
         <button type="button" class="chat-chip" data-no="contato" data-i18n="chat.chip-contato"></button>
      </div>`;

   const form = raiz.querySelector('.chat-form');
   const input = raiz.querySelector('.chat-input');
   form.addEventListener('submit', (e) => {
      e.preventDefault();
      const texto = input.value.trim();
      input.value = '';
      if (!texto) return;
      const achado = palavrasChave.find((p) => p.regex.test(texto));
      acionar(achado ? achado.no : 'desconhecido');
   });

   raiz.querySelectorAll('.chat-chip').forEach((chip) => {
      chip.addEventListener('click', () => acionar(chip.getAttribute('data-no')));
   });

   window.i18n.aplicar(raiz);
}

// Troca de contexto: home (HUD central) <-> interna (pilula flutuante).
// gsap.to direto entre posicoes conhecidas, sem reparent nem Flip.
function definirContexto(tipo) {
   const interna = tipo === 'interna';
   if (raiz.classList.contains('chat--flutuante') === interna) return; // ja no estado
   const aplicar = () => {
      raiz.classList.toggle('chat--home', !interna);
      raiz.classList.toggle('chat--flutuante', interna);
   };
   if (reduz.matches || !window.gsap) { aplicar(); return; }
   window.gsap.to(raiz, {
      opacity: 0, scale: 0.96, duration: 0.16, ease: 'power2.in',
      onComplete: () => {
         aplicar();
         window.gsap.fromTo(raiz,
            { opacity: 0, scale: 0.96 },
            { opacity: 1, scale: 1, duration: 0.24, ease: 'power2.out', clearProps: 'opacity,transform' });
      }
   });
}

export function initChat() {
   raiz = document.getElementById('chat-jessy');
   if (!raiz) { console.error('chat: #chat-jessy nao encontrado.'); return; }
   document.body.appendChild(raiz); // garante que vive no body (fixed)
   construir();

   // O contexto segue a mesma camera
   document.addEventListener('navegacao:mudou', (e) => definirContexto(e.detail.tipo));
}
