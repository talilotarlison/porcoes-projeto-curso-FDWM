# Estado do projeto

**Verificado em:** 10/11/2026

## Implementado

- Servidor Express 5 em `server.js`, com parse de JSON e formulários.
- Endpoints para listar, consultar por ID, criar, atualizar e excluir porções.
- Persistência SQLite com criação da tabela `porcoes` e consultas parametrizadas.
- UUID gerado na criação da porção.
- Respostas `404` para ID inexistente em consulta, atualização e exclusão.

## Limitações observadas

- Não há validação de entrada dedicada nem esquema de validação.
- Não há middleware centralizado de tratamento de erros ou formato padronizado para erros de servidor.
- A porta é constante (`3000`), sem configuração por ambiente.
- Não há testes funcionais implementados; `npm test` é um placeholder que retorna erro.
- Não há configuração de implantação, migrações ou backup automático.
- Não há autenticação, autorização, paginação ou filtros.

## Como manter este documento

Atualize a data e as listas quando a implementação mudar. Registre aqui o estado observado no código, não funcionalidades apenas planejadas. Use `TASKS.md` para pendências e propostas de próximos passos.