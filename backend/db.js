import { MongoClient } from "mongodb"

const client = new MongoClient("mongodb+srv://josefinanocelli:1234@proyecto.jxdpxfn.mongodb.net/");

const db = client.db("AH20232CP1")

client.connect()
    .then(async () => {
        console.log("Conectado");
    })
    .catch((err) => {
        console.log("No se pudo conectar");
        console.log(err);
    })