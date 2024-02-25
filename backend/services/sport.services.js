import { MongoClient} from "mongodb";

const client = new MongoClient("mongodb+srv://josefina:josefina1998@proyecto.jxdpxfn.mongodb.net/");

const db = client.db("Nexosport");

const collectionSports = db.collection("sports");

async function getSports() {
    return collectionSports.find().toArray();
}

export {
    getSports
}