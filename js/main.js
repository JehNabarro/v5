// main.js  ponto de entrada (ES module)
//
// Ordem: i18n (mecanismo) -> UI (header, indicador, galeria) ->
// chat (HUD no body) -> navegacao (a camera, que faz o primeiro render).
// body.loaded e o gatilho unico de reveal: o CSS trata os estados
// iniciais escondidos antes do primeiro paint; aqui so libertamos.

import './i18n.js';
import { initUI } from './ui.js';
import { initChat } from './chat.js';
import { initNavegacao } from './navegacao.js';

initUI();
initChat();
initNavegacao();

requestAnimationFrame(() => document.body.classList.add('loaded'));
