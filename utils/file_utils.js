import fs from "fs";

export function scriviDocumento(data) {
    fs.writeFileSync("menu.json", JSON.stringify(data));
}

export function recuperaDocumento() {
    let readFile = fs.readFileSync("menu.json");
    let jsonFile = JSON.parse(readFile);
    return jsonFile;
}
