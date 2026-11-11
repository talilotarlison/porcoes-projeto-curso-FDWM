# Arquitetura

## Visão geral

A aplicação é um serviço Node.js com módulos ES (ESM), Express 5 e persistência SQLite. O fluxo segue uma arquitetura MVC adaptada a uma API sem camada de views:

```text
Cliente HTTP
    ↓
server.js (Express e middlewares)
    ↓
routes/porcoes.js (método e caminho)
    ↓
controllers/porcoes.js (requisição e resposta HTTP)
    ↓
model/porcoes.js (operações SQLite)
    ↓
database/porcoes.db
```

## Componentes

- `server.js`: cria a aplicação Express, habilita o parse de JSON e de formulários, monta as rotas e inicia o servidor na porta `3000`.
- `routes/porcoes.js`: associa os cinco endpoints às funções do controller.
- `controllers/porcoes.js`: chama as operações do model e determina os status HTTP e os corpos JSON.
- `model/porcoes.js`: abre o banco, garante a criação da tabela e executa consultas para listar, buscar, inserir, atualizar e excluir.
- `database/porcoes.db`: arquivo SQLite criado/aberto pelo model. O diretório `database` precisa existir.

## Rotas e handlers

| Rota | Handler do controller | Operação do model |
| --- | --- | --- |
| `GET /porcoes` | `getPorcoes` | `listPorcoes` |
| `GET /porcoes/:id` | `getPorcao` | `getPorcaoById` |
| `POST /porcoes` | `addPorcao` | `createPorcao` |
| `PUT /porcoes/:id` | `updatePorcao` | `updatePorcao` |
| `DELETE /porcoes/:id` | `deletePorcao` | `deletePorcao` |

## Persistência e fluxo de inicialização

O model constrói o caminho do banco relativo ao próprio arquivo, sem depender do diretório de onde o processo Node foi iniciado. A criação da tabela `porcoes` é iniciada pelo model e cada operação aguarda essa inicialização antes de consultar o banco.

As consultas que recebem valores usam parâmetros SQLite (`?`). O identificador é criado com `randomUUID()` no momento da inserção.

## Tratamento de erros

O código atual não define middleware centralizado de erros nem validação de payload. Erros assíncronos ou de banco não devem ser considerados respostas tratadas por um contrato público padronizado. Consulte `TASKS.md` para pendências identificadas.