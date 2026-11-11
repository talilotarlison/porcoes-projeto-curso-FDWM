
# Execução e implantação

## Requisitos

- Node.js e npm instalados.
- Acesso de escrita à pasta `database` do projeto para criação e atualização do arquivo SQLite.
- A porta TCP `3000` disponível para o servidor.

O repositório não fixa uma versão mínima do Node.js. Use uma versão compatível com as versões instaladas de Express e `sqlite3`.

## Execução local

Na raiz do repositório:

```sh
npm install
npm run dev
```

O servidor informa no console que está ouvindo em `http://localhost:3000`. Para encerrar, interrompa o processo no terminal.

Exemplo de verificação:

```sh
curl http://localhost:3000/porcoes
```

## Configuração atual

- A porta está fixada em `3000` em `server.js`; não há configuração por variável de ambiente.
- O caminho do banco é relativo ao arquivo do model: `database/porcoes.db`.
- O projeto não define script `start`, contêiner, serviço de processo, proxy reverso, TLS ou pipeline de implantação.
- O script `npm test` é apenas um placeholder e falha intencionalmente com “no test specified”; não é uma suíte de testes.

## Considerações para produção

Antes de disponibilizar publicamente, defina e documente um processo de implantação compatível com o ambiente escolhido. Considere configurar porta e diretório de dados, persistência de volume para o SQLite, backups, logs, monitoramento, HTTPS, validação de entradas e tratamento de erros. Esses recursos não estão configurados pelo projeto atualmente.