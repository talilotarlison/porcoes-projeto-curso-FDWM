import express from 'express';
import porcoesRoutes from './routes/porcoes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usar rotas
app.use('/', porcoesRoutes);

// Servidor ouvindo na porta 3000
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
