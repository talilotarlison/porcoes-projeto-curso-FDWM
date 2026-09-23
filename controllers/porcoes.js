import { randomUUID } from 'crypto';

let minhasPorcoes = [];

// lista todas as porções
export const getPorcoes = (req, res) => {
    res.status(200).json(minhasPorcoes);
};

// permitir que o usuário adicione uma nova porção
export const addPorcao = (req, res) => {
    const id = randomUUID();
    const { nome, calorias, descricao } = req.body;
    const novaPorcao = {
        id: id,
        nome: nome,
        calorias: calorias,
        descricao: descricao
    };
    
    minhasPorcoes.push(novaPorcao);
    res.status(201).json({ id, nome, calorias, descricao });
};

// atualizar uma porção existente
export const updatePorcao = (req, res) => {
  const id = req.params.id;
  const { nome, calorias, descricao } = req.body;
  const porcaoIndex = minhasPorcoes.findIndex(p => p.id === id);

  if (porcaoIndex !== -1) {
    minhasPorcoes[porcaoIndex] = { ...minhasPorcoes[porcaoIndex], nome, calorias, descricao };
    res.status(200).json(minhasPorcoes[porcaoIndex]);
  } else {
    res.status(404).json({ message: 'Porção não encontrada' });
  }
};

// permitir que o usuário delete uma porção existente
export const deletePorcao = (req, res) => {
  const id = req.params.id;
  const porcaoIndex = minhasPorcoes.findIndex(p => p.id === id);

  if (porcaoIndex !== -1) {
    minhasPorcoes.splice(porcaoIndex, 1);
    res.status(200).json({ message: 'Porção deletada com sucesso' });
  } else {
    res.status(404).json({ message: 'Porção não encontrada' });
  }
};
