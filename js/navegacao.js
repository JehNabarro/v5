// navegacao.js  ESTADO UNICO DE NAVEGACAO (a camera) + router hash
//
// Modelo mental: a grelha de 64px e um mundo continuo; cada destino e
// uma coordenada. Existe UMA camera (um so estado de posicao). Chat,
// menu, chips e cards nao tem navegacao propria: todos chamam navegar().
//
// Nesta fase a camera nao anima (grid plano), mas o contrato ja esta
// montado: navegar() atualiza o estado unico e emite `navegacao:mudou`
// com a coordenada lida do manifesto, pronto para a coreografia futura.
//
// Router: cada destino e um <template>; o conteudo e clonado no momento
// da navegacao e o anterior e removido do DOM. i18n.aplicar(seccao) e
// chamado SEMPRE apos cada clonagem (nunca so no load).

import { projetos, coordenadas } from './conteudo.js';

// Destinos validos = telas com <template> no index.html
const DESTINOS = ['home', 'projetos', 'motorline', 'coinple', 'momentos', 'diagnostico', 'sobre', 'contato'];
const INTERNAS = new Set(['motorline', 'coinple', 'momentos', 'diagnostico', 'sobre', 'contato']);

// Mapa id -> coordenada (projetos do manifesto + telas fixas)
const COORD = { ...coordenadas };
for (const p of projetos) COORD[p.id] = p.coordenada;

// ------------------------------------------------------------
// Estado unico (a camera): uma so posicao para todo o site
// ------------------------------------------------------------
const camera = {
   destino: null,               // id da tela visivel
   coordenada: { x: 0, y: 0 }   // coordenada no mundo de 64px
};

let mainEl = null;
let seccaoAtual = null;

// ------------------------------------------------------------
// Clonagem de template
// ------------------------------------------------------------
function clonar(id) {
   const template = document.getElementById('tpl-' + id);
   if (!template || !template.content.firstElementChild) {
      console.error(`navegacao: template "#tpl-${id}" nao encontrado.`);
      return null;
   }
   return template.content.firstElementChild.cloneNode(true);
}

function idDoHash() {
   const bruto = decodeURIComponent(location.hash.replace('#', ''));
   return DESTINOS.includes(bruto) ? bruto : 'home';
}

// ------------------------------------------------------------
// navegar(destino)  o unico ponto de navegacao do site
// ------------------------------------------------------------
export function navegar(destino) {
   if (!mainEl) return;
   if (!DESTINOS.includes(destino)) destino = 'home';
   if (destino === camera.destino) return;

   const primeira = camera.destino === null;

   // Atualiza o estado unico (a camera)
   camera.destino = destino;
   camera.coordenada = COORD[destino] || { x: 0, y: 0 };

   // Sincroniza a URL (sem duplo hashchange: camera.destino ja aponta
   // para o destino). Na home inicial sem hash, a URL fica limpa.
   const alvoHash = destino === 'home' ? '' : '#' + destino;
   if (location.hash !== alvoHash && !(primeira && destino === 'home' && !location.hash)) {
      if (destino === 'home') history.replaceState(null, '', location.pathname + location.search);
      else location.hash = destino;
   }

   document.title = window.i18n.t('titulo.' + destino);

   // Troca a seccao: remove a anterior, clona a nova, aplica i18n
   if (seccaoAtual) seccaoAtual.remove();
   const seccao = clonar(destino);
   if (!seccao) return;
   mainEl.prepend(seccao);
   window.i18n.aplicar(seccao);       // SEMPRE apos clonar
   seccaoAtual = seccao;
   window.scrollTo(0, 0);

   // Emite a mudanca da camera DEPOIS de montar: header (nav ativa),
   // indicador de posicao, galeria e chat (contexto home/interna)
   // reagem com o DOM novo ja no lugar.
   document.dispatchEvent(new CustomEvent('navegacao:mudou', {
      detail: {
         id: destino,
         coordenada: camera.coordenada,
         tipo: INTERNAS.has(destino) ? 'interna' : 'home',
         seccao
      }
   }));

   // Foco no h1 novo (sem roubar foco no primeiro render)
   if (!primeira) {
      const h1 = seccao.querySelector('h1');
      if (h1) h1.focus({ preventScroll: true });
   }
}

// Estado de leitura para outros modulos (chat, indicador)
export function posicao() { return { ...camera }; }

// ------------------------------------------------------------
// Inicializacao
// ------------------------------------------------------------
export function initNavegacao() {
   mainEl = document.querySelector('main');
   if (!mainEl) {
      console.error('navegacao: <main> nao encontrado.');
      return;
   }

   // Botao voltar/avancar e ancoras nativas (#coinple, #sobre...)
   window.addEventListener('hashchange', () => navegar(idDoHash()));
   // Titulo da aba acompanha a troca de idioma
   document.addEventListener('idioma:mudou', () => {
      if (camera.destino) document.title = window.i18n.t('titulo.' + camera.destino);
   });

   // API global para menu, cards e chat navegarem pela MESMA camera
   window.navegacao = { navegar, posicao };

   // Render inicial: deep link via hash ou home
   navegar(idDoHash());
}
