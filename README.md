# API de Porções

Projeto de uma API REST para cadastro e gerenciamento de porções alimentares. A aplicação permite listar, adicionar, atualizar e excluir porções, armazenando informações como nome, quantidade de calorias e descrição.

## Arquitetura

O projeto utiliza uma arquitetura **MVC (Model-View-Controller)**, adaptada para uma API REST:

- **Rotas:** definem os endpoints e direcionam as requisições.
- **Controllers:** concentram as regras de negócio e o tratamento das respostas.
- **Model/Banco de dados:** responsável pela persistência das porções em um banco **SQLite**.

Como a aplicação fornece uma API, não há uma camada de views tradicional. As respostas são retornadas no formato JSON.

> **Observação:** a integração com o SQLite faz parte da camada de persistência planejada. Na implementação atual, as porções ainda são mantidas em memória durante a execução do servidor.

## Tecnologias

- Node.js
- Express
- SQLite
- JavaScript com módulos ES (ESM)

## Endpoints

| Método | Rota | Descrição |
| --- | --- | --- |
| GET | `/porcoes` | Lista todas as porções |
| POST | `/porcoes` | Cadastra uma nova porção |
| PUT | `/porcoes/:id` | Atualiza uma porção existente |
| DELETE | `/porcoes/:id` | Exclui uma porção |

## Como executar

Instale as dependências e inicie o servidor:

```bash
npm install
npm run dev
```

A API ficará disponível em `http://localhost:3000`.
