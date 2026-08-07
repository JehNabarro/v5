// i18n.js  mecanismo de traducao (vanilla)
//
// - As strings vivem em conteudo.js (fonte unica); aqui so o mecanismo.
// - Elementos usam data-i18n="chave" (troca textContent) e
//   data-i18n-attr="attr:chave; outro:chave" (troca atributos).
// - O idioma fica em localStorage e reflete em <html lang>.
// - IMPORTANTE: o router CLONA o template a cada navegacao, entao
//   window.i18n.aplicar(seccao) e chamado depois de cada clonagem.

import { strings as DICIONARIO } from './conteudo.js';

const IDIOMAS = ['pt', 'en'];
const CHAVE_STORAGE = 'jn-idioma';

function idiomaInicial() {
   // PT e o idioma primario (PT-PT); a escolha guardada tem prioridade.
   // O EN fica para toggle explicito (fase futura preenche o EN).
   const salvo = localStorage.getItem(CHAVE_STORAGE);
   if (salvo && IDIOMAS.includes(salvo)) return salvo;
   return 'pt';
}

let idiomaAtual = idiomaInicial();

// Traducao de uma chave (fallback: pt, depois a propria chave)
function t(chave) {
   const dic = DICIONARIO[idiomaAtual] || {};
   if (chave in dic) return dic[chave];
   if (chave in DICIONARIO.pt) return DICIONARIO.pt[chave];
   return chave;
}

// Aplica o idioma a uma raiz (document por defeito, ou uma seccao clonada)
function aplicar(raiz = document) {
   raiz.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.getAttribute('data-i18n'));
   });
   raiz.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.getAttribute('data-i18n-attr').split(';').forEach((par) => {
         const [attr, chave] = par.split(':').map((s) => s.trim());
         if (attr && chave) el.setAttribute(attr, t(chave));
      });
   });
   if (raiz === document || raiz === document.documentElement) {
      document.documentElement.lang = t('geral.locale');
   }
}

function definirIdioma(novo) {
   if (!IDIOMAS.includes(novo) || novo === idiomaAtual) return;
   idiomaAtual = novo;
   localStorage.setItem(CHAVE_STORAGE, novo);
   aplicar(document);
   document.dispatchEvent(new CustomEvent('idioma:mudou', { detail: { idioma: novo } }));
}

function alternar() { definirIdioma(idiomaAtual === 'pt' ? 'en' : 'pt'); }

window.i18n = {
   t, aplicar, alternar, definirIdioma,
   get idioma() { return idiomaAtual; }
};

// Primeira aplicacao no load
aplicar(document);
