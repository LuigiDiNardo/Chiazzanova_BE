import fs from "fs";


export function aggiungiProdotto(body) {

    let readFile = fs.readFileSync("menu.json");
    let jsonFile = JSON.parse(readFile);
    console.log("BodyRequest: \n\n" + body + "\n\n");

    let sezione = jsonFile.find(obj => body.sezione == obj.nomeSezione);
    if (sezione != null && sezione != "") {
        for (let prodotto of body.listaProdotti) {
            sezione.listaProdotti.push(prodotto);
        }
        fs.writeFileSync("menu.json", JSON.stringify(jsonFile));

        //cambiare i tipi di ritorno
        return sezione;
    }
    //cambiare i tipi di ritorno
    return "";
}

export function rimuoviProdotto(body) {

    let readFile = fs.readFileSync("menu.json");
    let jsonFile = JSON.parse(readFile);
    console.log("BodyRequest: \n\n" + body.nomeProdotto + "\n\n");

    let data = jsonFile.map(sezione => ({
        ...sezione, listaProdotti: sezione.listaProdotti.filter(
            prodotto => prodotto.nomeProdotto != body.nomeProdotto
        )
    }));
    fs.writeFileSync("menu.json", JSON.stringify(data));
}



