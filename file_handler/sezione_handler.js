import * as fileUtils from "../utils/file_utils.js";

export function riordinaSezione(body) { }

export function aggiungiSezione(body) {
    let jsonFile = fileUtils.recuperaDocumento();
    body.posizione = recuperaUltimaPosizione(jsonFile);
    body.listaProdotti = [];
    jsonFile.push(body);
    fileUtils.scriviDocumento(jsonFile);
}

export function rimuoviSezione(body) {
    let jsonFile = fileUtils.recuperaDocumento();
    let nuovoJsonFile = jsonFile.filter(sezione => sezione.posizione != body.posizione);
    fileUtils.scriviDocumento(nuovoJsonFile);
}

function recuperaUltimaPosizione(jsonFile) {
    return jsonFile.flatMap(sezione => sezione.posizione).at(-1);
}