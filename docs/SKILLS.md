# Tecnologias e conhecimentos do projeto

Este documento descreve as tecnologias usadas e os conhecimentos úteis para contribuir. Ele não representa uma lista de dependências adicionais nem indica que exista uma ferramenta de skills instalada no repositório.

## Stack

| Tecnologia | Uso no projeto |
| --- | --- |
| Node.js | Ambiente de execução |
| JavaScript ESM | Módulos importados/exportados com `import` e `export` |
| Express 5 | Servidor HTTP, middlewares e rotas |
| SQLite (`sqlite3`) | Persistência local de porções |
| npm | Instalação de dependências e execução de `npm run dev` |

As dependências de runtime estão declaradas em `package.json`.

## Conhecimentos recomendados

- JavaScript assíncrono, Promises e `async`/`await`.
- APIs REST, métodos HTTP, status codes e JSON.
- Express: middleware, `req`, `res` e `express.Router`.
- SQL básico e SQLite, incluindo consultas parametrizadas.
- Git e Markdown para alterações e documentação.

## Convenções de contribuição

- Respeite a separação entre rotas, controllers e model descrita em `ARCHITECTURE.md`.
- Preserve o contrato existente da API, salvo solicitação explícita de mudança.
- Evite montar SQL com concatenação de valores; use parâmetros.
- Ao alterar comportamento, atualize os documentos relacionados e o estado em `PROJECT_STATUS.md`.
- Consulte `DEPLOYMENT.MD` antes de assumir que há configuração de produção ou testes prontos.