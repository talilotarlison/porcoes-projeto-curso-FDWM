import express from 'express';
import { getPorcao, getPorcoes, addPorcao, updatePorcao, deletePorcao } from '../controllers/porcoes.js';

const router = express.Router();

router.get('/porcoes', getPorcoes);
router.get('/porcoes/:id', getPorcao);
router.post('/porcoes', addPorcao);
router.put('/porcoes/:id', updatePorcao);
router.delete('/porcoes/:id', deletePorcao);

export default router;
