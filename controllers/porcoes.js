import {
  createPorcao,
  deletePorcao as removePorcao,
  getPorcaoById,
  listPorcoes,
  updatePorcao as savePorcao
} from '../model/porcoes.js';

// lista todas as porções
export const getPorcoes = async (req, res) => {
  const porcoes = await listPorcoes();
  res.status(200).json(porcoes);
};

// Permitir que o usuário busque uma porção pelo ID
export const getPorcao = async (req, res) => {
  const porcao = await getPorcaoById(req.params.id);

  if (porcao) {
    res.status(200).json(porcao);
  } else {
    res.status(404).json({ message: 'Porção não encontrada' });
  }
};

// permitir que o usuário adicione uma nova porção
export const addPorcao = async (req, res) => {
  const novaPorcao = await createPorcao(req.body);
  res.status(201).json(novaPorcao);
};

// atualizar uma porção existente
export const updatePorcao = async (req, res) => {
  const id = req.params.id;
  const porcaoAtualizada = await savePorcao(id, req.body);

  if (porcaoAtualizada) {
    res.status(200).json(porcaoAtualizada);
  } else {
    res.status(404).json({ message: 'Porção não encontrada' });
  }
};

// permitir que o usuário delete uma porção existente
export const deletePorcao = async (req, res) => {
  const id = req.params.id;
  const foiExcluida = await removePorcao(id);

  if (foiExcluida) {
    res.status(200).json({ message: 'Porção deletada com sucesso' });
  } else {
    res.status(404).json({ message: 'Porção não encontrada' });
  }
};
