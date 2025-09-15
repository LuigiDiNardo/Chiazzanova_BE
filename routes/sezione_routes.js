import express from "express";
import * as sezione_handler from "../file_handler/sezione_handler.js";

const router = express.Router();

export default router;

router.post("/riordina", (req) => {
    sezione_handler.riordinaSezione(req.body);
})

router.post("/aggiungi", (req) => {
    sezione_handler.aggiungiSezione(req.body);
})

router.post("/rimuovi", (req) => {
    sezione_handler.rimuoviSezione(req.body);
})