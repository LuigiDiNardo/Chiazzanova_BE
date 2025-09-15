import express from "express";
import prodottoRoutes from "./routes/prodotto_routes.js";
import sezioneRoutes from "./routes/sezione_routes.js";

const app = express();
const port = 9099;

//permetto di leggere il json del body
app.use(express.json());

app.use("/prodotto", prodottoRoutes);
app.use("/sezione", sezioneRoutes);

//metto il server in ascolto
app.listen(port, () => {console.log("SERVER AVVIATO")});