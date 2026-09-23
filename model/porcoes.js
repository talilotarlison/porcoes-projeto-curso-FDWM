import sqlite3 from 'sqlite3';
import { randomUUID } from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const { Database } = sqlite3.verbose();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const databasePath = path.join(__dirname, '..', 'database', 'porcoes.db');
const database = new Database(databasePath);

// Funções auxiliares para executar consultas no banco de dados
const run = (sql, parameters = []) => new Promise((resolve, reject) => {
  database.run(sql, parameters, function onRun(error) {
    if (error) {
      reject(error);
      return;
    }

    resolve({ id: this.lastID, changes: this.changes });
  });
});

// Função auxiliar para obter todas as linhas de uma consulta no banco de dados
const all = (sql, parameters = []) => new Promise((resolve, reject) => {
  database.all(sql, parameters, (error, rows) => {
    if (error) {
      reject(error);
      return;
    }

    resolve(rows);
  });
});

// Função para criar a tabela de porções no banco de dados, caso ela não exista
export const databaseReady = run(`
  CREATE TABLE IF NOT EXISTS porcoes (
    id TEXT PRIMARY KEY,
    nome TEXT NOT NULL,
    calorias INTEGER NOT NULL,
    descricao TEXT NOT NULL
  )
`);

// Funções para listar porções no banco de dados
export const listPorcoes = async () => {
  await databaseReady;
  return all('SELECT id, nome, calorias, descricao FROM porcoes ORDER BY rowid');
};

// Função para buscar uma porção pelo ID
export const getPorcaoById = async (id) => {
  await databaseReady;
  const porcoes = await all(
    'SELECT id, nome, calorias, descricao FROM porcoes WHERE id = ?',
    [id]
  );
  return porcoes[0] || null;
};

// Funções para criar, atualizar e deletar porções no banco de dados
export const createPorcao = async ({ nome, calorias, descricao }) => {
  await databaseReady;
  const porcao = { id: randomUUID(), nome, calorias, descricao };
  await run(
    'INSERT INTO porcoes (id, nome, calorias, descricao) VALUES (?, ?, ?, ?)',
    [porcao.id, porcao.nome, porcao.calorias, porcao.descricao]
  );
  return porcao;
};

// Funções para atualizar e deletar porções no banco de dados
export const updatePorcao = async (id, { nome, calorias, descricao }) => {
  await databaseReady;
  const result = await run(
    'UPDATE porcoes SET nome = ?, calorias = ?, descricao = ? WHERE id = ?',
    [nome, calorias, descricao, id]
  );

  if (result.changes === 0) {
    return null;
  }

  const porcoes = await all(
    'SELECT id, nome, calorias, descricao FROM porcoes WHERE id = ?',
    [id]
  );
  return porcoes[0];
};

// Função para deletar uma porção no banco de dados
export const deletePorcao = async (id) => {
  await databaseReady;
  const result = await run('DELETE FROM porcoes WHERE id = ?', [id]);
  return result.changes > 0;
};