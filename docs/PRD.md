# PRD — API de Porções

## Visão geral

API REST para cadastrar e gerenciar porções alimentares. Cada registro contém nome, calorias e descrição; a API gera um identificador único para cada porção e persiste os dados em SQLite.

## Objetivos

- Permitir consultar porções cadastradas.
- Permitir criar, atualizar e excluir porções.
- Manter os dados entre reinicializações do servidor usando SQLite.
- Expor os recursos em JSON por meio de endpoints HTTP.

## Usuários e uso esperado

O consumidor é qualquer aplicação cliente que precise manter um catálogo simples de porções. A API não possui interface gráfica nem autenticação implementadas.

## Recurso: porção

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `id` | string (UUID) | Identificador gerado pelo servidor |
| `nome` | string | Nome da porção |
| `calorias` | inteiro | Quantidade de calorias |
| `descricao` | string | Descrição da porção |

O cliente envia `nome`, `calorias` e `descricao` ao criar ou atualizar. O `id` é gerado pelo servidor na criação.

## Contrato HTTP atual

| Método | Caminho | Resultado esperado |
| --- | --- | --- |
| `GET` | `/porcoes` | `200` e uma lista JSON, ordenada pela ordem de inserção |
| `GET` | `/porcoes/:id` | `200` e uma porção; `404` se o ID não existir |
| `POST` | `/porcoes` | `201` e a porção criada, incluindo o ID |
| `PUT` | `/porcoes/:id` | `200` e a porção atualizada; `404` se o ID não existir |
| `DELETE` | `/porcoes/:id` | `200` com mensagem de confirmação; `404` se o ID não existir |

Os endpoints estão montados na raiz. As respostas e requisições usam JSON; o servidor também aceita corpos `application/x-www-form-urlencoded`.

## Critérios de aceite

- As cinco operações acima ficam disponíveis sob `/porcoes`.
- Dados criados são persistidos no banco SQLite local.
- Um ID inexistente em busca, atualização ou exclusão resulta em `404`.
- A criação retorna um UUID e os campos da porção criada.

## Limites e itens fora do escopo atual

- Autenticação e autorização.
- Interface web.
- Paginação, filtros e busca por campos.
- Validação de entrada com mensagens de erro padronizadas.
- Configuração de implantação em nuvem.

Esses itens não devem ser considerados implementados apenas por estarem listados neste documento.