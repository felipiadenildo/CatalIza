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
      "CatalIza centralizes the data-processing tools used in Dra. Izadora Rhaynna Santos de Menezes's catalysis research — replacing manual spreadsheets and one-off scripts with a single, auditable platform.",
    "home.why.title": "Why CatalIza exists",
    "home.why.body":
      "Reaction screening in catalysis research generates GC-MS runs faster than they can be processed by hand. Every manual transcription of a peak area or a retention time is a chance to introduce error, and a chance to lose reproducibility. CatalIza exists to make that processing systematic: the same rules applied the same way on every run, with every calculation traceable back to the raw chromatogram.",
    "home.who.title": "Idealized by Dra. Izadora Rhaynna Santos de Menezes",
    "home.who.body":
      "Researcher in catalysis, currently designing single-atom photocatalysts. CatalIza grew directly out of her own lab workflow — shaped by the actual bottlenecks of processing reaction-screening series, not designed in the abstract.",
    "home.status.title": "Where this stands right now",
    "home.status.body":
      "This site currently documents the proposal for the first module (GC-MS Analyzer) so it can be reviewed and validated before development continues. It is not yet the working tool.",
    "home.modules.title": "Modules",
    "home.card.gcms.title": "GC-MS Analyzer",
    "home.card.gcms.desc":
      "Upload one or many GC-MS runs, get automatic peak identification, quantification against an internal standard, and full reaction metrics — conversion, yield, selectivity, mass balance.",
    "home.card.gcms.status": "Proposal under review",
    "home.card.gcms.cta": "Read the proposal",
    "home.card.fps.title": "FPS Calculator",
    "home.card.fps.desc": "A future module. Not scoped yet.",
    "home.card.fps.cta": "Planned",

    "gcms.eyebrow": "Module proposal",
    "gcms.title": "GC-MS Analyzer",
    "gcms.status.badge": "Proposal — not yet built. This page exists for review, not use.",
    "gcms.lede":
      "This page is the working proposal for the first CatalIza module: a tool that takes raw GC-MS runs and turns them into reaction metrics — conversion, yield, selectivity, mass balance — without manual spreadsheet work. Everything below is open for correction: the workflow, the identification method, and especially the formulas.",

    "gcms.problem.title": "The problem",
    "gcms.problem.body":
      "Each reaction-screening run produces a chromatogram that has to be read manually: find the peaks, match them to known compounds, look up or estimate a response factor, and carry all of that through to conversion, yield and mass balance by hand. It works, but it doesn't scale past a handful of samples, and every manual step is a place where two people would get two different numbers from the same raw file.",

    "gcms.flow.title": "Proposed workflow",
    "gcms.flow.body":
      "Upload one file or many at once — the interface behaves the same either way. A shared configuration at the top applies to every file; each file can still be adjusted individually. Nothing runs automatically: you review a file, then run it.",
    "gcms.flow.step1.title": "1. Upload",
    "gcms.flow.step1.body": "Drop one or several .mzXML files. Each becomes its own block in a list.",
    "gcms.flow.step2.title": "2. Review & run",
    "gcms.flow.step2.body":
      "Set shared defaults once at the top. Each file block can still override them. Click run on a block when it's ready.",
    "gcms.flow.step3.title": "3. Inspect what was inferred",
    "gcms.flow.step3.body":
      "After processing, each block already shows a best guess at substrate, main product, byproducts and internal standard — pulled from the peaks that were identified. Every inferred value is editable right there, and clearly marked as a suggestion until confirmed.",
    "gcms.flow.step4.title": "4. Adjust in detail if needed",
    "gcms.flow.step4.body":
      "Expand a block to see the chromatogram and the full peak table, and adjust integration bounds or a compound assignment for that one file, without touching the shared configuration.",
    "gcms.flow.step5.title": "5. Export",
    "gcms.flow.step5.body": "Download one consolidated file across every run, or export a single run on its own.",
    "gcms.flow.preview.cta": "Open the interactive preview",
    "gcms.flow.preview.note":
      "Built with placeholder data to test the workflow, not the real pipeline. This is the artifact to click through and react to.",

    "gcms.id.title": "How a peak gets identified",
    "gcms.id.body":
      "Each detected peak is matched by retention time against a reference library of known compounds (name, expected RT, response factor, role). When two candidates fall in overlapping RT windows, the closer one wins. A compound not in the library is left unidentified rather than guessed at.",
    "gcms.id.caveat.title": "What this doesn't do yet",
    "gcms.id.caveat.body":
      "Matching by mass spectrum (not just retention time) is designed but not connected — it would raise confidence, especially for compounds whose retention time drifts slightly between runs. Worth discussing whether it's needed for the first version or can wait.",

    "gcms.calc.title": "The calculations",
    "gcms.calc.body":
      "This is the section that most needs a domain expert's eyes. Below is exactly what gets computed and why, so it can be checked against how you actually reason about a reaction screen — not just whether the code runs.",

    "gcms.calc.rrf.title": "Concentration via internal standard",
    "gcms.calc.rrf.body":
      "When a compound has a known relative response factor (RRF), its concentration is derived from the ratio of its peak area to the internal standard's:",
    "gcms.calc.rrf.formula": "C = (A / A_IS) × (1 / RRF) × C_IS",
    "gcms.calc.calib.title": "Concentration via calibration curve",
    "gcms.calc.calib.body": "When a real calibration curve exists for a compound, it's used instead of an assumed RRF:",
    "gcms.calc.calib.formula": "C = ((A/A_IS − b) / m) × C_IS",

    "gcms.calc.noRRF.title": "When there is no RRF or calibration at all",
    "gcms.calc.noRRF.body":
      "Not every compound in a screen has a known response factor — that's the normal case, not an edge case. The proposal is: fall back to RRF = 1 (area ratio treated as concentration ratio), but mark that result explicitly as semi-quantitative, distinct from a calibrated number. A more advanced fallback exists in the literature (Effective Carbon Number, used in flame-ionization detection to estimate response from molecular structure), but it doesn't transfer cleanly to mass spectrometry and shouldn't be presented with the same confidence as real calibration data. Open question: is RRF=1 with a clear semi-quantitative flag good enough for how these numbers get used, or is something more is needed here?",

    "gcms.calc.conv.title": "Substrate conversion",
    "gcms.calc.conv.formula": "X (%) = (C₀ − C_substrate) / C₀ × 100",
    "gcms.calc.yield.title": "Product yield",
    "gcms.calc.yield.formula": "Y (%) = C_product / C_max × 100",
    "gcms.calc.sel.title": "Selectivity",
    "gcms.calc.sel.formula": "S (%) = Y / X × 100",

    "gcms.calc.mb.title": "Mass balance",
    "gcms.calc.mb.formula": "MB (%) = (C_substrate + Σ C_products / ν) / C₀ × 100",
    "gcms.calc.mb.body":
      "This one is worth double-checking specifically: it's normalized against the initial charge (C₀), not the amount consumed. An earlier version of this normalized by the consumed amount instead, which looks fine at high conversion but becomes unstable at low conversion — exactly the range a lot of catalytic screening happens in. Please confirm this is the convention you'd expect a result to be reported in.",

    "gcms.stack.title": "How it would be built",
    "gcms.stack.body":
      "A web app: upload a file, get results back in the browser, nothing to install. Runs on a single computer in the lab to start, with a path to being reachable over the lab network, and to being hosted online later if that's ever needed — without a rebuild. Data stays local by default.",

    "gcms.next.title": "What happens with your feedback",
    "gcms.next.body":
      "Anything here can change: the formulas, the workflow, what counts as 'done'. Once this is validated, real development on the module resumes from an agreed starting point instead of assumptions.",

    "fps.eyebrow": "Module",
    "fps.title": "FPS Calculator",
    "fps.body": "Planned as a future CatalIza module. Not scoped yet — nothing to review here yet.",
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
      "A CatalIza centraliza as ferramentas de processamento de dados usadas na pesquisa em catálise da Dra. Izadora Rhaynna Santos de Menezes — substituindo planilhas manuais e scripts avulsos por uma única plataforma auditável.",
    "home.why.title": "Por que a CatalIza existe",
    "home.why.body":
      "O screening de reações em pesquisa catalítica gera corridas de GC-MS mais rápido do que dá pra processar à mão. Cada transcrição manual de uma área de pico ou tempo de retenção é uma chance de erro — e de perder reprodutibilidade. A CatalIza existe pra tornar esse processamento sistemático: as mesmas regras aplicadas do mesmo jeito em toda corrida, com cada cálculo rastreável até o cromatograma bruto.",
    "home.who.title": "Idealizada pela Dra. Izadora Rhaynna Santos de Menezes",
    "home.who.body":
      "Pesquisadora em catálise, atualmente desenvolvendo fotocatalisadores single-atom. A CatalIza nasceu diretamente do próprio fluxo de trabalho dela no laboratório — moldada pelos gargalos reais de processar séries de screening de reação, não desenhada de forma abstrata.",
    "home.status.title": "Onde isso está agora",
    "home.status.body":
      "Este site hoje documenta a proposta do primeiro módulo (GC-MS Analyzer) pra ser revisada e validada antes de o desenvolvimento continuar. Ainda não é a ferramenta funcionando.",
    "home.modules.title": "Módulos",
    "home.card.gcms.title": "GC-MS Analyzer",
    "home.card.gcms.desc":
      "Suba uma ou várias corridas de GC-MS, tenha identificação automática de picos, quantificação contra padrão interno e as métricas completas da reação — conversão, yield, seletividade, balanço de massa.",
    "home.card.gcms.status": "Proposta em avaliação",
    "home.card.gcms.cta": "Ler a proposta",
    "home.card.fps.title": "FPS Calculator",
    "home.card.fps.desc": "Um módulo futuro. Ainda sem escopo definido.",
    "home.card.fps.cta": "Planejado",

    "gcms.eyebrow": "Proposta de módulo",
    "gcms.title": "GC-MS Analyzer",
    "gcms.status.badge": "Proposta — ainda não construída. Esta página existe pra revisão, não pra uso.",
    "gcms.lede":
      "Esta página é a proposta de trabalho do primeiro módulo da CatalIza: uma ferramenta que pega corridas brutas de GC-MS e transforma em métricas de reação — conversão, yield, seletividade, balanço de massa — sem trabalho manual de planilha. Tudo abaixo está aberto a correção: o fluxo, o método de identificação, e principalmente as fórmulas.",

    "gcms.problem.title": "O problema",
    "gcms.problem.body":
      "Cada corrida de screening de reação produz um cromatograma que precisa ser lido manualmente: achar os picos, associar a compostos conhecidos, buscar ou estimar um fator de resposta, e carregar tudo isso até conversão, yield e balanço de massa à mão. Funciona, mas não escala além de um punhado de amostras, e cada passo manual é um lugar onde duas pessoas tirariam dois números diferentes do mesmo arquivo bruto.",

    "gcms.flow.title": "Fluxo proposto",
    "gcms.flow.body":
      "Suba um arquivo ou vários de uma vez — a interface se comporta igual nos dois casos. Uma configuração compartilhada no topo se aplica a todos os arquivos; cada um ainda pode ser ajustado individualmente. Nada roda automaticamente: você revisa um arquivo, depois roda.",
    "gcms.flow.step1.title": "1. Upload",
    "gcms.flow.step1.body": "Solte um ou vários arquivos .mzXML. Cada um vira um bloco próprio numa lista.",
    "gcms.flow.step2.title": "2. Revisar e rodar",
    "gcms.flow.step2.body":
      "Defina os padrões compartilhados uma vez, no topo. Cada bloco de arquivo ainda pode sobrescrever. Clique em rodar num bloco quando estiver pronto.",
    "gcms.flow.step3.title": "3. Conferir o que foi inferido",
    "gcms.flow.step3.body":
      "Depois de processar, cada bloco já mostra um palpite de substrato, produto principal, subprodutos e padrão interno — tirado dos picos identificados. Todo valor inferido é editável ali mesmo, e claramente marcado como sugestão até ser confirmado.",
    "gcms.flow.step4.title": "4. Ajustar em detalhe se precisar",
    "gcms.flow.step4.body":
      "Expanda um bloco pra ver o cromatograma e a tabela completa de picos, e ajuste limites de integração ou a atribuição de um composto só naquele arquivo, sem mexer na configuração compartilhada.",
    "gcms.flow.step5.title": "5. Exportar",
    "gcms.flow.step5.body": "Baixe um arquivo consolidado de todas as corridas, ou exporte uma corrida individual.",
    "gcms.flow.preview.cta": "Abrir a prévia interativa",
    "gcms.flow.preview.note":
      "Construída com dados fictícios pra testar o fluxo, não o pipeline real. É o artefato pra clicar e reagir.",

    "gcms.id.title": "Como um pico é identificado",
    "gcms.id.body":
      "Cada pico detectado é comparado por tempo de retenção com uma biblioteca de referência de compostos conhecidos (nome, RT esperado, fator de resposta, papel). Quando dois candidatos caem em janelas de RT sobrepostas, o mais próximo vence. Um composto fora da biblioteca fica sem identificação em vez de ser chutado.",
    "gcms.id.caveat.title": "O que isso ainda não faz",
    "gcms.id.caveat.body":
      "Matching por espectro de massa (não só tempo de retenção) está desenhado mas não conectado — aumentaria a confiança, principalmente pra compostos cujo RT varia um pouco entre corridas. Vale discutir se isso é necessário pra primeira versão ou pode esperar.",

    "gcms.calc.title": "Os cálculos",
    "gcms.calc.body":
      "Esta é a seção que mais precisa do olhar de uma especialista do domínio. Abaixo está exatamente o que é calculado e por quê, pra poder ser conferido contra como você de fato raciocina sobre um screening de reação — não só se o código roda.",

    "gcms.calc.rrf.title": "Concentração via padrão interno",
    "gcms.calc.rrf.body":
      "Quando um composto tem um fator de resposta relativa (RRF) conhecido, a concentração é derivada da razão entre a área do pico e a do padrão interno:",
    "gcms.calc.rrf.formula": "C = (A / A_IS) × (1 / RRF) × C_IS",
    "gcms.calc.calib.title": "Concentração via curva de calibração",
    "gcms.calc.calib.body": "Quando existe uma curva de calibração real pra um composto, ela é usada em vez de um RRF assumido:",
    "gcms.calc.calib.formula": "C = ((A/A_IS − b) / m) × C_IS",

    "gcms.calc.noRRF.title": "Quando não há RRF nem calibração nenhuma",
    "gcms.calc.noRRF.body":
      "Nem todo composto num screening tem fator de resposta conhecido — esse é o caso normal, não a exceção. A proposta é: cair pra RRF = 1 (razão de área tratada como razão de concentração), mas marcar esse resultado explicitamente como semi-quantitativo, diferente de um número calibrado. Existe um fallback mais avançado na literatura (Effective Carbon Number, usado em detecção por ionização de chama pra estimar resposta a partir da estrutura molecular), mas ele não se aplica diretamente a espectrometria de massa e não deveria ser apresentado com a mesma confiança de um dado de calibração real. Pergunta em aberto: RRF=1 com um sinalizador claro de semi-quantitativo é suficiente pro jeito que esses números vão ser usados, ou precisa de algo mais aqui?",

    "gcms.calc.conv.title": "Conversão do substrato",
    "gcms.calc.conv.formula": "X (%) = (C₀ − C_substrato) / C₀ × 100",
    "gcms.calc.yield.title": "Yield do produto",
    "gcms.calc.yield.formula": "Y (%) = C_produto / C_max × 100",
    "gcms.calc.sel.title": "Seletividade",
    "gcms.calc.sel.formula": "S (%) = Y / X × 100",

    "gcms.calc.mb.title": "Balanço de massa",
    "gcms.calc.mb.formula": "MB (%) = (C_substrato + Σ C_produtos / ν) / C₀ × 100",
    "gcms.calc.mb.body":
      "Esse vale conferir com atenção especial: é normalizado pela carga inicial (C₀), não pela quantidade consumida. Uma versão anterior normalizava pelo consumido, o que parece bem em conversão alta mas fica instável em conversão baixa — exatamente a faixa onde acontece boa parte do screening catalítico. Por favor confirme se essa é a convenção que você esperaria ver num resultado reportado.",

    "gcms.stack.title": "Como seria construído",
    "gcms.stack.body":
      "Um aplicativo web: sobe um arquivo, o resultado volta no navegador, nada pra instalar. Roda num único computador do laboratório pra começar, com caminho pra ficar acessível pela rede do lab, e pra ser hospedado online depois se um dia precisar — sem reconstrução. Os dados ficam locais por padrão.",

    "gcms.next.title": "O que acontece com o seu retorno",
    "gcms.next.body":
      "Qualquer coisa aqui pode mudar: as fórmulas, o fluxo, o que conta como 'pronto'. Depois de validado isso, o desenvolvimento de verdade do módulo retoma de um ponto de partida combinado, em vez de suposições.",

    "fps.eyebrow": "Módulo",
    "fps.title": "FPS Calculator",
    "fps.body": "Planejado como um módulo futuro da CatalIza. Ainda sem escopo definido — nada pra revisar aqui ainda.",
    "fps.back": "Voltar ao Início",

    "contact.eyebrow": "Fale conosco",
    "contact.title": "Contato",
    "contact.body": "Dúvidas sobre esta proposta, ou sobre a CatalIza em geral.",
    "contact.emailPending": "Canal de contato a ser adicionado.",

    "footer.rights": "Todos os direitos reservados.",
  },
} as const;
