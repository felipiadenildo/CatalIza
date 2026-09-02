# CatalIza

[English](#english) · [Português](#português)

## English

Institutional site for CatalIza, a lab data automation platform built for Dr. Izadora Rhaynna Santos de Menezes. This repository is the "storefront" only. It explains the proposal and points to the actual solutions, which live in separate repositories (for example [`cataliza-gcms-analyzer`](https://github.com/felipiadenildo/cataliza-gcms-analyzer)).

### Current status

The GC-MS Analyzer page is proposal material for now, not the working tool. It covers the problem, the proposed usage flow, the identification method and the quantification formulas, meant for review and validation with the client before development continues.

### Stack

Astro 7 with Tailwind CSS v4. Bilingual content (English by default, Portuguese via Astro's native `i18n`), fonts self-hosted through `@fontsource`. Same stack as [`site-izadora`](https://github.com/felipiadenildo/site-izadora), kept consistent on purpose.

### Development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
npm run preview   # serves the production build locally
npm run astro check   # typechecks .astro files
```

### Structure

```text
/
├── public/                    favicon
├── src/
│   ├── components/
│   │   ├── pages/              per-page content (language resolved from the URL)
│   │   ├── Header.astro, Footer.astro, LangToggle.astro, ThemeToggle.astro
│   ├── i18n/                   ui.ts (EN/PT dictionary) + utils.ts (route helpers)
│   ├── layouts/BaseLayout.astro
│   ├── styles/global.css       theme tokens (light/dark) and visual identity
│   └── pages/
│       ├── *.astro              English routes (default, no prefix)
│       └── pt/*.astro           Portuguese routes (prefixed "/pt/")
```

### Visual identity

The wordmark pairs "**Catal**" (Playfair Display, blue) with "**Iza**" (Dancing Script, red), a built-in nod to Dr. Izadora's name. See `src/styles/global.css` for the full color tokens.

---

## Português

Site institucional da CatalIza, plataforma de automação de dados de laboratório da Dra. Izadora Rhaynna Santos de Menezes. Este repositório é só a "vitrine": explica a proposta e direciona para as soluções de verdade, que vivem em repositórios separados (por exemplo [`cataliza-gcms-analyzer`](https://github.com/felipiadenildo/cataliza-gcms-analyzer)).

### Status atual

A página do GC-MS Analyzer hoje é material de proposta, não a ferramenta funcionando. Cobre o problema, o fluxo de uso proposto, o método de identificação e as fórmulas de quantificação, para revisão e validação com a cliente antes do desenvolvimento continuar.

### Stack

Astro 7 com Tailwind CSS v4. Conteúdo bilíngue (inglês padrão, português via `i18n` nativo do Astro), fontes self-hosted via `@fontsource`. Mesma stack do [`site-izadora`](https://github.com/felipiadenildo/site-izadora), mantida consistente de propósito.

### Desenvolvimento

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # gera ./dist
npm run preview   # serve o build de produção localmente
npm run astro check   # typecheck dos arquivos .astro
```

### Estrutura

```text
/
├── public/                    favicon
├── src/
│   ├── components/
│   │   ├── pages/              conteúdo de cada página (resolve idioma pela URL)
│   │   ├── Header.astro, Footer.astro, LangToggle.astro, ThemeToggle.astro
│   ├── i18n/                   ui.ts (dicionário EN/PT) + utils.ts (helpers de rota)
│   ├── layouts/BaseLayout.astro
│   ├── styles/global.css       tokens de tema (claro/escuro) e identidade visual
│   └── pages/
│       ├── *.astro              rotas em inglês (padrão, sem prefixo)
│       └── pt/*.astro           rotas em português (prefixo "/pt/")
```

### Identidade visual

O wordmark une "**Catal**" (Playfair Display, azul) com "**Iza**" (Dancing Script, vermelho), uma referência embutida ao nome da Dra. Izadora. Veja `src/styles/global.css` para os tokens de cor completos.
