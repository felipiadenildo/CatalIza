export const defaultLang = "en";
export const langs = ["en", "pt"] as const;
export type Lang = (typeof langs)[number];

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.gcms": "GC-MS Analyzer",
    "nav.fps": "FPS Calculator",
    "nav.contact": "Contact",
    "nav.skipToContent": "Skip to content",
    "nav.soon": "Planned",

    "theme.toLight": "Switch to light mode",
    "theme.toDark": "Switch to dark mode",

    "brand.tagline": "Laboratory automation",

    "home.eyebrow": "CatalIza",
    "home.title": "Automating the lab, one process at a time.",
    "home.lede":
      "CatalIza brings together the data-processing tools behind Dra. Izadora Rhaynna Santos de Menezes's catalysis research, in one place, so results stop depending on a spreadsheet only one person knows how to read.",
    "home.why.title": "Why CatalIza exists",
    "home.why.body":
      "A single afternoon of reaction screening can produce more GC-MS runs than anyone can process by hand before the next one is due. Peak areas get copied over manually, retention times get eyeballed, and small inconsistencies creep in between one sample and the next. CatalIza applies the same rules to every run, and keeps every number traceable back to the chromatogram it came from.",
    "home.who.title": "Idealized by Dra. Izadora Rhaynna Santos de Menezes",
    "home.who.body":
      "A catalysis researcher currently working on single-atom photocatalysts, Izadora built the case for CatalIza out of her own bench work — the tool follows the actual bottlenecks of running reaction-screening series, not a guess at what a lab might need.",
    "home.status.title": "Where things stand",
    "home.status.body":
      "Right now this site holds the proposal for the first module, GC-MS Analyzer, open for review before development goes further. The working tool isn't built yet.",
    "home.modules.title": "Modules",
    "home.card.gcms.title": "GC-MS Analyzer",
    "home.card.gcms.desc":
      "Upload GC-MS runs and get peak identification, quantification against an internal standard, and the reaction metrics that follow from them — conversion, yield, selectivity, mass balance.",
    "home.card.gcms.status": "Proposal under review",
    "home.card.gcms.cta": "Read the proposal",
    "home.card.fps.title": "FPS Calculator",
    "home.card.fps.desc": "A future module, not scoped yet.",
    "home.card.fps.cta": "Planned",

    "gcms.eyebrow": "Module proposal",
    "gcms.title": "GC-MS Analyzer",
    "gcms.status.badge": "Proposal — not yet built. This page exists for review, not use.",
    "gcms.lede":
      "This is the working proposal for the first CatalIza module: raw GC-MS runs in, reaction metrics out — conversion, yield, selectivity, mass balance — without a spreadsheet in between. The workflow, the identification method and the formulas below are all still open for correction.",

    "gcms.howto.title": "How to review this",
    "gcms.howto.read.title": "Read it",
    "gcms.howto.read.body": "The problem this is solving, the proposed workflow, how a peak gets identified, and every formula the tool would compute.",
    "gcms.howto.try.title": "Try it",
    "gcms.howto.try.body": "The interactive preview linked below runs on made-up data, but the interactions are real: add the demo files, run one, expand it, edit a field.",
    "gcms.howto.flag.title": "Check the flagged spots",
    "gcms.howto.flag.body": "A handful of boxes below are marked \"Please confirm\" — decisions that need your judgment as the chemist, not just a read-through from me.",
    "gcms.howto.reply.title": "Send it back",
    "gcms.howto.reply.body": "Reply to the email this came in with whatever you think — agreement, corrections, or a flat \"this is wrong.\" No format needed.",

    "gcms.needsConfirm": "Please confirm",

    "gcms.problem.title": "The problem",
    "gcms.problem.body":
      "Every reaction-screening run turns into a chromatogram that someone has to read by hand: find the peaks, match each one to a known compound, track down or guess a response factor, then carry all of it through to conversion, yield and mass balance. It works for one sample. It stops working somewhere around the tenth, and two people reading the same raw file rarely land on exactly the same numbers.",

    "gcms.flow.title": "Proposed workflow",
    "gcms.flow.body":
      "One file or twenty, the screen works the same way. A shared configuration up top applies to everything; any file can still be adjusted on its own. Nothing runs by itself — you look at a file, then you run it.",
    "gcms.flow.step1.title": "1. Upload",
    "gcms.flow.step1.body": "Drop in one .mzXML file or several at once. Each one gets its own block in the list below.",
    "gcms.flow.step2.title": "2. Review, then run",
    "gcms.flow.step2.body":
      "Shared defaults get set once, at the top. Any block can still override them on its own. Run it whenever it's ready.",
    "gcms.flow.step3.title": "3. Check what got inferred",
    "gcms.flow.step3.body":
      "Once a file's been processed, its block already has a guess at substrate, main product, byproducts and internal standard, pulled from the peaks it found. Every one of those is editable on the spot, and stays marked as a suggestion until you touch it.",
    "gcms.flow.step4.title": "4. Adjust the details",
    "gcms.flow.step4.body":
      "Expand a block for the chromatogram and the full peak table. Integration bounds and compound assignments can be fixed for that one file without touching anything shared.",
    "gcms.flow.step5.title": "5. Export",
    "gcms.flow.step5.body": "One consolidated file for everything that's been run, or a single run on its own.",
    "gcms.flow.preview.cta": "Open the interactive preview",
    "gcms.flow.preview.note":
      "Made-up data standing in for a real pipeline — this is for reacting to the workflow, not for trusting the numbers.",

    "gcms.id.title": "How a peak gets identified",
    "gcms.id.body":
      "Every detected peak gets compared, by retention time, against a reference library — name, expected RT, a tolerance window around it, response factor, role. Two candidates in overlapping windows? The closer one wins. Nothing in the library close enough? The peak stays unidentified instead of getting a guess.",
    "gcms.id.tolerance.title": "About that tolerance window",
    "gcms.id.tolerance.body":
      "Retention time drifts a little between runs — column aging, small temperature or flow variations — and two compounds can also elute close enough to interfere with each other. Right now each compound in the library carries its own tolerance, set from what we've seen in your equipment's real runs. Whether that's wide enough, or too wide for compounds that sit close together, is worth a second opinion.",
    "gcms.id.caveat.title": "What's missing",
    "gcms.id.caveat.body":
      "Identification by mass spectrum, not just retention time, is designed into the pipeline already but not wired up. It would help most for compounds whose RT isn't fully stable between runs. Whether that's needed for a first working version, or can be added once the RT-only approach shows its limits, is an open question.",

    "gcms.calc.title": "The calculations",
    "gcms.calc.body":
      "This is the part that needs your eyes most. What follows is exactly what gets computed and why, laid out to be checked against how you'd actually work through a reaction screen — not just whether the code runs without errors.",

    "gcms.calc.is.title": "The internal standard it's all built on",
    "gcms.calc.is.body":
      "Every concentration below starts from an area ratio against the internal standard, so the standard's own quality matters more than any single formula. The usual criteria: its retention time sits far enough from every analyte to avoid interference, ideally more than 15% apart; it shows up at roughly the same concentration in every sample; a deuterated version of the actual analyte, when one's available, beats an unrelated compound. Dodecane is what's set as the default IS in the library right now — whether it holds up against those criteria for the reactions you're running is worth a direct answer.",

    "gcms.calc.rrf.title": "Concentration from the internal standard",
    "gcms.calc.rrf.body":
      "With a known relative response factor (RRF) for a compound, its concentration comes straight from the ratio between its peak area and the standard's:",
    "gcms.calc.rrf.formula": "C = (A / A_IS) × (1 / RRF) × C_IS",
    "gcms.calc.calib.title": "Concentration from a calibration curve",
    "gcms.calc.calib.body": "When there's an actual calibration curve for a compound, it takes over instead of an assumed RRF:",
    "gcms.calc.calib.formula": "C = ((A/A_IS − b) / m) × C_IS",

    "gcms.calc.noRRF.title": "When neither RRF nor calibration exists",
    "gcms.calc.noRRF.body":
      "Most compounds in a screen won't have a measured response factor — that's the default situation, not the exception. The proposal here is to fall back to RRF = 1 (area ratio read straight as concentration ratio) and mark the result semi-quantitative, visibly different from a calibrated number. There's a more rigorous fallback in the literature — Effective Carbon Number, which estimates response from molecular structure — but it was built for flame-ionization detection, where response tracks reduced carbon count directly; mass spectrometry responses vary too much between compounds for the same trick to transfer cleanly, so it shouldn't be dressed up as more reliable than it is. The real question: does RRF = 1 with a clear semi-quantitative label hold up for what these numbers get used for, or does this need something sturdier?",

    "gcms.calc.conv.title": "Substrate conversion",
    "gcms.calc.conv.formula": "X (%) = (C₀ − C_substrate) / C₀ × 100",
    "gcms.calc.yield.title": "Product yield",
    "gcms.calc.yield.formula": "Y (%) = C_product / C_max × 100",
    "gcms.calc.sel.title": "Selectivity",
    "gcms.calc.sel.formula": "S (%) = Y / X × 100",

    "gcms.calc.future.title": "Also sitting in the pipeline, unused",
    "gcms.calc.future.body":
      "Turnover number, turnover frequency and enantiomeric excess already have working formulas in the code, just not wired into a screen yet. If any of these matter for how you report results, it's worth saying so now rather than after the interface is built around their absence.",

    "gcms.calc.mb.title": "Mass balance",
    "gcms.calc.mb.formula": "MB (%) = (C_substrate + Σ C_products / ν) / C₀ × 100",
    "gcms.calc.mb.body":
      "Worth a close look specifically: this is normalized against the initial charge (C₀), not the amount consumed. It wasn't always — an earlier version divided by the consumed amount, which looks reasonable at high conversion and turns unstable at low conversion, exactly where a lot of catalytic screening sits. Is C₀ the denominator you'd expect a reported result to use?",

    "gcms.stack.title": "How it would run",
    "gcms.stack.body":
      "A web page: a file goes up, results come back in the browser, nothing to install. Starts on one computer in the lab, with room to grow into being reachable from the rest of the lab network, and hosted online later if that's ever needed, without starting over. Data stays on that machine by default.",

    "gcms.ref.title": "Reference samples, from you",
    "gcms.ref.body":
      "There's no way to know if this tool gets the right numbers without something real to check it against. What's needed is a run where you already know the correct answer, so the automated result can sit next to yours while this is still being built, not after it's finished.",
    "gcms.ref.step1.title": "1. The raw run, exported and named right",
    "gcms.ref.step1.body":
      "Whatever the equipment produces, exported the way you'd normally export it for processing — as far as we can tell that's a .mzXML file out of GCMSsolution, but correct us if that's off, or if there's a more direct path. Name it so it points back to the sample; a run name or ID you'd already recognize is enough.",
    "gcms.ref.step2.title": "2. What you already calculated for it",
    "gcms.ref.step2.body":
      "Whatever's already been worked out by hand for that same run: which compounds, at what retention times and areas, and the resulting concentration, conversion, yield, selectivity, mass balance. A spreadsheet works fine, as long as it's the number you'd stand behind, not a quick estimate.",
    "gcms.ref.step3.title": "3. Both together, clearly paired",
    "gcms.ref.step3.body":
      "The raw file and the manual result, referencing the same sample name, so there's never a question of which belongs to which.",
    "gcms.ref.howmany":
      "More than one sample if there's any way to spare them — several, already validated, spanning different reaction conditions: different substrates, concentrations, timepoints. One sample proves the tool works once. A handful across different conditions is what actually earns trust.",

    "gcms.next.title": "What happens with the feedback",
    "gcms.next.body":
      "Every formula, every step of the workflow, every definition of \"done\" here can still change. Once this gets a green light, or a set of corrections, real development picks up from that agreed starting point instead of from a guess.",

    "fps.eyebrow": "Module",
    "fps.title": "FPS Calculator",
    "fps.body": "A future CatalIza module, not scoped out yet — there's nothing here to review.",
    "fps.back": "Back to Home",

    "contact.eyebrow": "Get in touch",
    "contact.title": "Contact",
    "contact.body": "Questions about this proposal, or about CatalIza in general.",
    "contact.emailPending": "Contact channel to be added.",

    "footer.rights": "All rights reserved.",
  },
  pt: {
    "nav.home": "Início",
    "nav.gcms": "GC-MS Analyzer",
    "nav.fps": "FPS Calculator",
    "nav.contact": "Contato",
    "nav.skipToContent": "Pular para o conteúdo",
    "nav.soon": "Planejado",

    "theme.toLight": "Mudar para modo claro",
    "theme.toDark": "Mudar para modo escuro",

    "brand.tagline": "Automação laboratorial",

    "home.eyebrow": "CatalIza",
    "home.title": "Automatizando o laboratório, um processo de cada vez.",
    "home.lede":
      "A CatalIza reúne num só lugar as ferramentas de processamento de dados da pesquisa em catálise da Dra. Izadora Rhaynna Santos de Menezes, para que o resultado pare de depender de uma planilha que só uma pessoa sabe interpretar.",
    "home.why.title": "Por que a CatalIza existe",
    "home.why.body":
      "Uma única tarde de triagem de reações pode gerar mais corridas de GC-MS do que dá tempo de processar antes da próxima. A área de cada pico é copiada à mão, o tempo de retenção é lido no olho, e pequenas inconsistências vão se acumulando de uma amostra pra outra. A CatalIza aplica a mesma regra em toda corrida e mantém cada número rastreável até o cromatograma de onde ele veio.",
    "home.who.title": "Idealizada pela Dra. Izadora Rhaynna Santos de Menezes",
    "home.who.body":
      "Pesquisadora em catálise, hoje trabalhando com fotocatalisadores single-atom, a Izadora construiu a ideia da CatalIza a partir da própria bancada — a ferramenta segue os gargalos reais de rodar uma série de triagem, não um palpite sobre o que um laboratório pode precisar.",
    "home.status.title": "Onde isso está agora",
    "home.status.body":
      "Por enquanto este site traz a proposta do primeiro módulo, o GC-MS Analyzer, aberta pra avaliação antes do desenvolvimento seguir adiante. A ferramenta funcionando ainda não existe.",
    "home.modules.title": "Módulos",
    "home.card.gcms.title": "GC-MS Analyzer",
    "home.card.gcms.desc":
      "Sobe corridas de GC-MS e recebe de volta identificação de picos, quantificação contra padrão interno, e as métricas de reação que vêm daí — conversão, rendimento, seletividade, balanço de massa.",
    "home.card.gcms.status": "Proposta em avaliação",
    "home.card.gcms.cta": "Ler a proposta",
    "home.card.fps.title": "FPS Calculator",
    "home.card.fps.desc": "Um módulo futuro, ainda sem escopo definido.",
    "home.card.fps.cta": "Planejado",

    "gcms.eyebrow": "Proposta de módulo",
    "gcms.title": "GC-MS Analyzer",
    "gcms.status.badge": "Proposta — ainda não construída. Esta página é pra revisar, não pra usar.",
    "gcms.lede":
      "Essa é a proposta de trabalho do primeiro módulo da CatalIza: corrida bruta de GC-MS entra, métrica de reação sai — conversão, rendimento, seletividade, balanço de massa — sem passar por planilha no meio. O fluxo, o jeito de identificar os picos e as fórmulas aqui embaixo, tudo ainda está aberto a correção.",

    "gcms.howto.title": "Como avaliar isso",
    "gcms.howto.read.title": "Leia",
    "gcms.howto.read.body": "O problema que isso resolve, o fluxo proposto, como um pico é identificado, e cada fórmula que a ferramenta calcularia.",
    "gcms.howto.try.title": "Teste",
    "gcms.howto.try.body": "A prévia interativa linkada abaixo roda em cima de dado inventado, mas a interação é real: adiciona os arquivos de exemplo, roda um, expande, edita um campo.",
    "gcms.howto.flag.title": "Repare nos pontos marcados",
    "gcms.howto.flag.body": "Algumas caixas aqui embaixo estão marcadas \"Por favor confirme\" — são decisões que precisam do seu julgamento como química, não só de uma leitura minha.",
    "gcms.howto.reply.title": "Manda de volta",
    "gcms.howto.reply.body": "Responde o e-mail em que isso chegou com o que você achar — concordando, corrigindo, ou só dizendo que está errado. Não precisa de formato nenhum.",

    "gcms.needsConfirm": "Por favor confirme",

    "gcms.problem.title": "O problema",
    "gcms.problem.body":
      "Toda corrida de triagem de reação vira um cromatograma que alguém tem que ler à mão: achar os picos, associar cada um a um composto conhecido, buscar ou chutar um fator de resposta, e daí levar tudo isso até conversão, rendimento e balanço de massa. Funciona pra uma amostra. Para de funcionar lá pela décima, e dificilmente duas pessoas lendo o mesmo arquivo bruto chegam exatamente no mesmo número.",

    "gcms.flow.title": "Fluxo proposto",
    "gcms.flow.body":
      "Um arquivo ou vinte, a tela funciona do mesmo jeito. Uma configuração compartilhada lá em cima vale pra tudo; qualquer arquivo ainda pode ser ajustado sozinho. Nada roda por conta própria — você olha o arquivo, depois roda.",
    "gcms.flow.step1.title": "1. Upload",
    "gcms.flow.step1.body": "Solta um arquivo .mzXML ou vários de uma vez. Cada um ganha seu próprio bloco na lista.",
    "gcms.flow.step2.title": "2. Revisar, depois rodar",
    "gcms.flow.step2.body":
      "Os padrões compartilhados são definidos uma vez, lá em cima. Qualquer bloco ainda pode sobrescrever por conta própria. Roda quando estiver pronto.",
    "gcms.flow.step3.title": "3. Conferir o que foi inferido",
    "gcms.flow.step3.body":
      "Depois de processado, o bloco já traz um palpite de substrato, produto principal, subprodutos e padrão interno, tirado dos picos que encontrou. Cada um desses campos é editável na hora, e continua marcado como sugestão até você mexer nele.",
    "gcms.flow.step4.title": "4. Ajustar os detalhes",
    "gcms.flow.step4.body":
      "Expande o bloco pra ver o cromatograma e a tabela inteira de picos. Dá pra corrigir limite de integração e atribuição de composto só naquele arquivo, sem mexer em nada compartilhado.",
    "gcms.flow.step5.title": "5. Exportar",
    "gcms.flow.step5.body": "Um arquivo consolidado com tudo que já rodou, ou uma corrida sozinha.",
    "gcms.flow.preview.cta": "Abrir a prévia interativa",
    "gcms.flow.preview.note":
      "Dado inventado no lugar de um pipeline de verdade — serve pra reagir ao fluxo, não pra confiar nos números.",

    "gcms.id.title": "Como um pico é identificado",
    "gcms.id.body":
      "Todo pico detectado é comparado, por tempo de retenção, com uma biblioteca de referência — nome, RT esperado, uma janela de tolerância em volta dele, fator de resposta, papel. Dois candidatos caem na mesma janela? Ganha o mais próximo. Nada na biblioteca chega perto? O pico fica sem identificação, em vez de levar um chute.",
    "gcms.id.tolerance.title": "Sobre essa janela de tolerância",
    "gcms.id.tolerance.body":
      "O tempo de retenção varia um pouco de corrida pra corrida — coluna envelhecendo, pequena variação de temperatura ou fluxo — e dois compostos também podem sair perto o suficiente pra interferir um no outro. Hoje cada composto da biblioteca carrega sua própria tolerância, ajustada pelo que vimos nas corridas reais do seu equipamento. Se isso está largo o bastante, ou largo demais pra compostos que saem próximos, é algo que vale uma segunda opinião sua.",
    "gcms.id.caveat.title": "O que ainda falta",
    "gcms.id.caveat.body":
      "Identificação por espectro de massa, não só por tempo de retenção, já está desenhada no pipeline mas não está ligada. Ajudaria mais justamente nos compostos cujo RT não é totalmente estável entre corridas. Se isso é necessário pra uma primeira versão funcionando, ou pode entrar depois que o RT sozinho mostrar seus limites, é uma pergunta em aberto.",

    "gcms.calc.title": "Os cálculos",
    "gcms.calc.body":
      "Essa é a parte que mais precisa do seu olhar. O que vem a seguir é exatamente o que é calculado e por quê, pensado pra ser conferido contra como você de fato resolveria uma triagem de reação — não só se o código roda sem erro.",

    "gcms.calc.is.title": "O padrão interno em que tudo se apoia",
    "gcms.calc.is.body":
      "Toda concentração aqui embaixo parte de uma razão de área contra o padrão interno, então a qualidade desse padrão pesa mais do que qualquer fórmula sozinha. O critério de sempre: o tempo de retenção dele fica longe o bastante de todo analito pra não interferir, de preferência mais de 15% de diferença; ele aparece em concentração parecida em toda amostra; uma versão deuterada do próprio analito, quando existe, vence um composto qualquer sem relação. Hoje o dodecano está definido como padrão interno padrão na biblioteca — se ele se sustenta contra esse critério pras reações que você roda é algo que vale uma resposta direta sua.",

    "gcms.calc.rrf.title": "Concentração a partir do padrão interno",
    "gcms.calc.rrf.body":
      "Com um fator de resposta relativa (RRF) conhecido pra um composto, a concentração sai direto da razão entre a área do pico dele e a do padrão:",
    "gcms.calc.rrf.formula": "C = (A / A_IS) × (1 / RRF) × C_IS",
    "gcms.calc.calib.title": "Concentração a partir de uma curva de calibração",
    "gcms.calc.calib.body": "Quando existe uma curva de calibração de verdade pra um composto, ela assume o lugar do RRF assumido:",
    "gcms.calc.calib.formula": "C = ((A/A_IS − b) / m) × C_IS",

    "gcms.calc.noRRF.title": "Quando não existe nem RRF nem calibração",
    "gcms.calc.noRRF.body":
      "A maioria dos compostos numa triagem não vai ter fator de resposta medido — essa é a situação padrão, não a exceção. A proposta aqui é cair pra RRF = 1 (razão de área lida direto como razão de concentração) e marcar o resultado como semi-quantitativo, visivelmente diferente de um número calibrado. Existe um fallback mais rigoroso na literatura — Effective Carbon Number, que estima a resposta a partir da estrutura molecular — mas ele foi pensado pra detecção por ionização de chama, onde a resposta segue direto a contagem de carbono reduzido; em espectrometria de massa a resposta varia demais de composto pra composto pro mesmo truque valer, então não faria sentido apresentar isso como mais confiável do que realmente é. A pergunta de verdade: RRF = 1 com o rótulo de semi-quantitativo bem claro se sustenta pro uso que esses números vão ter, ou precisa de algo mais robusto?",

    "gcms.calc.conv.title": "Conversão do substrato",
    "gcms.calc.conv.formula": "X (%) = (C₀ − C_substrato) / C₀ × 100",
    "gcms.calc.yield.title": "Rendimento do produto",
    "gcms.calc.yield.formula": "Y (%) = C_produto / C_max × 100",
    "gcms.calc.sel.title": "Seletividade",
    "gcms.calc.sel.formula": "S (%) = Y / X × 100",

    "gcms.calc.future.title": "Também parado no pipeline, sem uso",
    "gcms.calc.future.body":
      "Turnover number, turnover frequency e excesso enantiomérico já têm fórmula funcionando no código, só não estão ligados em nenhuma tela ainda. Se algum desses importa pro jeito que você reporta resultado, vale dizer isso agora, antes da interface ficar pronta sem eles.",

    "gcms.calc.mb.title": "Balanço de massa",
    "gcms.calc.mb.formula": "MB (%) = (C_substrato + Σ C_produtos / ν) / C₀ × 100",
    "gcms.calc.mb.body":
      "Esse vale olhar com atenção redobrada: está normalizado pela carga inicial (C₀), não pela quantidade consumida. Nem sempre foi assim — uma versão anterior dividia pelo consumido, o que parece razoável em conversão alta e fica instável em conversão baixa, bem onde boa parte da triagem catalítica acontece. C₀ é o denominador que você esperaria ver num resultado reportado?",

    "gcms.stack.title": "Como isso rodaria",
    "gcms.stack.body":
      "Uma página web: sobe um arquivo, o resultado volta no navegador, nada pra instalar. Começa num computador só do laboratório, com espaço pra crescer e ficar acessível pelo resto da rede do lab, e ser hospedado online depois se um dia precisar, sem recomeçar do zero. O dado fica naquela máquina por padrão.",

    "gcms.ref.title": "Amostras de referência, suas",
    "gcms.ref.body":
      "Não tem como saber se essa ferramenta acerta o número sem algo real pra conferir contra. O que falta é uma corrida onde você já sabe a resposta certa, pra colocar o resultado automático ao lado do seu enquanto isso ainda está sendo construído, não depois de pronto.",
    "gcms.ref.step1.title": "1. A corrida bruta, exportada e nomeada direito",
    "gcms.ref.step1.body":
      "O que o equipamento gera, exportado do jeito que você normalmente exportaria pra processar — pelo que dá pra saber daqui, é um arquivo .mzXML saindo do GCMSsolution, mas corrija se estiver errado, ou se houver um caminho mais direto. Nomeie de um jeito que aponte de volta pra amostra; um nome ou ID de corrida que você já reconheceria resolve.",
    "gcms.ref.step2.title": "2. O que você já calculou pra ela",
    "gcms.ref.step2.body":
      "O que já foi resolvido à mão pra essa mesma corrida: quais compostos, em que tempo de retenção e área, e a concentração, conversão, rendimento, seletividade e balanço de massa que saíram disso. Uma planilha resolve, contanto que seja o número que você assinaria embaixo, não uma estimativa rápida.",
    "gcms.ref.step3.title": "3. Os dois juntos, pareados com clareza",
    "gcms.ref.step3.body":
      "O arquivo bruto e o resultado manual, referenciando o mesmo nome de amostra, pra nunca sobrar dúvida de qual pertence a qual.",
    "gcms.ref.howmany":
      "Mais de uma amostra, se der pra sobrar — várias, já validadas, cobrindo condições de reação diferentes: substrato, concentração, tempo. Uma amostra prova que a ferramenta funciona uma vez. Um punhado em condições diferentes é o que de fato garante confiança.",

    "gcms.next.title": "O que acontece com o retorno",
    "gcms.next.body":
      "Toda fórmula, cada passo do fluxo, cada definição de \"pronto\" aqui ainda pode mudar. Depois de um sinal verde, ou de um conjunto de correções, o desenvolvimento de verdade retoma desse ponto combinado, em vez de partir de um palpite.",

    "fps.eyebrow": "Módulo",
    "fps.title": "FPS Calculator",
    "fps.body": "Um módulo futuro da CatalIza, ainda sem escopo definido — não tem nada aqui pra revisar.",
    "fps.back": "Voltar ao Início",

    "contact.eyebrow": "Fale conosco",
    "contact.title": "Contato",
    "contact.body": "Dúvidas sobre esta proposta, ou sobre a CatalIza em geral.",
    "contact.emailPending": "Canal de contato a ser adicionado.",

    "footer.rights": "Todos os direitos reservados.",
  },
} as const;
