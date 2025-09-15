import * as fileUtils from "../utils/file_utils.js";

export function aggiungiProdotto(body) {
    let jsonFile = fileUtils.recuperaDocumento();

    let sezione = jsonFile.find(obj => body.sezione == obj.nomeSezione);
    if (sezione != null && sezione != "") {
        for (let prodotto of body.listaProdotti) {
            prodotto.idProdotto = idGenerator(jsonFile);
            sezione.listaProdotti.push(prodotto);
        }
        fileUtils.scriviDocumento(jsonFile);

        //cambiare i tipi di ritorno
        return sezione;
    }
    //cambiare i tipi di ritorno
    return null;
}

export function rimuoviProdotto(body) {
    let jsonFile = fileUtils.recuperaDocumento();

    let nuovoJsonFile = jsonFile.map(sezione => {
        sezione.listaProdotti.find(prodotto => prodotto.idProdotto == body.idProdotto)
    });
    fileUtils.scriviDocumento(nuovoJsonFile);
}

export function modificaProdotto(body) {
    let jsonFile = fileUtils.recuperaDocumento();

    let prodottoDaModificare = jsonFile.flatMap(sezione => sezione.listaProdotti)
    .find(prodotto => prodotto.idProdotto == body.idProdotto);

    if (body.nomeProdotto !== null && body.nomeProdotto !== "") {
        prodottoDaModificare.nomeProdotto = body.nomeProdotto;
    }
    if (body.ingredienti !== null && body.ingredienti.length !== 0) {
        prodottoDaModificare.ingredienti = body.ingredienti;
    }
    if (body.prezzo !== null && body.prezzo > 0) {
        prodottoDaModificare.prezzo = body.prezzo;
    }

    fileUtils.scriviDocumento(jsonFile)
}

function idGenerator(jsonFile) {
    do {
        var id = Math.floor(Math.random() * 500);
    } while (jsonFile.flatMap(sezione => sezione.listaProdotti)
        .some(prodotto => prodotto.idProdotto == id));
    return id;
}


