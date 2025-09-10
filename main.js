import express from "express";
import * as fileHandler from "./file_handler/file_handler.js";

const app = express();

const port = 9099;

//permetto di leggere il json del body
app.use(express.json());

//dichiaro un mio restEndpoint
app.put('/aggiungiProdotto', (req, res) => {
    res.send(fileHandler.aggiungiProdotto(req.body));
});

app.delete('/rimuoviProdotto', (req, res) => {
    res.send(fileHandler.rimuoviProdotto(req.body));
});

//metto il server in ascolto
app.listen(port, () => {console.log("SERVER AVVIATO")});