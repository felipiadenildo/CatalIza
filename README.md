# CatalIza

Site institucional da CatalIza — plataforma de automação de dados de laboratório da Dra. Izadora Rhaynna Santos de Menezes.

Este repositório é só a "vitrine": explica a proposta e direciona para as soluções, que vivem em repositórios separados (ex: [`cataliza-gcms-analyzer`](https://github.com/felipiadenildo/cataliza-gcms-analyzer)).

## Status atual

A página do GC-MS Analyzer hoje é **material de proposta**, não a ferramenta funcionando — cobre o problema, o fluxo de uso proposto, o método de identificação, e as fórmulas de quantificação, para revisão e validação com a cliente antes do desenvolvimento continuar.

## Stack

Astro 7 + Tailwind CSS v4, conteúdo bilíngue (EN padrão / PT-BR via `i18n` nativo do Astro), fontes self-hosted via `@fontsource`. Mesma stack do [`site-izadora`](https://github.com/felipiadenildo/site-izadora), por consistência.

## Desenvolvimento

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # gera ./dist
npm run preview   # serve o build de produção localmente
npm run astro check   # typecheck dos arquivos .astro
```

## Estrutura

```text
/
├── public/                    favicon
├── src/
│   ├── components/
│   │   ├── pages/              conteúdo de cada página (resolve idioma pela URL)
│   │   ├── Header.astro, Footer.astro, LangToggle.astro, ThemeToggle.astro
│   ├── i18n/                   ui.ts (dicionário EN/PT) + utils.ts (helpers de rota)
│   ├── layouts/BaseLayout.astro
│   ├── styles/global.css       tokens de tema (claro/escuro) + identidade visual
│   └── pages/
│       ├── *.astro              rotas em inglês (padrão, sem prefixo)
│       └── pt/*.astro           rotas em português (prefixo "/pt/")
```

## Identidade visual

Wordmark "**Catal**" (Playfair Display, azul) + "**Iza**" (Dancing Script, vermelho) — referência embutida ao nome da Dra. Izadora. Ver `src/styles/global.css` para os tokens de cor completos.
