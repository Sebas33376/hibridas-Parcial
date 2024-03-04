import { MongoClient } from "mongodb"

const client = new MongoClient("mongodb+srv://josefina:josefina1998@proyecto.jxdpxfn.mongodb.net/");

client.connect()
    .then(async () => {
        console.log("Conectado");
    })
    .catch((err) => {
        console.log("No se pudo conectar");
        console.log(err);
    })