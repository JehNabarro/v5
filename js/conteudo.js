// conteudo.js  FONTE UNICA DE VERDADE
//
// Todo o texto traduzivel e o manifesto de projetos vivem aqui.
// Os outros modulos sao consumidores, nunca donos:
//   i18n.js       le `strings` (interface, via data-i18n)
//   navegacao.js  le `projetos` (manifesto: id, coordenada, template)
//   chat.js       le `chat` (roteiro da Jessy)
//   (fase futura) casos: corpo completo dos cases, ja ingerido aqui
//
// Convencao de texto traduzivel: chaves pontuadas em strings.pt/strings.en.
// Sem travessao em nenhum texto. Idioma PT-PT.

// ============================================================
// 1. INTERFACE  (consumida por data-i18n / data-i18n-attr)
// ============================================================
export const strings = {
   pt: {
      'geral.locale': 'pt-PT',

      // Marca / header
      'marca.nome': 'Jéssica Nabarro',
      'marca.papel': 'UX/UI & Product Designer',
      'header.abrir-menu': 'Abrir menu',
      'header.fechar-menu': 'Fechar menu',

      // Navegacao (pilula e gaveta)
      'nav.home': 'Início',
      'nav.projetos': 'Projetos',
      'nav.sobre': 'Quem sou eu',
      'nav.contato': 'Contacto',
      'nav.conversa': 'Conversa',
      'nav.voltar-projetos': 'Voltar para projetos',

      // Home: eyebrow + titulo do heroi
      'home.eyebrow': 'PORTFÓLIO',
      'home.titulo-1': 'Projeto o que é difícil ',
      'home.titulo-2': 'até ficar óbvio.',

      // Galeria: rotulo do mockup e CTA
      'galeria.mockup': 'mockup do case',
      'galeria.cta': 'Ver o case',
      'galeria.anterior': 'Projeto anterior',
      'galeria.proximo': 'Próximo projeto',

      // Chat (HUD)
      'chat.intro': 'Diz-me o que procuras e eu abro o case certo.',
      'chat.placeholder': 'Faz uma pergunta…',
      'chat.enviar': 'Enviar pergunta',
      'chat.chip-projetos': 'Ver projetos',
      'chat.chip-sobre': 'Sobre mim',
      'chat.chip-contato': 'Contacto',
      'chat.avatar': 'JN',

      // Indicador de posicao (semente do minimapa)
      'pos.home': 'Início',
      'pos.projetos': 'Projetos',
      'pos.sobre': 'Quem sou eu',
      'pos.contato': 'Contacto',
      'pos.conversa': 'Conversa',

      // Cartoes de projeto na home (meta + resultado), fonte: design
      'proj.motorline.titulo': 'Motorline',
      'proj.motorline.meta': 'UX/UI · WEB · SISTEMA',
      'proj.motorline.result': 'Reduzi a metade o tempo de gestão de stock num só painel.',
      'proj.coinple.titulo': 'Coinple',
      'proj.coinple.meta': 'UX/UI · PRODUTO · APP',
      'proj.coinple.result': 'Tornei o investimento em cripto simples para quem começa do zero.',
      'proj.momentos.titulo': 'Momentos',
      'proj.momentos.meta': 'UX/UI · PRODUTO · APP',
      'proj.momentos.result': 'Reuni recordações dispersas numa linha do tempo que se partilha.',
      'proj.diagnostico.titulo': 'Diagnóstico de Liderança',
      'proj.diagnostico.meta': 'UX/UI · WEB · SISTEMA',
      'proj.diagnostico.result': 'Dei aos líderes uma leitura clara da equipa num só ecrã.',

      // Telas internas (esqueleto navegavel; redesenho e fase futura)
      'sobre.eyebrow': 'Quem sou eu',
      'sobre.titulo': 'Desenho produtos digitais que as pessoas percebem sem esforço.',
      'contato.titulo': 'Contacto',
      'contato.intro': 'Tens um projeto em mente ou queres trocar uma ideia? Escreve-me.',
      'contato.email': 'jeh.nabarro@gmail.com',
      'placeholder.em-construcao': 'Conteúdo completo desta secção a chegar numa fase seguinte.',

      // Titulos da aba
      'titulo.home': 'Jéssica Nabarro, UX/UI & Product Designer',
      'titulo.projetos': 'Projetos, Jéssica Nabarro',
      'titulo.motorline': 'Motorline, Jéssica Nabarro',
      'titulo.coinple': 'Coinple, Jéssica Nabarro',
      'titulo.momentos': 'Momentos, Jéssica Nabarro',
      'titulo.diagnostico': 'Diagnóstico de Liderança, Jéssica Nabarro',
      'titulo.sobre': 'Quem sou eu, Jéssica Nabarro',
      'titulo.contato': 'Contacto, Jéssica Nabarro',
      'titulo.conversa': 'Conversa, Jéssica Nabarro'
   },

   en: {
      'geral.locale': 'en',

      'marca.nome': 'Jéssica Nabarro',
      'marca.papel': 'UX/UI & Product Designer',
      'header.abrir-menu': 'Open menu',
      'header.fechar-menu': 'Close menu',

      'nav.home': 'Home',
      'nav.projetos': 'Projects',
      'nav.sobre': 'About me',
      'nav.contato': 'Contact',
      'nav.conversa': 'Conversation',
      'nav.voltar-projetos': 'Back to projects',

      'home.eyebrow': 'PORTFOLIO',
      'home.titulo-1': "I design what is hard ",
      'home.titulo-2': 'until it feels obvious.',

      'galeria.mockup': 'case mockup',
      'galeria.cta': 'Open the case',
      'galeria.anterior': 'Previous project',
      'galeria.proximo': 'Next project',

      'chat.intro': "Tell me what you need and I'll open the right case.",
      'chat.placeholder': 'Ask me anything…',
      'chat.enviar': 'Send question',
      'chat.chip-projetos': 'See projects',
      'chat.chip-sobre': 'About me',
      'chat.chip-contato': 'Contact',
      'chat.avatar': 'JN',

      'pos.home': 'Home',
      'pos.projetos': 'Projects',
      'pos.sobre': 'About me',
      'pos.contato': 'Contact',
      'pos.conversa': 'Conversation',

      'proj.motorline.titulo': 'Motorline',
      'proj.motorline.meta': 'UX/UI · WEB · SYSTEM',
      'proj.motorline.result': 'I halved stock management time in a single panel.',
      'proj.coinple.titulo': 'Coinple',
      'proj.coinple.meta': 'UX/UI · PRODUCT · APP',
      'proj.coinple.result': 'I made crypto investing simple for absolute beginners.',
      'proj.momentos.titulo': 'Momentos',
      'proj.momentos.meta': 'UX/UI · PRODUCT · APP',
      'proj.momentos.result': 'I gathered scattered memories into a timeline you can share.',
      'proj.diagnostico.titulo': 'Leadership Diagnostic',
      'proj.diagnostico.meta': 'UX/UI · WEB · SYSTEM',
      'proj.diagnostico.result': 'I gave leaders a clear read of the team on one screen.',

      'sobre.eyebrow': 'About me',
      'sobre.titulo': 'I design digital products people grasp without effort.',
      'contato.titulo': 'Contact',
      'contato.intro': 'Got a project in mind or want to chat? Write to me.',
      'contato.email': 'jeh.nabarro@gmail.com',
      'placeholder.em-construcao': 'The full content of this section is coming in a later phase.',

      'titulo.home': 'Jéssica Nabarro, UX/UI & Product Designer',
      'titulo.projetos': 'Projects, Jéssica Nabarro',
      'titulo.motorline': 'Motorline, Jéssica Nabarro',
      'titulo.coinple': 'Coinple, Jéssica Nabarro',
      'titulo.momentos': 'Momentos, Jéssica Nabarro',
      'titulo.diagnostico': 'Leadership Diagnostic, Jéssica Nabarro',
      'titulo.sobre': 'About me, Jéssica Nabarro',
      'titulo.contato': 'Contact, Jéssica Nabarro',
      'titulo.conversa': 'Conversation, Jéssica Nabarro'
   }
};

// ============================================================
// 2. MANIFESTO DE PROJETOS
//    Cada projeto e uma coordenada no mundo continuo de 64px.
//    coordenada: passos de --modulo (lida pela camera na fase do grid).
//    ordem: a mesma do design (default ativo = diagnostico, indice 3).
// ============================================================
export const projetos = [
   { id: 'motorline',   coordenada: { x: 1, y: 0 }, template: 'motorline' },
   { id: 'coinple',     coordenada: { x: 2, y: 0 }, template: 'coinple' },
   { id: 'momentos',    coordenada: { x: 3, y: 0 }, template: 'momentos' },
   { id: 'diagnostico', coordenada: { x: 4, y: 0 }, template: 'diagnostico' }
];

// Coordenadas das telas nao-projeto (para a camera futura)
export const coordenadas = {
   home:     { x: 0, y: 0 },
   projetos: { x: 0, y: 0 },
   sobre:    { x: 0, y: -1 },
   contato:  { x: 0, y: 1 },
   conversa: { x: 0, y: 2 }
};

// ============================================================
// 3. ROTEIRO DO CHAT (intencoes -> destino de navegacao)
//    Respostas ainda placeholder (fase futura cobre intencoes reais).
//    Cada no com `destino` chama navegar(destino) pela MESMA camera.
// ============================================================
export const chat = {
   pt: {
      inicio: { resposta: 'Diz-me o que procuras e eu abro o case certo.' },
      projetos:    { destino: 'projetos',    resposta: 'A abrir os projetos.' },
      motorline:   { destino: 'motorline',   resposta: 'A abrir o case Motorline.' },
      coinple:     { destino: 'coinple',     resposta: 'A abrir o case Coinple.' },
      momentos:    { destino: 'momentos',    resposta: 'A abrir o case Momentos.' },
      diagnostico: { destino: 'diagnostico', resposta: 'A abrir o Diagnóstico de Liderança.' },
      sobre:       { destino: 'sobre',       resposta: 'A abrir a página Quem sou eu.' },
      contato:     { destino: 'contato',     resposta: 'A abrir o contacto.' },
      desconhecido: { resposta: 'Essa ainda não sei responder. Experimenta uma sugestão.' }
   },
   en: {
      inicio: { resposta: "Tell me what you need and I'll open the right case." },
      projetos:    { destino: 'projetos',    resposta: 'Opening the projects.' },
      motorline:   { destino: 'motorline',   resposta: 'Opening the Motorline case.' },
      coinple:     { destino: 'coinple',     resposta: 'Opening the Coinple case.' },
      momentos:    { destino: 'momentos',    resposta: 'Opening the Momentos case.' },
      diagnostico: { destino: 'diagnostico', resposta: 'Opening the Leadership Diagnostic.' },
      sobre:       { destino: 'sobre',       resposta: 'Opening the About me page.' },
      contato:     { destino: 'contato',     resposta: 'Opening contact.' },
      desconhecido: { resposta: "I can't answer that one yet. Try a suggestion." }
   }
};

// Mapeamento de digitacao livre para nos do roteiro
export const palavrasChave = [
   { regex: /motor\s*line/i, no: 'motorline' },
   { regex: /coinple|cripto|cripta/i, no: 'coinple' },
   { regex: /momentos?/i, no: 'momentos' },
   { regex: /diagn[oó]stic|lideran[cç]a/i, no: 'diagnostico' },
   { regex: /projet|dashboard/i, no: 'projetos' },
   { regex: /sobre|quem|j[eé]ssica/i, no: 'sobre' },
   { regex: /contact|contat|e-?mail|falar/i, no: 'contato' }
];

// ============================================================
// 4. CORPO DOS CASES (ingerido dos .MD revistos, PT preenchido)
//    Nao renderizado na fase 1 (paginas de case sao fase futura);
//    vive aqui para nascer na fonte unica, nao espalhado.
//    EN em chave (a preencher).
// ============================================================
export const casos = {
   diagnostico: {
      lead: {
         pt: 'Consultores gastavam, em média, 6 horas para redigir um único relatório. O sistema foi desenhado para atacar esse número por dois lados: reunir todos os documentos do participante num só lugar, a uma busca de distância, e colocar uma IA que revê incongruências enquanto o consultor escreve.',
         en: ''
      },
      nota: { pt: 'Nome fictício por acordo de confidencialidade.', en: '' },
      secoes: [
         {
            titulo: { pt: 'O que o sistema resolvia', en: '' },
            paragrafos: [{ pt: 'O gargalo não era escrever, era juntar. O consultor perdia horas a caçar documentos espalhados antes mesmo de começar o relatório, e depois a rever manualmente à procura de contradições. O sistema centralizou clientes, participantes, consultores e projetos num único gestor, deixou cada documento acessível na hora, e delegou a checagem de incongruências a uma IA. O consultor volta a fazer o que só ele faz: analisar.', en: '' }]
         },
         {
            titulo: { pt: 'Contexto', en: '' },
            paragrafos: [{ pt: 'Setor: consultoria de diagnóstico de liderança. Stack: low-code, Figma, modelação de dados, integração de IA.', en: '' }]
         },
         {
            titulo: { pt: 'Utilizadores', en: '' },
            paragrafos: [
               { pt: 'Consultores escreviam os relatórios e carregavam as 6 horas. Precisavam de contexto reunido e de menos retrabalho de revisão.', en: '' },
               { pt: 'Administradores geriam clientes, participantes, consultores e projetos. Precisavam de encontrar qualquer registo depressa, sem navegar por várias telas.', en: '' }
            ]
         },
         {
            titulo: { pt: 'A restrição: construir antes de desenhar', en: '' },
            paragrafos: [{ pt: 'O desenvolvimento começou antes de existir layout. Modelei os dados e estruturei a aplicação direto no low-code, a priorizar a função. O primeiro protótipo era propositadamente cru no visual, focado só em provar que o fluxo fechava. Só depois de a correr apliquei testes de usabilidade e fiz a engenharia reversa da experiência.', en: '' }]
         },
         {
            titulo: { pt: 'A virada de arquitetura', en: '' },
            paragrafos: [{ pt: 'O problema mais caro não era visual, era de fluxo. Para completar um cadastro, o utilizador entrava e saía a cada etapa: respondia, voltava, entrava de novo. Refiz a arquitetura de informação para que, uma vez iniciado o ciclo, todas as etapas seguissem em sequência, sem sair da tela. O mapa do site, antes vertical, ficou horizontal, a refletir esse fluxo contínuo.', en: '' }]
         },
         {
            titulo: { pt: 'Modelação de dados', en: '' },
            paragrafos: [{ pt: 'Documentei a estrutura por trás da aplicação: como clientes, participantes, consultores, projetos e documentos se relacionam. Foi essa base que permitiu o acesso rápido a qualquer registo e sustentou o fluxo de relatório de ponta a ponta.', en: '' }]
         },
         {
            titulo: { pt: 'A IA no fluxo', en: '' },
            paragrafos: [{ pt: 'O diferencial que atacava direto as 6 horas. Enquanto o consultor escreve o relatório, a IA revê e aponta incongruências no texto. A checagem de consistência, antes manual e demorada, passou a acontecer durante a escrita, não depois dela.', en: '' }]
         },
         {
            titulo: { pt: 'Redesign', en: '' },
            paragrafos: [{ pt: 'O redesenho partiu de uma decisão de contexto, não de gosto: os administradores passam o dia inteiro na tela. Tirei o fundo branco para reduzir o cansaço visual em uso prolongado e usei o cinza no topo para separar a área de ação principal e destacar a marca. Padronizei ícones, cores, bordas e botões para dar previsibilidade. Trouxe informação e projetos recentes para a página inicial, de modo que a busca por qualquer cliente ou empresa começasse já resolvida. A trilha de navegação ficou acima do nome da página, a deixar claro o caminho percorrido.', en: '' }]
         },
         {
            titulo: { pt: 'Onde o projeto parou', en: '' },
            paragrafos: [{ pt: 'A produção foi interrompida por fim de investimento, antes do lançamento. O sistema não chegou a medir a redução das 6 horas em uso real. O que fica é uma solução desenhada e tecnicamente construída para esse alvo, e um aprendizado: entregar função primeiro no low-code deu-me um produto real para testar cedo, mas exigiu disciplina para refatorar a arquitetura depois, em vez de deixar as decisões técnicas iniciais congelar a experiência.', en: '' }]
         }
      ]
   },

   motorline: {
      lead: {
         pt: 'Uma planilha de produção com muitas colunas e rolagem horizontal constante virou uma interface que mostra só o essencial e explica cada dado com um clique. O redesenho aproximou o que a planilha espalhava: a peça em falta no stock e a produção dessa mesma peça na máquina responsável.',
         en: ''
      },
      secoes: [
         {
            titulo: { pt: 'O que o sistema resolvia', en: '' },
            paragrafos: [{ pt: 'A dor não era falta de dados, era excesso mal organizado. Informação importante perdia-se no meio de informação secundária, as siglas das colunas confundiam-se e não havia explicação para o que cada uma significava. O redesenho transformou o controlo numa tabela hierarquizada, que revela informação sob procura e mantém visível apenas o indispensável para a decisão. O que antes não cabia numa tela passou a adaptar-se a vários formatos.', en: '' }]
         },
         {
            titulo: { pt: 'Contexto', en: '' },
            paragrafos: [{ pt: 'Setor: controlo de produção e stock. Stack: Figma, HTML, CSS, JavaScript, design system.', en: '' }]
         },
         {
            titulo: { pt: 'Utilizadores', en: '' },
            paragrafos: [{ pt: 'Quem administra a produção no dia a dia. Precisava de cruzar, na mesma leitura, a peça em falta no stock com a produção dessa peça na máquina responsável, sem depender de decorar siglas nem de caçar a informação numa planilha que rolava para os lados. Precisava de hierarquia clara para separar o urgente do secundário e decidir com confiança.', en: '' }]
         },
         {
            titulo: { pt: 'O ponto de partida', en: '' },
            paragrafos: [{ pt: 'A origem era uma planilha com muitas colunas e rolagem horizontal constante. Uma das dores centrais era cruzar a peça em falta no stock com a produção dessa mesma peça na máquina responsável, algo que a planilha afastava em vez de aproximar. Somava-se a isso o excesso de informação no meio dos dados que realmente importavam e a ausência de explicação em cada coluna: as siglas confundiam-se e eram difíceis de memorizar.', en: '' }]
         },
         {
            titulo: { pt: 'Decisões de design', en: '' },
            paragrafos: [
               { pt: 'A primeira foi esconder e mostrar informação conforme a necessidade de quem administra, a deixar em tela só o indispensável. Antes o que não cabia numa tela, agora adapta-se a vários formatos.', en: '' },
               { pt: 'A segunda foi dar a cada coluna uma explicação acessível com um clique, para que a função do dado fosse identificada na hora, sem depender de memória nem de decorar siglas.', en: '' },
               { pt: 'A terceira foi estabelecer uma hierarquia visual clara, a separar o urgente do secundário e a devolver confiança a quem decide com base naqueles dados.', en: '' }
            ]
         },
         {
            titulo: { pt: 'Design System', en: '' },
            paragrafos: [{ pt: 'O sistema de design foi construído sobre o Atomic Design, metodologia de Brad Frost. Os átomos, menores unidades, definem cores, ícones e tipografia. Combinados, formam moléculas como os botões. As moléculas agrupam-se em organismos, caso dos botões compostos e dos filtros. Esses blocos sobem para templates, como a própria tabela, e chegam às páginas. A consistência do resultado vem dessa base.', en: '' }]
         },
         {
            titulo: { pt: 'Solução', en: '' },
            paragrafos: [{ pt: 'Com o design system aplicado, a hierarquia da informação ficou legível: dá para entender a tabela, perceber as suas urgências e sentir mais confiança ao tomar uma decisão com base em dados. A tabela aberta disponibiliza, com um clique, a identificação exata da função daqueles dados. O que antes exigia rolagem horizontal e memória de siglas passou a caber, priorizado, na tela.', en: '' }]
         },
         {
            titulo: { pt: 'Onde o projeto parou', en: '' },
            paragrafos: [{ pt: 'Atuei no design de ponta a ponta, do wireframe ao layout final, com prototipagem e validação em testes com utilizadores. Iniciei a implementação do frontend da tabela antes de deixar o projeto. O sistema não chegou a medir, em uso real, a redução do tempo de leitura ou de erro. O que fica é uma solução desenhada para atacar diretamente as dores da planilha original: aproximar stock e produção, priorizar o indispensável e tornar cada dado autoexplicável.', en: '' }]
         }
      ]
   },

   // Coinple e Momentos: cases completos numa fase futura.
   coinple: { lead: { pt: '', en: '' }, secoes: [] },
   momentos: { lead: { pt: '', en: '' }, secoes: [] }
};
