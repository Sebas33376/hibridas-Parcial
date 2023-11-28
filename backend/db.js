import { MongoClient } from "mongodb"

const client = new MongoClient("mongodb+srv://Sebas33376:Loria43314475@parciales.4qte1wq.mongodb.net");

const db = client.db("AH20232CP1")

client.connect()
    .then(async () => {
        console.log("Conectado");
    })
    .catch((err) => {
        console.log("No se pudo conectar");
        console.log(err);
    })