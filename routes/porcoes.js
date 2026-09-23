import express from 'express';
import { getPorcoes ,addPorcao, updatePorcao, deletePorcao } from '../controllers/porcoes.js';

const router = express.Router();

router.get('/porcoes', getPorcoes);
router.post('/porcoes', addPorcao);
router.put('/porcoes/:id', updatePorcao);
router.delete('/porcoes/:id', deletePorcao);

export default router;
