# Banco de dados

## Tecnologia e localização

A aplicação usa SQLite por meio do pacote `sqlite3`. O arquivo padrão é `database/porcoes.db`, calculado em `model/porcoes.js` como caminho relativo ao diretório do model. A pasta `database` deve existir antes de iniciar a aplicação.

O arquivo `.db` está ignorado pelo Git conforme `.gitignore`; portanto, os dados locais não são incluídos nos commits. Um novo banco é criado quando a aplicação executa a instrução de criação da tabela e o arquivo ainda não existe.

## Esquema

```sql
CREATE TABLE IF NOT EXISTS porcoes (
  id TEXT PRIMARY KEY,
  nome TEXT NOT NULL,
  calorias INTEGER NOT NULL,
  descricao TEXT NOT NULL
)
```

| Coluna | Tipo | Restrições | Uso |
| --- | --- | --- | --- |
| `id` | `TEXT` | chave primária | UUID gerado pela aplicação |
| `nome` | `TEXT` | `NOT NULL` | Nome da porção |
| `calorias` | `INTEGER` | `NOT NULL` | Calorias informadas |
| `descricao` | `TEXT` | `NOT NULL` | Descrição informada |

## Operações

- Listagem: seleciona os quatro campos e ordena por `rowid`, preservando a ordem de inserção.
- Busca: seleciona pela chave `id`.
- Criação: insere `id`, `nome`, `calorias` e `descricao`.
- Atualização: substitui os três campos editáveis para o `id` informado.
- Exclusão: remove a linha pelo `id`.

Os valores são passados como parâmetros às consultas, em vez de concatenados ao SQL.

## Cópia e restauração

Para preservar os dados, faça backup do arquivo `database/porcoes.db` com o processo da sua infraestrutura e restaure-o no mesmo caminho, mantendo a pasta `database` existente. Antes de copiar ou restaurar em produção, pare a aplicação ou use um procedimento de backup consistente com SQLite.

Não há migrações versionadas nem rotina automática de backup implementadas no projeto.