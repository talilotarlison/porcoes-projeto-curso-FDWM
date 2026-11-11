# Tarefas e próximos passos

Este arquivo registra pendências identificadas na implementação atual. Os itens abaixo são sugestões de trabalho, não compromissos ou funcionalidades já disponíveis.

## Backlog

- [ ] Definir e implementar validação do corpo de criação e atualização (`nome`, `calorias` e `descricao`), incluindo respostas `400` consistentes.
- [ ] Adicionar middleware de tratamento de erros para falhas assíncronas e do SQLite, sem expor detalhes internos ao cliente.
- [ ] Criar testes automatizados para as rotas e para as operações do model; substituir o placeholder de `npm test` quando houver uma suíte.
- [ ] Permitir configurar a porta por variável de ambiente, mantendo `3000` como padrão, se isso for necessário ao ambiente de execução.
- [ ] Documentar e automatizar o processo de backup/restauração do banco para o ambiente de destino.

## Concluído na implementação existente

- [x] Implementar operações CRUD de porções com Express e SQLite.
- [x] Gerar UUID para novas porções.
- [x] Usar parâmetros nas consultas SQL que recebem valores.

## Atualização

Ao iniciar ou concluir um item, registre o estado e, se apropriado, a referência ao commit ou pull request. Não marque uma tarefa como concluída apenas porque foi planejada ou documentada.