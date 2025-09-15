import express from "express";
import * as prodotto_handler from "../file_handler/prodotto_handler.js";

const router = express.Router();

export default router;

router.put('/aggiungi', (req, res) => {
    res.send(prodotto_handler.aggiungiProdotto(req.body));
});

router.delete('/rimuovi', (req, res) => {
    res.send(prodotto_handler.rimuoviProdotto(req.body));
});

router.post('/modifica', (req,res) => {
    res.send(prodotto_handler.modificaProdotto(req.body));
})