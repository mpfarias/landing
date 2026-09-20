# Marcelo Pires de Farias

Landing profissional. A série **Pequenos Negócios com IA** fica em rotas próprias.

## Como executar

```bash
npm install
npm run dev
```

- Profissional: [http://localhost:3000](http://localhost:3000)
- Série PT: [http://localhost:3000/pt-br](http://localhost:3000/pt-br)
- Série EN: `/en`
- Série ES: `/es`

## Hotmart

Copie `.env.example` para `.env.local`. Cada idioma da série tem a própria URL de checkout. Sem valor, o botão de compra não aparece.

## Imagens do portfólio profissional

Coloque previews em `public/projects/<slug>/cover.webp` e preencha `coverImage` em `src/professional/data/portfolio.ts`. Sem arquivo real, deixe `coverImage: null`.
